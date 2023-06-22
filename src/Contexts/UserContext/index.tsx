import { createContext, useState } from "react";
import { iUserContext, iUserProviderProps } from "./@types";
import { toast } from "react-toastify";
import { carsApi } from "../../Services";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState<string[]>(Object.keys(cars));

  const getCars = async () => {
    try {
      const request = await carsApi.get("cars");

      setCars(request.data);
      setBrands(Object.keys(request.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getModels = async (brand: string) => {
    try {
      const request = await carsApi.get(`cars/?brand=${brand}`);
      console.log(request);
      setModels(request.data);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
