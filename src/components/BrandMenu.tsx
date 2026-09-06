import Link from "next/link";

const extraLinks = [
  { href: "https://www.nickconnelly.com", label: "nickconnelly.com", external: true },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

export default function BrandMenu() {
  return (
    <details className="relative shrink-0 group">
      <summary className="list-none inline-flex items-center gap-1.5 text-xl font-medium text-gray-800 hover:text-gray-900 cursor-pointer select-none [&::-webkit-details-marker]:hidden">
        Health & Wellness
        <svg
          className="h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>

      <div className="absolute left-0 top-full mt-3 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
        {extraLinks.map((link) =>
          "external" in link ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ),
        )}
      </div>
    </details>
  );
}
