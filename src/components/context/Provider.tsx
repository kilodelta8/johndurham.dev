import React, { useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import the type if it's defined in another file
import { localUser, loginUser } from './Types'; // Import the type if it's defined in another file



function Provider({ children }: { children: React.ReactNode }) {
  // Explicitly type the state as User[]
  const [users, setUsers] = useState<localUser[]>([]);
  const [, setIsLoggedIn] = useState<{ id: number }>({ id: 0 }); // Fix initial value type

  const updateLoginStatus = (id: number) => {
    setIsLoggedIn({ id });
  };

  const fetchUser = async (id: number) => {
    const response = await axios.get(`http://localhost:3001/Users/${id}`);
    setUsers(response.data); // TypeScript now knows response.data is User[]
  };

  const createUser = async (user: localUser) => {
    const response = await axios.post('http://localhost:3001/Users', { user });
    const updatedUsers = [...users, response.data];
    setUsers(updatedUsers);
    updateLoginStatus(response.data.id);
  };

  const loginUser = async (user: loginUser) => {
    const response = await axios.post("http://localhost:3001/login", { user });
    if (response.data.id) {
      updateLoginStatus(response.data.id);
    } else {
      throw new Error("User does note exist...");
    }
  };

  return (
    <UserContext.Provider value={{ users, fetchUser, createUser, updateLoginStatus, loginUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { Provider };