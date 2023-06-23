import { createContext, useState } from "react";
import {
  iAnnouncementProps,
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
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const AuthContext = createContext({} as iAuthContext);
export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [cep, setCep] = useState<iCepProps | null>(null);
  const [user, setUser] = useState<iUserProps | null>(null);
  const [userAnnouncements, setUserAnnouncements] = useState<
    iAnnouncementProps[] | []
  >([]);
  const [allAnnouncements, setAllAnnouncements] = useState<
    iAnnouncementProps[] | []
  >([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
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
      console.log(data);
      const request = await api.post("users", data);
      if (request.statusText === "Created") {
        setUser(request.data);
        setIsOpen(true);
      }
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
        navigate("");
        await getUserData();
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

  const userLogout = () => {
    const id = toast.loading("Verificando dados...");
    setUser(null);
    destroyCookie(null, "user_token");
    destroyCookie(null, "user_email");
    toast.update(id, {
      render: "Volte sempre!",
      type: "success",
      autoClose: 1000,
      isLoading: false,
    });
    navigate("");
  };

  const getUserData = async () => {
    try {
      const request = await api.get("users");

      const data = await request.data;
      const find_user = data.filter((el: iUserProps) => el.email === user_email);
      return setUser(find_user[0]);
    } catch (error) {
      console.log("erro catch getUser", error);
    }
  };

  const getUserAnnouncement = async (userId: string) => {
    try {
      const request = await api.get("announcement");

      const data = await request.data;
      const find_user_announcements = data.filter((el: iUserProps) => {
        // console.log("aqui", el === userId);
        return el.id === userId;
      });
      setUserAnnouncements(find_user_announcements);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAnnouncement = async () => {
    try {
      const request = await api.get("announcement");
      const data = await request.data;
      setAllAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const authCep = async (value: string) => {
    try {
      const valueCep = value;
      let newValue = "";
      if (valueCep.length === 8) {
        newValue = valueCep.substring(5, 0) + "-" + valueCep.substring(5);
      }
      const cepRequest = await cepApi.get(`${newValue}/json`);
      if (cepRequest.statusText === "OK") {
        setCep(cepRequest.data);
      }
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
        isOpen,
        setIsOpen,
        userLogout,
        getUserAnnouncement,
        userAnnouncements,
        getAllAnnouncement,
        allAnnouncements,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
