//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  backgroundColor: string;
  children: string;
}

export default function PrimaryButton({ backgroundColor, children }: Props) {
  const { secondaryColor, textSecondary } = useThemeContext();
  return (
    <button
      className={`${backgroundColor} py-2 px-8 mx-1 text-${textSecondary} active:bg-${secondaryColor} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
