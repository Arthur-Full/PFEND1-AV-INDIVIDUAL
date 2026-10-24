"useClient"
import Link from "next/link"
import "./cabecalho.css"

export default function aside() {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-1"
            style={{ width: 280 }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 md:mb-0 md:me-auto theme-inverse text-decoration-none"
            >
                <svg className="bi pe-none me-2" width={40} height={32} aria-hidden="true">
                    <use href="#bootstrap" />
                </svg>
                <span className="fs-xl">
                    <font dir="auto" style={{ verticalAlign: "inherit" }}>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            Barra lateral
                        </font>
                    </font>
                </span>
            </a>
            <hr />
            <ul className="nav flex-column align-items-start mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use href="#home" />
                        </svg>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Lar
                            </font>
                        </font>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link theme-inverse">
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use href="#speedometer2" />
                        </svg>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Painel
                            </font>
                        </font>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link theme-inverse">
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use href="#table" />
                        </svg>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Pedidos
                            </font>
                        </font>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link theme-inverse">
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use href="#grid" />
                        </svg>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Produtos
                            </font>
                        </font>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link theme-inverse">
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use href="#people-circle" />
                        </svg>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Clientes
                            </font>
                        </font>
                    </a>
                </li>
            </ul>
            <hr />
            <div>
                <a
                    className="d-flex align-items-center fg-body text-decoration-none"
                    href="#"
                    role="button"
                    data-bs-toggle="menu"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-circle me-2"
                    />
                    <strong>
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                mdo
                            </font>
                        </font>
                    </strong>
                </a>
                <div className="menu shadow">
                    <a className="menu-item" href="#">
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Novo projeto...
                            </font>
                        </font>
                    </a>
                    <a className="menu-item" href="#">
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Configurações
                            </font>
                        </font>
                    </a>
                    <a className="menu-item" href="#">
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                Perfil
                            </font>
                        </font>
                    </a>
                    <hr className="menu-divider" />
                    <a className="menu-item" href="#">
                        <font dir="auto" style={{ verticalAlign: "inherit" }}>
                            <font dir="auto" style={{ verticalAlign: "inherit" }}>
                                sair
                            </font>
                        </font>
                    </a>
                </div>
            </div>
        </div>

    )
}