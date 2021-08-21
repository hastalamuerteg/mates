interface Props {
  children: string;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <button
      className={`bg-light-primary text-light-text-primary py-2 px-8 mx-1 transition-colors
      active:bg-light-secondary rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
