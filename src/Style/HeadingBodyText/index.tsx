import { iBasedHeadingTextBodyProps } from "./@types";

export const HeadingTextBody = ({
  children,
  className,
  tag,
}: iBasedHeadingTextBodyProps) => {
  return (
    <>
      {tag === "body-1-600" && (
        <span className={`text-body-1 font-semibold ${className}`}>
          {children}
        </span>
      )}
      {tag === "body-1-400" && (
        <span className={`text-body-1 font-normal ${className}`}>
          {children}
        </span>
      )}
      {tag === "body-2-600" && (
        <span className={`text-body-2 font-semibold ${className}`}>
          {children}
        </span>
      )}
      {tag === "body-2-500" && (
        <span className={`text-body-2 fontWeight-500 ${className}`}>
          {children}
        </span>
      )}
      {tag === "body-2-400" && (
        <span className={`text-body-2 font-normal ${className}`}>
          {children}
        </span>
      )}
    </>
  );
};
