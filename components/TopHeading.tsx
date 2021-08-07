import { GLOBAL_TYPOGRAPHY } from "../helpers/helpers.styles";

interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
  return (
    <div className="flex flex-grow p-4">
      <h1
        className={`text-5xl ${GLOBAL_TYPOGRAPHY.topHeadingColor} font-bold tracking-wide`}
      >
        {message}
      </h1>
    </div>
  );
}
