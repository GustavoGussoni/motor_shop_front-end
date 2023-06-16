import { iBasedHeadingProps } from "./@types";

export const HeadingText = ({
  children,
  tag,
  className,
}: iBasedHeadingProps) => {
  return (
    <>
      {tag === "heading-1-700" && (
        <h1 className={`text-heading-1 font-bold ${className}`}>{children}</h1>
      )}
      {tag === "heading-2-600" && (
        <h1 className={`text-heading-2 font-semibold ${className}`}>
          {children}
        </h1>
      )}
      {tag === "heading-3-600" && (
        <h2 className={`text-heading-3 font-semibold ${className}`}>
          {children}
        </h2>
      )}
      {tag === "heading-3-500" && (
        <h2 className={`text-heading-3 font-medium ${className}`}>
          {children}
        </h2>
      )}
      {tag === "heading-4-600" && (
        <h3 className={`text-heading-4 font-semibold ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-4-500" && (
        <h3 className={`text-heading-4 font-semibold ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-5-600" && (
        <h3 className={`text-heading-5 font-semibold ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-5-500" && (
        <h3 className={`text-heading-5 font-medium ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-6-600" && (
        <h3 className={`text-heading-6 font-semibold ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-6-500" && (
        <h3 className={`text-heading-6 font-medium ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-7-600" && (
        <h3 className={`text-heading-7 font-semibold ${className}`}>
          {children}
        </h3>
      )}
      {tag === "heading-7-500" && (
        <h3 className={`text-heading-7 font-medium ${className}`}>
          {children}
        </h3>
      )}
    </>
  );
};
