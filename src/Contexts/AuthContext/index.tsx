import { createContext, useState } from "react";
import {
  iAuthContext,
  iAuthProviderProps,
  iCepProps,
  iUserProps,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api, cepApi } from "../../Services";
import { iRegisterFormValues } from "../../Components/Form/FormRegister/@types";
import { iLogin } from "../../Components/Form/FormLogin/loginSchema";
import { toast } from "react-toastify";
import { parseCookies, setCookie } from "nookies";

export const AuthContext = createContext({} as iAuthContext);
export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [cep, setCep] = useState<iCepProps | null>(null);
  const [user, setUser] = useState<iUserProps | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
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
    const id = toast.loading("Verificando dados...");
    try {
      const request = await api.post("login", data);

      if (request) {
        toast.update(id, {
          render: "Login realizado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
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
        autoClose: 1000,
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

  const authCep = async (value: string) => {
    try {
      const valueCep = value;
      let newValue = "";
      if (valueCep.length > 8) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        newValue = valueCep.substring(5, 0) + valueCep.substring(6);
      }

      const cepRequest = await cepApi.get(`${newValue}/json`);
      setCep(cepRequest.data);
    } catch (error) {
      console.error(error);
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
        authCep,
        filter,
        setFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
