//Components
import PrimaryButton from "./PrimaryButton";
import WarningButton from "./WarningButton";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  title: string;
  actionType?: string;
  buttonTitle: string;
  children?: string;
}

export default function AccountSettingsOptionEdition({
  title = "Small description for an action",
  children,
  actionType = " can be 'Warning' or 'Default. It renders a button for that action either delete or edit",
  buttonTitle = "button",
}: Props) {
  const { darkmode } = useThemeContext();
  return (
    <div
      className={`box-row justify-between items-center my-2 px-2 pb-2 border-b border-opacity-25 border-light-primary ${
        darkmode ? "text-dark-text-primary" : "text-light-text-secondary"
      }`}
    >
      <div>
        <h3 className={`font-semibold`}>{title}</h3>
        <p className={`text-sm`}>{children}</p>
      </div>
      <div>
        {actionType === "Default" ? (
          <PrimaryButton>{buttonTitle}</PrimaryButton>
        ) : (
          <WarningButton>{buttonTitle}</WarningButton>
        )}
      </div>
    </div>
  );
}
