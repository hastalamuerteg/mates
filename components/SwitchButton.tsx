//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

export default function SwitchButton() {
  const { toggleTheme, darkmode } = useThemeContext();

  function handleSwitchButton() {
    toggleTheme();
  }

  return (
    <div className={`box-col justify-center items-center text-center mt-4`}>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full ${
            darkmode ? "bg-dark-tertiary" : "bg-light-tertiary"
          } border-2 appearance-none cursor-pointer`}
          onChange={handleSwitchButton}
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-6 rounded-full bg-light-secondary cursor-pointer`}
        ></label>
      </div>
      <small
        className={`my-2 mx-1 ${
          darkmode ? "text-dark-text-primary" : "text-light-text-secondary"
        }`}
      >
        {darkmode ? "Light" : "Dark"} mode
      </small>
    </div>
  );
}
