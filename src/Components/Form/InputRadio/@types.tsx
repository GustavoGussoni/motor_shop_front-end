import { sizeStyle, variantStyle } from "./index";

export interface iInputRadio {
  id: string;
  variant: keyof typeof variantStyle;
  size: keyof typeof sizeStyle;
  className?: string;
  disabled: boolean;
  label: string;
  register: object;
  value: any;
  checked?: boolean | undefined;
}
