//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
  const { primaryColor } = useThemeContext();
  return (
    <div className="flex flex-grow p-4">
      <h1
        className={`text-2xl md:text-5xl text-${primaryColor} font-bold tracking-wide`}
      >
        {message}
      </h1>
    </div>
  );
}
