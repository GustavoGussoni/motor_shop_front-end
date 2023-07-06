import { createContext, useState } from "react";
import {
  iAnnouncementProps,
  iAuthContext,
  iAuthProviderProps,
  iCepProps,
  iUserProps,
  iAddressProps,
  iGetAnnouncementFilter,
  iCommentsProps,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { iRegisterFormValues } from "../../Components/Form/FormRegister/@types";
import { api, cepApi } from "../../Services";
import { iLogin } from "../../Components/Form/FormLogin/loginSchema";
import { toast } from "react-toastify";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { iProfileEditProps } from "../../Components/Form/FromProfileEdit/@types";

export const AuthContext = createContext({} as iAuthContext);
export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [typeModal, setTypeModal] = useState<string>("");
  const [cep, setCep] = useState<iCepProps | null>(null);
  const [user, setUser] = useState<iUserProps | null>(null);
  const [announcementId, setAnnouncementId] = useState<string | null>(null);
  const [comments, setComments] = useState<iCommentsProps[] | []>([]);
  const [announcement, setAnnouncement] = useState<iAnnouncementProps | null>(
    null
  );
  const [renderAll, setRenderAll] = useState(true);
  const [announcementsFiltered, setAnnouncementsFiltered] = useState<
    iAnnouncementProps[] | []
  >([]);
  const [userAnnouncements, setUserAnnouncements] = useState<
    iAnnouncementProps[] | []
  >([]);
  const [allAnnouncements, setAllAnnouncements] = useState<
    iAnnouncementProps[] | []
  >([]);

  const [filter, setFilter] = useState<iGetAnnouncementFilter | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const cookies = parseCookies();
  const { user_token, user_email } = cookies;

  const userLogin = async (data: iLogin) => {
    const id = toast.loading("Verificando dados...");
    try {
      const request = await api.post("login", data);
      if (request) {
        api.defaults.headers.common.authorization = `Bearer ${request.data.token}`;
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

  const userRegister = async (
    data: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
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

  const userUpdateProfile = async (
    data: iProfileEditProps,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userId: string | undefined
  ) => {
    const id = toast.loading("Verificando dados...");
    try {
      setLoading(true);
      const request = await api.patch(`users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      });
      if (request.statusText === "OK") {
        toast.update(id, {
          render: "Usuário atualizado com sucesso",
          type: "success",
          autoClose: 1000,
          isLoading: false,
        });
        setUser(request.data);
      }
    } catch (error) {
      toast.update(id, {
        render: "Informações invalidas",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const userDeleteProfile = async (
    userId: string | undefined,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const id = toast.loading("Verificando dados...");
    try {
      setLoading(true);
      const request = await api.delete(`users/${userId}`);
      if (request.statusText === "No Content") {
        destroyCookie(null, "user_token");
        destroyCookie(null, "user_email");
        toast.update(id, {
          render: "Usuário deletado com sucesso",
          type: "success",
          autoClose: 1000,
          isLoading: false,
        });

        navigate("/");
        return;
      }
    } catch (error) {
      toast.update(id, {
        render: "Foi impossível deletar o usuário",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
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
      const find_user = data.filter(
        (el: iUserProps) => el.email === user_email
      );
      return setUser(find_user[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserAnnouncement = async (userId: string | undefined) => {
    try {
      const request = await api.get("announcement");

      const data = await request.data.data;

      const find_user_announcements = data.filter((el: iAnnouncementProps) => {
        return el.userId === userId;
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
      setAllAnnouncements(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData: iGetAnnouncementFilter = {
    brand: [],
    model: [],
    color: [],
    year: [],
    fuel: [],
    kilometers: [],
    price: [],
  };

  const getAnnouncementsFiltered = async () => {
    setRenderAll(true);
    // setAllAnnouncements(allAnnouncements);
    try {
      let request = await api.get(`announcement?group=brand`);
      let data = await request.data;
      const brand = Object.keys(data);
      filterData.brand = brand;

      request = await api.get(`announcement?group=model`);
      data = await request.data;
      const model = Object.keys(data);
      filterData.model = model;

      request = await api.get(`announcement?group=color`);
      data = await request.data;
      const color = Object.keys(data);
      filterData.color = color;

      request = await api.get(`announcement?group=year`);
      data = await request.data;
      const year = Object.keys(data);
      filterData.year = year;

      request = await api.get(`announcement?group=fuel`);
      data = await request.data;
      const fuel = Object.keys(data);
      filterData.fuel = fuel;

      request = await api.get(`announcement?group=kilometers`);
      data = await request.data;
      const kilometers = Object.keys(data);
      filterData.kilometers = kilometers;

      request = await api.get(`announcement?group=price`);
      data = await request.data;
      const price = Object.keys(data);
      filterData.price = price;

      setFilter(filterData);
      // setAllAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnnouncementByQuery = async (key: string, value: string) => {
    try {
      const request = await api.get(`announcement?${key}=${value}`);
      const data = request.data.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAnnouncementById = async (
    announcementId: string | undefined
  ): Promise<iAnnouncementProps | void> => {
    try {
      const request = await api.get(`/announcement/${announcementId}`);
      const data = request.data;
      // localStorage.setItem("cudecurioso", dataString);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      const dataString = JSON.stringify(data);
      setCookie(null, "announcement_data", dataString, {
        expires: expirationDate,
      });
      setAnnouncement(data);
      setComments(data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const editAddress = async (
    data: iAddressProps,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    const userId = user?.id;
    const id = toast.loading("Verificando dados...");
    try {
      setLoading(true);
      const request = await api.patch(`users/${userId}`, { address: data });
      if (request) {
        toast.update(id, {
          render: "Endereço atualizado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      }
      setUser(request.data);
      setIsOpen(false);
    } catch (error) {
      toast.update(id, {
        render: "Informações invalidas",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteAnnouncement = async (announcementId: string): Promise<void> => {
    try {
      await api.delete(`announcement/${announcementId}`, {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      });

      const findAnnouncements = userAnnouncements.filter(
        (el: iAnnouncementProps) => {
          return el.id !== announcementId;
        }
      );

      setUserAnnouncements(findAnnouncements);
      toast.success("Anúncio excluído com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao excluir o anúncio.");
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
        getAnnouncementById,
        announcement,
        user_token,
        setAnnouncementId,
        announcementId,
        userUpdateProfile,
        editAddress,
        typeModal,
        setTypeModal,
        deleteAnnouncement,
        userDeleteProfile,
        setAnnouncement,
        getAnnouncementsFiltered,
        setComments,
        comments,
        setAllAnnouncements,
        renderAll,
        setRenderAll,
        announcementsFiltered,
        setAnnouncementsFiltered,
        filterData,
        getAnnouncementByQuery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
