import { THEME } from "../helpers/helpers.styles";

interface Props {
  backgroundColor: string;
  children: string;
}

export default function WarningButton({ backgroundColor, children }: Props) {
  return (
    <button
      className={`${backgroundColor} py-2 px-6 mx-1 text-${THEME.text.secondary} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
