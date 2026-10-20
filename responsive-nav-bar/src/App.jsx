import { useState } from "react";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                Dev<span>Space</span>
            </a>

            <div className="desktop-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>

            <button
                className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {isOpen && (
                <div className="mobile-menu">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}

export default App;