"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, Clock3, Dumbbell, Timer, Target } from "lucide-react";
import dados from "@/dados-fit.json";
import Header from "@/components/header";
import "../dash.css";

export default function Treino() {
  const params = useParams();
  const [treino, setTreino] = useState();
  const [aba, setAba] = useState("exercicios");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const treinoEncontrado = dados.find((f) => f.id === params.id);
    setTreino(treinoEncontrado);
  }, [params.id]);

  const exerciciosFiltrados = treino?.exercicios.filter((exercicio) => `${exercicio.nome} ${exercicio.grupo}`.toLowerCase().includes(busca.toLowerCase())) ?? [];

  return <main className="forge-shell">
    <Header searchValue={busca} onSearchChange={setBusca} />
    <section className="forge-content">
      <header className="forge-topbar">
        <button className="btn forge-menu d-lg-none" aria-label="Menu"><span>☰</span></button>
        <label className="forge-search"><span className="visually-hidden">Busca</span><input placeholder="Buscar treinos, WODs, exercícios..." aria-label="Buscar" /></label>
      </header>
      <div className="forge-main container-fluid forge-detail-main">
        <Link href="/cross-fit/dashboard" className="forge-back"><ArrowLeft size={17} /> Voltar para os treinos</Link>
        {!treino ? <div className="forge-empty">Treino não encontrado. <Link href="/cross-fit/dashboard">Voltar à lista</Link></div> : <>
          <section className="forge-detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,8,10,.97) 0%, rgba(4,8,10,.87) 42%, rgba(4,8,10,.16) 100%), url('${treino.imagem}')` }}>
            <div className="forge-detail-copy">
              <span className="forge-tag">{treino.categoria}</span>
              <h1>{treino.titulo}</h1>
              <div className="forge-detail-meta"><span><Clock3 size={18} />{treino.duracao}</span><span><BarChart3 size={18} />Nível: {treino.nivel}</span><span><Target size={18} />Objetivo: {treino.objetivo}</span></div>
              <p>{treino.resumo}</p>
            </div>
          </section>

          <div className="forge-tabs" role="tablist" aria-label="Informações do treino">
            <button role="tab" aria-selected={aba === "exercicios"} className={aba === "exercicios" ? "selected" : ""} onClick={() => setAba("exercicios")}>EXERCÍCIOS</button>
            <button role="tab" aria-selected={aba === "orientacoes"} className={aba === "orientacoes" ? "selected" : ""} onClick={() => setAba("orientacoes")}>ORIENTAÇÕES</button>
          </div>

          {aba === "exercicios" ? <div className="forge-exercises" role="tabpanel">
            {exerciciosFiltrados.map((exercicio, index) => <article className="forge-exercise" key={exercicio.nome}>
              <div className="forge-exercise-photo" style={{ backgroundImage: `linear-gradient(135deg, rgba(15,20,23,.2), rgba(0,0,0,.74)), url('${treino.imagem}')` }}><Dumbbell size={25} /></div>
              <span className="forge-step">{index + 1}</span>
              <div className="forge-exercise-info"><h2>{exercicio.nome}</h2><div className="forge-prescription"><span><Dumbbell size={16} />{exercicio.series} séries</span><b>×</b><strong>{exercicio.repeticoes}</strong></div><small><Timer size={16} />Descanso: {exercicio.descanso}</small></div>
              <div className="forge-exercise-tip"><div><Dumbbell size={16} />{exercicio.grupo}</div><p>{exercicio.orientacao}</p></div>
            </article>)}
            {exerciciosFiltrados.length === 0 && <p className="forge-empty">Nenhum exercício encontrado.</p>}
          </div> : <section className="forge-guidance" role="tabpanel"><h2>Como fazer este treino</h2><ol>{treino.orientacoes.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol><p className="forge-guidance-note">Faça os movimentos respeitando seus limites e priorizando a técnica em cada repetição.</p></section>}
          <Link className="forge-back forge-back-bottom" href="/cross-fit/dashboard"><ArrowLeft size={16} /> Todos os treinos <ArrowRight size={16} /></Link>
        </>}
      </div>
    </section>
  </main>;
}
