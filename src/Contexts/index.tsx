import { IProviderProps } from "./@types";
import { AuthProvider } from "./AuthContext";

export const Providers = ({ children }: IProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
