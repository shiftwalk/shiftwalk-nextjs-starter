import Link from "next/link";

export default function FancyLink({
  destination,
  a11yText,
  label,
  extraClasses,
  logo,
}) {
  return (
    <Link href={destination}>
      <a
        aria-label={a11yText}
        className={`underline hover:text-gray-500 focus:text-gray-500 ${extraClasses}`}>
        {label}
      </a>
    </Link>
  );
}
