export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  cars: string[];
  setCars: React.Dispatch<React.SetStateAction<never[]>>;
  getCars: () => void;
}
