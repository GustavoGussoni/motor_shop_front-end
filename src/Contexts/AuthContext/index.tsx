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
import { parseCookies, setCookie } from "nookies";

export const AuthContext = createContext({} as iAuthContext);
export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [cep, setCep] = useState<iCepProps | null>(null);
  const [user, setUser] = useState<iUserProps | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);
  const navigate = useNavigate();

  const cookies = parseCookies();
  const { user_token, user_email } = cookies;

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
    const id = toast.loading('Verificando dados...');
    try {
      const request = await api.post("login", data);

      if (request) {
        toast.update(id, {
          render: "Login realizado com sucesso!",
          type: "success",
          isLoading: false,
        });
        setCookie(null, "user_token", request.data.token);
        setCookie(null, "user_email", data.email);
        navigate("/profile/user");
      }
    } catch (error) {
      toast.update(id, {
        render: "Informações invalidas",
        type: "error",
        isLoading: false,
      });
    }
  };

  const getUserData = async () => {
    try {
      const request = await api.get("users");

      const data = await request.data;
      const find_user = data.filter((el) => el.email === user_email);

      setUser(find_user);
    } catch (error) {
      console.log("erro catch getUser", error);
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
        navigate,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
