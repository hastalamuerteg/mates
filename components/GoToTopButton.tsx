import { GoUpButtonIcon } from "../icons/icons";

export default function GoToTopButton() {
  return (
    <div className="fixed bottom-8 right-12">
      <button className="text-white rounded-full shadow-xl">
        <GoUpButtonIcon
          style={{ fontSize: "32px", color: "white" }}
          className="bg-blue-light p-2 rounded-full shadow-xl"
        />
      </button>
    </div>
  );
}
