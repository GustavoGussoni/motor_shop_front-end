import { iTextAreaProps } from "./@types";

export const TextArea = ({
  id,
  placeholder,
  disabled,
  label,
  register,
  value,
  className,
  defaultValue,
}: iTextAreaProps) => {
  return (
    <fieldset className="w-full flex flex-col gap-y-2.5">
      <label className="text-grey-1 text-body-2 font-bold" htmlFor={id}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        value={value}
        className={`px-4 h-[84px] w-full border-[1.5px] border-grey-7 outline-none rounded text-grey-1 placeholder-grey-3 resize-none py-[10px] ${className}`}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};
