import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "./login.css";

export default function Home() {

    return (

        <main>

            {/* <img className="img_logo" src="./imagens/fundo-login.jpg" alt="logo" /> */}
            <div className="container-img"></div>

            <div className="container-box">
                <div className="box-login">
                    <div className="linha"></div>
                    <div className="box-form">

                        <h1>BEM VINDO DE VOLTA</h1>
                        <p>Acesse sua conta e continue o seu Evolução! </p>

                        <div className="form">

                        
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg><input type="text" placeholder="E-mail"/></div>
                            <div className="espaco-img"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole preview-icon"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg><input type="password" placeholder="Senha"/></div>

                        </div>

                        <Link className="btn-logar" href="/cross-fit/dashboard">Entrar<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right preview-icon"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></Link>
                        <p className="auth-register-link">Ainda não tem cadastro? <Link href="/cross-fit/register">Criar conta</Link></p>

                    </div>

                </div>
            </div>

        </main>

    )

}
