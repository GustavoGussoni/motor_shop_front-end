import { NavigateFunction } from "react-router-dom";
import { iLogin } from "../../Components/Form/FormLogin/loginSchema";
import { iRegisterFormValues } from "../../Components/Form/FormRegister/@types";
import { iProfileEditProps } from "../../Components/Form/FromProfileEdit/@types";

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
  id: string;
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

export interface iCommentsProps {
  id: string;
  comments: string;
  created_at: Date;
  user: {
    name: string;
  };
}

export interface iAddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  addOn: string;
}

export interface iAnnouncementProps {
  id: string;
  model: string;
  brand: string;
  year: string;
  fuel: number;
  kilometers: number;
  color: string;
  price_fipe: number;
  price: number;
  description: string;
  cover_image: string;
  is_activate: boolean;
  userId: string;
  user: { name: string; description: string; is_advertiser: boolean };
  image_gallery: [{ image: string; id: string }];
  comments: iCommentsProps[];
}

export interface iGetAnnouncementFilter {
  brand: string[];
  model: string[];
  color: string[];
  year: string[];
  fuel: string[];
  kilometers: string[];
  price: string[];
}

export interface iAuthContext {
  cep: iCepProps | null;
  setCep: React.Dispatch<React.SetStateAction<iCepProps | null>>;
  user: iUserProps | null;
  setUser: React.Dispatch<React.SetStateAction<iUserProps | null>>;
  userRegister: (
    data: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogin: (data: iLogin) => void;
  navigate: NavigateFunction;
  getUserData: () => void;
  authCep: (value: string) => void;
  filter: iGetAnnouncementFilter | null;
  setFilter: React.Dispatch<
    React.SetStateAction<iGetAnnouncementFilter | null>
  >;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userLogout: () => void;
  getUserAnnouncement: (userId: string | undefined) => Promise<void>;
  userAnnouncements: iAnnouncementProps[];
  getAllAnnouncement: () => Promise<void>;
  allAnnouncements: [] | iAnnouncementProps[];
  getAnnouncementById: (
    announcementId: string | undefined
  ) => Promise<iAnnouncementProps | void>;
  announcement: iAnnouncementProps | null;
  user_token: string;
  setAnnouncementId: React.Dispatch<React.SetStateAction<string | null>>;
  announcementId: string | null;
  editAddress: (
    data: iAddressProps,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userUpdateProfile: (
    data: iProfileEditProps,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userId: string | undefined
  ) => void;
  typeModal: string;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
  userDeleteProfile: (
    userId: string | undefined,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  deleteAnnouncement: (announcementId: string) => Promise<void>;
  setAnnouncement: React.Dispatch<
    React.SetStateAction<iAnnouncementProps | null>
  >;
  getAnnouncementsFiltered: () => Promise<void>;
  setComments: React.Dispatch<React.SetStateAction<iCommentsProps[] | []>>;
  comments: iCommentsProps[] | [];
  setAllAnnouncements: React.Dispatch<
    React.SetStateAction<[] | iAnnouncementProps[]>
  >;
  renderAll: boolean;
  setRenderAll: React.Dispatch<React.SetStateAction<boolean>>;
  announcementsFiltered: [] | iAnnouncementProps[];
  setAnnouncementsFiltered: React.Dispatch<
    React.SetStateAction<iAnnouncementProps[] | []>
  >;
  filterData: iGetAnnouncementFilter;
  getAnnouncementByQuery: (key: string, value: string) => Promise<any>;
}
