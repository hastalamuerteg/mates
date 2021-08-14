//Helpers
import { THEME } from "../helpers/helpers.styles";

//Components
import PrimaryButton from "./PrimaryButton";
import WarningButton from "./WarningButton";

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
  return (
    <div
      className={`box-row justify-between items-center my-2 px-2 pb-2 border-b border-opacity-25 border-${THEME.primary} text-${THEME.text.primary}`}
    >
      <div>
        <h3 className={`font-semibold`}>{title}</h3>
        <p className={`text-sm`}>{children}</p>
      </div>
      <div>
        {actionType === "Default" ? (
          <PrimaryButton backgroundColor={`bg-${THEME.primary}`}>
            {buttonTitle}
          </PrimaryButton>
        ) : (
          <WarningButton backgroundColor={`bg-${THEME.variants.warning}`}>
            {buttonTitle}
          </WarningButton>
        )}
      </div>
    </div>
  );
}
