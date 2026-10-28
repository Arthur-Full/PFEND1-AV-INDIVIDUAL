"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Dumbbell, CalendarDays, ChartNoAxesColumnIncreasing, Flame, UsersRound, Settings } from "lucide-react";

const links = [
  { href: "/cross-fit/dashboard", label: "Início", Icon: House },

];

export default function Aside() {
  const pathname = usePathname();
  const detailPage = pathname?.includes("/dashboard/") && pathname !== "/cross-fit/dashboard/";
  return (
    <aside className="forge-aside d-flex flex-column flex-shrink-0 p-3 vh-100">
      <Link href="/cross-fit/dashboard" className="forge-brand d-flex align-items-center justify-content-center mb-4">
        <img src="/Imagens/logo.png" alt="Forge Fitness Training" />
      </Link>
      <nav className="nav nav-pills flex-column gap-1" aria-label="Navegação principal">
        {links.map(({ href, label, Icon }, index) => {
          const active = detailPage ? index === 1 : index === 0;
          return <Link key={label} href={href} className={`nav-link d-flex align-items-center gap-3 ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
            <Icon size={20} aria-hidden="true" />{label}
          </Link>;
        })}
      </nav>
      <p className="forge-aside-quote mt-auto mb-0">DISCIPLINA HOJE,<br />RESULTADOS AMANHÃ.</p>
    </aside>
  );
}
