import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-[#64748B] py-3 font-sans">
      <Link
        href="/"
        className="flex items-center hover:text-[#2563EB] transition-colors"
        title="Home"
      >
        <Home className="w-3.5 h-3.5 mr-1 text-[#64748B]" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-3 h-3 text-[#CBD5E1]" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#2563EB] transition-colors truncate max-w-[180px] md:max-w-none"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0F172A] font-medium truncate max-w-[200px] md:max-w-none">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
