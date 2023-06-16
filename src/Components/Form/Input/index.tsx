import { iInputForm } from "./@types";

export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  value,
  onBlur,
}: iInputForm) => {
  return (
    <fieldset className="flex flex-col gap-y-2.5">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        value={value}
        className="px-4 h-[48px] max-w-[315px] w-full border-[1.5px] border-grey-7 outline-none rounded text-grey-3"
        onBlur={onBlur}
      />
    </fieldset>
  );
};
