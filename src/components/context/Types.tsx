// filepath: /src/components/context/types.ts

export type localUser = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };

export type loginUser = {
    id: number;
    email: string;
    password: string;
};
  
  export type UserContextType = {
    users: localUser[];
    fetchUser: (id:number) => Promise<void>;
    createUser: (user: localUser) => Promise<void>;
    loginUser: (user: loginUser) => Promise<void>;
    updateLoginStatus: (id: number) => void;
  };