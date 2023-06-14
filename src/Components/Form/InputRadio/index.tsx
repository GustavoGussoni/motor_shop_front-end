import { iInputRadio } from "./@types";

// eslint-disable-next-line react-refresh/only-export-components
export const sizeStyle = {
  medium: "button-medium",
  big: "button-big",
};

// eslint-disable-next-line react-refresh/only-export-components
export const variantStyle = {
  brand1: "bg-brand-1 hover:bg-brand-2 text-white-fixed",
  outline2:
    "bg-white-fixed hover:bg-grey-0 text-grey-1 hover:text-grey-10 border-[1.5px] border-grey-4",
};

export const InputRadio = ({
  id,
  disabled,
  label,
  register,
  value,
  className,
  variant,
  size,
}: iInputRadio) => {
  return (
    <fieldset
      className={`${className} ${variantStyle[variant]} ${sizeStyle[size]}`}
    >
      <label htmlFor={id}>{label}</label>
      <input type="radio" disabled={disabled} {...register} value={value} />
    </fieldset>
  );
};
