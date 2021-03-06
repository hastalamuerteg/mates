interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
  return (
    <div className="flex flex-grow p-4">
      <h1
        className={`text-2xl md:text-5xl text-light-primary font-bold tracking-wide`}
      >
        {message}
      </h1>
    </div>
  );
}
