interface Props {
  children: string;
}

export default function WarningButton({ children }: Props) {
  return (
    <button
      className={`bg-warning py-2 px-6 mx-1 text-light-text-primary rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
