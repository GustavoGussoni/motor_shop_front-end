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
  defaultValue,
  onChange,
}: iInputForm) => {
  return (
    <fieldset className="w-full flex flex-col gap-y-2.5">
      <label className="text-grey-1 text-body-2 font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        value={value}
        className={`px-4 h-[48px] w-full border-[1.5px] border-grey-7 outline-none rounded text-grey-1 placeholder-grey-3 ${className}`}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};
