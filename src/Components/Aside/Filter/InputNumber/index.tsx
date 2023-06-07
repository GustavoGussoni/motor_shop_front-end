export const InputNumber = ({ placeholder }: any) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      id="quantity"
      name="quantity"
      min="0"
      step="100"
      className="h-9 w-28 divide-none outline-none appearance-none bg-grey-5 text-center"
    ></input>
  );
};
