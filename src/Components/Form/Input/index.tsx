import { iInputForm } from "./@types";

export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  value,
  className,
  onBlur,
}: iInputForm) => {
  return (
    <fieldset className="w-full flex flex-col gap-y-2.5">
      <label className="text-grey-1 text-body-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        value={value}
        className={`px-4 h-[48px] max-w-[315px] w-full border-[1.5px] border-grey-7 outline-none rounded text-grey-3 placeholder-grey-3 ${className}`}
        onBlur={onBlur}
      />
    </fieldset>
  );
};
