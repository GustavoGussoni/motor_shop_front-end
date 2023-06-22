import { createContext, useState } from "react";
import { iUserContext, iUserProviderProps } from "./@types";
import { toast } from "react-toastify";
import { carsApi } from "../../Services";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    try {
      const request = await carsApi.get("cars");
      const data = await request.data;

      console.log(data);
      setCars(request.data);
      return request.data;
    } catch (error) {
      console.log(error);

      // toast.error(error.response.data.message);
    }
  };
  // const getAllAnnouncement = async () => {
  //   try {
  //     const request = await api.get("announcement");
  //     const data = await request.data;
  //     setAllAnnouncements(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <UserContext.Provider
      value={{
        cars,
        setCars,
        getCars,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
