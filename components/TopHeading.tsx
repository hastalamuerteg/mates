interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
  return (
    <div className="flex flex-grow p-4">
      <h1 className="text-4xl text-blue-700 font-semibold">{message}</h1>
    </div>
  );
}
