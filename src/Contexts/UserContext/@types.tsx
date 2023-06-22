export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  cars: string[];
  setCars: React.Dispatch<React.SetStateAction<never[]>>;
  getCars: () => Promise<void>;
  models: string[];
  getModels: (brand: string) => Promise<void>;
  brands: string[];
}
