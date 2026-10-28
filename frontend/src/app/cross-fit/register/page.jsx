import Link from "next/link";
import "../login.css";
import "./register.css";

export default function Register() {
    return (
        <main className="register-page">
            <div className="container-img"></div>

            <div className="container-box register-container-box">
                <div className="box-login register-box-login">
                    <div className="linha"></div>
                    <div className="box-form register-box-form">
                        <h1>CRIE SUA CONTA</h1>
                        <p>Faça parte da comunidade Forge e comece sua evolução.</p>

                        <div className="form register-form">
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><input type="text" name="nome" placeholder="Nome completo" autoComplete="name" /></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><input type="email" name="email" placeholder="E-mail" autoComplete="email" /></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72l.45 2.7a2 2 0 0 1-.57 1.69L7.7 8.37a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 1.69-.57l2.7.45a2 2 0 0 1 1.65 1.93z"/></svg><input type="tel" name="telefone" placeholder="Telefone" autoComplete="tel" /></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><input type="date" name="nascimento" aria-label="Data de nascimento" /></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><input type="password" name="senha" placeholder="Senha" autoComplete="new-password" /></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><input type="password" name="confirmarSenha" placeholder="Confirme sua senha" autoComplete="new-password" /></div>
                        </div>

                        <Link className="btn-logar" href="/cross-fit">Cadastrar<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></Link>
                        <p className="auth-register-link">Já tem uma conta? <Link href="/cross-fit">Voltar para o login</Link></p>
                    </div>
                </div>
            </div>
        </main>
    );
}
