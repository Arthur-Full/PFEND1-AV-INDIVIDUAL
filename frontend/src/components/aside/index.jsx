"useClient"

import Link from "next/link"
import "./cabecalho.css"


export default function header() {
    return (
        <>
            <main>
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
                        <span className="fs-xl">Sidebar</span>
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
                                Home
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
                                Dashboard
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
                                Orders
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
                                Products
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
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="">
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
                            <strong>mdo</strong>
                        </a>
                        <div
                            className="menu shadow"
                            style={{ position: "absolute", left: 312, top: 941, margin: 0 }}
                        >
                            <a className="menu-item" href="#">
                                New project...
                            </a>
                            <a className="menu-item" href="#">
                                Settings
                            </a>
                            <a className="menu-item" href="#">
                                Profile
                            </a>
                            <hr className="menu-divider" />
                            <a className="menu-item" href="#">
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}