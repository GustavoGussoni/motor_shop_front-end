import { createContext, useState } from "react";
import {
  iAuthContext,
  iAuthProviderProps,
  iCepProps,
  iUserProps,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services";
import { iRegisterFormValues } from "../../Components/Form/FormRegister/@types";

export const AuthContext = createContext({} as iAuthContext);
export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [cep, setCep] = useState<iCepProps | null>(null);
  const [user, setUser] = useState<iUserProps | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);
  const navigate = useNavigate();

  const userRegister = async (
    data: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await api.post("users", data);
      navigate("");
      return request.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        cep,
        setCep,
        user,
        setUser,
        userRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
