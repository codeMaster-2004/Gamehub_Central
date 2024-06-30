// src/Components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../api';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        try {
          const userData = await fetchUserData(storedUser.id);
          setUser(userData);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>High Score 1: {user.high_score1 !== null ? user.high_score1 : 'N/A'}</p>
          <p>High Score 2: {user.high_score2 !== null ? user.high_score2 : 'N/A'}</p>
          <p>High Score 3: {user.high_score3 !== null ? user.high_score3 : 'N/A'}</p>
          <p>High Score 4: {user.high_score4 !== null ? user.high_score4 : 'N/A'}</p>
          <p>Time Spent: {user.time_spent !== null ? user.time_spent : '0'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
