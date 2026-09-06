"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/nicks-journey", label: "Nick's Journey" },
  { href: "/healthy-living", label: "Healthy Living" },
  { href: "/resources", label: "Resources" },
] as const;

const extraLinks = [
  { href: "https://www.nickconnelly.com", label: "nickconnelly.com", external: true },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path || "/";
}

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

type NavLinksProps = {
  variant: "desktop" | "mobile";
};

export default function NavLinks({ variant }: NavLinksProps) {
  const pathname = normalizePath(usePathname());

  if (variant === "desktop") {
    return (
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(pathname, link.href) ? "nav-link-active" : "text-gray-600"}`}
            aria-current={isActive(pathname, link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <details className="md:hidden relative group">
      <summary className="list-none inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 cursor-pointer [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6 group-open:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        <svg
          className="h-6 w-6 hidden group-open:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </summary>

      <div className="absolute top-full right-0 mt-3 w-56 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="px-2 py-3 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm transition-colors duration-200 px-2 py-1 rounded-md ${
                isActive(pathname, link.href)
                  ? "text-gray-900 font-semibold bg-gray-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-200 pt-3 space-y-3">
            {extraLinks.map((link) =>
              "external" in link ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 px-2 py-1"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 px-2 py-1"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </details>
  );
}
