import Link from 'next/link'

export default function fancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`underline ${extraClasses}`}>
        {label}
      </a>
    </Link>
  )
}