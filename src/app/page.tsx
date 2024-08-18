import "./style.css"
import Image from 'next/image'

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


export default function HomePage() {
    return (
        <html lang="en">

            <head>
                <title>Landing Page</title>
            </head>

            <body>
                <div className="container">
                    <header className="header">
                        <div className="logo">
                            <Image alt='Dog Image' src="/queen_bee.png" width={120} height={0} />
                        </div>
                        <nav className="nav-links">
                            <a href="#">Administrativo</a>
                        </nav>
                    </header>

                    <main className="content">
                        <div className="welcome-text">
                            <h1>Olá! Meu Nome é Gabriela!</h1>
                        </div>
                        <div className="personal-picture">
                            <Image alt='Personal Picture' src="/gabi.png" width={600} height={0} />
                        </div>
                    </main>

                    <footer className="footer">
                        <div className="social-links">
                            <FaInstagram />
                            <FaFacebook />
                            <FaLinkedin />
                        </div>
                    </footer>
                </div>
            </body>

        </html>
    );
}