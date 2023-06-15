export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  description: string;
  is_advertiser: boolean | string;
  address: iAddressProps;
}

export interface iAddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  addOn: string;
}
