"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock3 } from "lucide-react";
import dados from "@/dados-fit.json";
import "./dash.css";
import Header from "@/components/header";

export default function Treinos() {
  const [Treinos, setTreinos] = useState([]);
  const [busca, setBusca] = useState("");
  useEffect(() => { setTreinos(dados); }, []);

  const filtrados = Treinos.filter((treino) => `${treino.titulo} ${treino.categoria} ${treino.objetivo}`.toLowerCase().includes(busca.toLowerCase()));
  const destaque = Treinos[0];

  return <main className="forge-shell">
    <Header searchValue={busca} onSearchChange={setBusca} />
    <section className="forge-content">
      <header className="forge-topbar">
        <button className="btn forge-menu d-lg-none" aria-label="Menu"><span>☰</span></button>
      </header>
      <div className="forge-main container-fluid">
        <section className="forge-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(5,8,10,.96) 0%, rgba(5,8,10,.82) 42%, rgba(5,8,10,.12) 100%), url('/Imagens/fundo-login.png')" }}>
          <div className="forge-hero-copy">
            <span className="forge-eyebrow">BEM-VINDO, ATLETA</span>
            <h1>JUNTOS MAIS<br />FORTES</h1>
            <p>Aqui é o seu espaço de evolução. Treine com foco, acompanhe seu progresso e faça parte da nossa comunidade Forge.</p>
            {destaque && <Link className="btn forge-btn" href={`/cross-fit/dashboard/${destaque.id}`}>VER MEU TREINO <ArrowRight size={17} /></Link>}
          </div>
          <span className="forge-hero-note">CROSSFIT<br />É MAIS QUE<br />UM TREINO,<br />É UM ESTILO<br />DE VIDA.</span>
        </section>

        <section className="forge-featured">
          <div className="forge-section-heading"><div><h2>TREINOS EM DESTAQUE</h2><span /></div><span className="forge-results">{filtrados.length} treinos</span></div>
          <div className="row g-3">
            {filtrados.map((treino, index) => <div className="col-12 col-md-6 col-xl-4" key={treino.id}>
              <article className="forge-card h-100">
                <Link href={`/cross-fit/dashboard/${treino.id}`} className="forge-card-image" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.5), transparent 75%), url('${treino.imagem}')` }} aria-label={`Abrir ${treino.titulo}`}>
                  <span className="forge-tag">{treino.categoria}</span>
                </Link>
                <div className="forge-card-body">
                  <h3><Link href={`/cross-fit/dashboard/${treino.id}`}>{treino.titulo}</Link></h3>
                  <p className="forge-card-summary">{treino.resumo}</p>
                  <div className="forge-meta"><span><Clock3 size={16} />{treino.duracao}</span><span><BarChart3 size={16} />Nível: {treino.nivel}</span></div>
                  <Link className="btn forge-btn forge-btn-wide" href={`/cross-fit/dashboard/${treino.id}`}>{index === 0 ? "INICIAR TREINO" : "VER DETALHES"}<ArrowRight size={16} /></Link>
                </div>
              </article>
            </div>)}
            {filtrados.length === 0 && <div className="col-12"><p className="forge-empty">Nenhum treino encontrado. Tente outro termo.</p></div>}
          </div>
        </section>
      </div>
    </section>
  </main>;
}
