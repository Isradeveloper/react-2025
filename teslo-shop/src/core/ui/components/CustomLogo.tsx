import { Link } from 'react-router';

interface Props {
  subtitle?: string;
}

export const CustomLogo = ({ subtitle = 'Shop' }: Props) => {
  return (
    <Link
      to="/"
      className="flex items-center whitespace-nowrap">
      <span className="font-bold text-xl m-0 whitespace-nowrap">Teslo |</span>
      <p className="text-sm m-0 whitespace-nowrap text-muted-foreground px-2">
        {subtitle}
      </p>
    </Link>
  );
};
