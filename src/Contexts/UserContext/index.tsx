import { createContext, useState } from "react";
import { iUserContext, iUserProviderProps } from "./@types";
import { toast } from "react-toastify";
import { api, carsApi } from "../../Services";
import { parseCookies } from "nookies";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState<string[] | []>([]);
  const [modelSelected, setModelSelected] = useState();

  const cookies = parseCookies();
  const { user_token } = cookies;

  const getCars = async () => {
    try {
      const request = await carsApi.get("cars");

      setCars(request.data);
      setBrands(Object.keys(request.data));
      getModels(Object.keys(request.data)[0]);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getModels = async (brand: string) => {
    try {
      const request = await carsApi.get(`cars/?brand=${brand}`);
      setModels(request.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const postAnnouncement = async (data: any) => {
    try {
      data.fuel = parseInt(data.fuel);
      data.kilometers = parseInt(data.kilometers);
      data.price_fipe = parseInt(data.price_fipe);
      data.price = parseInt(data.price);

      await api.post(
        "/announcement",
        { ...data, is_activate: true },
        { headers: { Authorization: `Bearer ${user_token}` } }
      );
      toast.success("Anúncio criado com sucesso");
    } catch (error) {
      console.log(error.response.data);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
