//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  backgroundColor: string;
  children: string;
}

export default function WarningButton({ backgroundColor, children }: Props) {
  const { textSecondary } = useThemeContext();
  return (
    <button
      className={`${backgroundColor} py-2 px-6 mx-1 text-${textSecondary} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
