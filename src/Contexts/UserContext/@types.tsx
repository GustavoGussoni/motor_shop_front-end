export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  cars: string[];
  setCars: React.Dispatch<React.SetStateAction<never[]>>;
  getCars: () => Promise<void>;
  models: any[];
  getModels: (brand: string) => Promise<void>;
  brands: string[];
  modelSelected: any;
  setModelSelected: React.Dispatch<React.SetStateAction<any>>;
  postAnnouncement: (data: any) => Promise<void>;
}
