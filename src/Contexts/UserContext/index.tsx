import { createContext, useState } from "react";
import { iUserContext, iUserProviderProps } from "./@types";
import { toast } from "react-toastify";
import { api, carsApi } from "../../Services";
import { parseCookies } from "nookies";
import { iFormEditAnnouncement } from "../../Components/Form/FormEditAnnouncement/@types";
import { iFormAnnouncement } from "../../Components/Form/FormRegisterAnnouncement/@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState<string[] | []>([]);
  const [modelSelected, setModelSelected] = useState(null);

  const cookies = parseCookies();
  const { user_token } = cookies;

  const getCars = async () => {
    try {
      const request = await carsApi.get("cars");

      setCars(request.data);
      setBrands(Object.keys(request.data));
      getModels(Object.keys(request.data)[0]);
      return request.data;
    } catch (error) {
      toast.error(error.request.data.message);
    }
  };

  const getModels = async (brand: string) => {
    try {
      const request = await carsApi.get(`cars/?brand=${brand}`);
      setModels(request.data);
      return request.data;
    } catch (error) {
      toast.error(error.request.data.message);
    }
  };

  const getOneCar = async (
    brand: string,
    name: string,
    year: string,
    fuel: number
  ) => {
    try {
      const request = await carsApi.get(
        `cars/unique?brand=${brand}?name=${name}?year=${year}?fuel=${fuel}`
      );

      return request.data;
    } catch (error) {
      toast.error(error.request.data.message);
    }
  };

  const postAnnouncement = async (data: iFormAnnouncement) => {
    try {
      const request = await api.post(
        "/announcement",
        { ...data, is_activate: true },
        { headers: { Authorization: `Bearer ${user_token}` } }
      );
      toast.success("Anúncio criado com sucesso");
      return request.status;
    } catch (error) {
      toast.error(error.request.data.message);
    }
  };

  const patchAnnouncement = async (
    announcementId: string,
    data: iFormEditAnnouncement
  ) => {
    try {
      const request = await api.patch(
        `announcement/${announcementId}`,
        { ...data },
        { headers: { Authorization: `Bearer ${user_token}` } }
      );
      toast.success("Anúncio editado com sucesso");
      return request.status;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        cars,
        setCars,
        getCars,
        models,
        getModels,
        brands,
        modelSelected,
        postAnnouncement,
        setModelSelected,
        patchAnnouncement,
        getOneCar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
