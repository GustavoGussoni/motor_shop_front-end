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
import { iLogin } from "../../Components/Form/FormLogin/loginSchema";
import { toast } from "react-toastify";

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
      setUser(request.data);
      navigate("/login");
      return request.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: iLogin) => {
    const id = toast.loading("Please wait...");
    try {
      const request = await api.post("login", data);

      if (request) {
        toast.update(id, {
          render: "Login realizado com sucesso!",
          type: "success",
          isLoading: false,
        });
      }
    } catch (error) {
      toast.update(id, {
        render: "Informações invalidas",
        type: "error",
        isLoading: false,
      });
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
        userLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
