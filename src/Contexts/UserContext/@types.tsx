import { iFormEditAnnouncement } from "../../Components/Form/FormEditAnnouncement/@types";
import { iFormAnnouncement } from "../../Components/Form/FormRegisterAnnouncement/@types";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iModel {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iUserContext {
  cars: string[];
  setCars: React.Dispatch<React.SetStateAction<never[]>>;
  getCars: () => Promise<iModel[]>;
  models: iModel[];
  getModels: (brand: string) => Promise<iModel[]>;
  brands: string[];
  modelSelected: iModel | null;
  setModelSelected: React.Dispatch<React.SetStateAction<null>>;
  postAnnouncement: (data: iFormAnnouncement) => Promise<void | number>;
  patchAnnouncement: (
    announcementId: string,
    data: iFormEditAnnouncement
  ) => Promise<void | number>;
  getOneCar: (
    brand: string,
    name: string,
    year: string,
    fuel: number
  ) => Promise<iModel | null>;
}
