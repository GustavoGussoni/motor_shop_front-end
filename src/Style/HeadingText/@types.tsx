export interface iBasedHeadingProps {
  children: React.ReactNode;
  tag: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLTitleElement, MouseEvent>) => void;
}
