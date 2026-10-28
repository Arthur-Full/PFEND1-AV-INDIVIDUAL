import Link from "next/link";
import { House, LogOut, Search } from "lucide-react";
import "./cabecalho.css";

export default function Header({ searchValue = "", onSearchChange }) {
  return (
    <header className="forge-header d-flex align-items-center">
      <Link href="/cross-fit/dashboard" className="forge-header-brand d-flex align-items-center text-decoration-none">
        <img src="/Imagens/logo.png" alt="Forge Fitness Training" />
        <span className="forge-header-title">FORGE <b>FITNESS</b><small>TRAINING</small></span>
      </Link>

      <label className="forge-header-search">
        <Search size={19} aria-hidden="true" />
        <input
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange?.(event.target.value)}
          placeholder="Buscar treinos, WODs, exercícios..."
          aria-label="Buscar treinos, WODs e exercícios"
        />
      </label>
{/* 
      <nav className="nav nav-pills" aria-label="Navegação principal">
        <Link href="/cross-fit/dashboard" className="nav-link active d-flex align-items-center gap-2" aria-current="page">
          <House size={19} aria-hidden="true" />
          <span>Início</span>
        </Link>
      </nav> */}

      <Link href="/cross-fit" className="forge-header-logout d-flex align-items-center justify-content-center" aria-label="Sair" title="Sair">
        <LogOut size={20} aria-hidden="true" />
      </Link>
    </header>
  );
}
