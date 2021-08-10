interface Props {
  backgroundColor: string;
  fontColor: string;
  children: string;
}

export default function PrimaryButton({
  fontColor,
  backgroundColor,
  children,
}: Props) {
  return (
    <button
      className={`${backgroundColor} py-2 px-6 ${fontColor} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
