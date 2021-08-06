import { GLOBAL_TYPOGRAPHY } from "../helpers/helpers.styles";

interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
  return (
    <div className="flex flex-grow p-4">
      <h1
        className={`text-4xl ${GLOBAL_TYPOGRAPHY.topHeadingColor} font-semibold`}
      >
        {message}
      </h1>
    </div>
  );
}
