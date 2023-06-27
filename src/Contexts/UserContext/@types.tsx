import { iFormAnnouncement } from "../../Components/FormRegisterAnnouncement/@types";

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
  getCars: () => Promise<void>;
  models: iModel[];
  getModels: (brand: string) => Promise<void>;
  brands: string[];
  modelSelected: iModel | null;
  setModelSelected: React.Dispatch<React.SetStateAction<null>>;
  postAnnouncement: (data: iFormAnnouncement) => Promise<void | number>;
}
