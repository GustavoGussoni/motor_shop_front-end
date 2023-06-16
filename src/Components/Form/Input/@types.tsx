export interface iInputForm {
  id: string;
  type: string;
  placeholder: string;
  disabled: boolean;
  label: string;
  register: object;
  value?: any;
  className?: string;
  onBlur?: (e: any) => void;
}
