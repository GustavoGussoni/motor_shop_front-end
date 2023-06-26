import React from "react";
import { IProviderProps } from "./@types";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: IProviderProps) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </React.Fragment>
  );
};
