"use Client"

import { createIcons, LineStyle, LayoutDashboard } from 'lucide-react';

export default function Aside() {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-dark vh-100 position-fixed "
            style={{ width: 280 }}
        >
            {" "}
            <a
                imagem="/imagens/logo.png"
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            
            >
                {" "}
                <svg className="bi pe-none me-2" width={40} height={32} aria-hidden="true">
                    <use xlinkHref="#bootstrap" />
                </svg>{" "}
                <span className="fs-4 text-white"></span>{" "}
            </a>{" "}
            <hr />{" "}
            <ul className="nav nav-pills flex-column mb-auto">
                {" "}
                <li className="nav-item">
                    {" "}
                    <a href="#" className="nav-link active text-white" aria-current="page">
                        {" "}
                        <svg className="bi pe-none me-2 text-white" width={16} height={16} aria-hidden="true">
                            <use xlinkHref="#home" />
                        </svg>
                        <LayoutDashboard className='p'/>Dashboard
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link link-body-emphasis text-white">
                        {" "}
                        <svg className="bi pe-none me-2 text-white" width={16} height={16} aria-hidden="true">
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Treinos
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link link-body-emphasis text-white">
                        {" "}
                        <svg className="bi pe-none me-2" width={16} height={16} aria-hidden="true">
                            <use xlinkHref="#table" />
                        </svg>
                        Orders
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link link-body-emphasis text-white">
                        {" "}
                        <svg className="bi pe-none me-2" width={16} height={16} aria-hidden="true">
                            <use xlinkHref="#grid" />
                        </svg>
                        Products
                    </a>{" "}
                </li>{" "}
                <li>{" "}</li>{" "}
            </ul>{" "}
            <hr />{" "}
        </div>
    )
}
