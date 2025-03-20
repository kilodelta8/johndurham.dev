import { createContext } from "react";
import { UserContextType } from "./Types"; // Import the type if it's defined in another file
import { Provider } from "./Provider"; // Import the Provider component

export const UserContext = createContext<UserContextType | null>(null);

// Re-export the Provider component
export { Provider };