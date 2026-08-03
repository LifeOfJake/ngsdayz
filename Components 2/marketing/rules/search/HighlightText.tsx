interface HighlightTextProps {
  text: string;
  query: string;
}

export default function HighlightText({
  text,
  query,
}: HighlightTextProps) {
  if (!query.trim()) {
    return text;
  }

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(`(${escaped})`, "ig");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const match =
          part.toLowerCase() === query.toLowerCase();

        return match ? (
          <mark
            key={index}
            className="
              rounded
              bg-lime-400/20
              px-0.5
              text-lime-300
            "
          >
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </>
  );
}