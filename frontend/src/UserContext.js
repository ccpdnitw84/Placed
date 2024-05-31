import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/dashboard', {withCredentials: true})
      .then(response => {
        if(response.status === 200) {
          setUser(response.data.user);
        }
      })
      .catch(err => {
        console.error('Error: ',err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};