import { NavigateFunction } from 'react-router-dom';
import { iLogin } from '../../Components/Form/FormLogin/loginSchema';
import { iRegisterFormValues } from '../../Components/Form/FormRegister/@types';

export interface iAuthProviderProps {
  children: React.ReactNode;
}

export interface iCepProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface iUserProps {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  description: string;
  is_admin: string;
  is_advertiser: string;
  address: iAddressProps;
}

export interface iAddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  add_on: string;
}

export interface iAuthContext {
  cep: iCepProps | null;
  setCep: React.Dispatch<React.SetStateAction<iCepProps | null>>;
  user: iUserProps | null;
  setUser: React.Dispatch<React.SetStateAction<iUserProps | null>>;
  userRegister: (data: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  userLogin: (data: iLogin) => void;
  navigate: NavigateFunction
}
