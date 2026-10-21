import { useState } from "react";
import "./App.css";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        if (email.trim() === "" || password === "") {
            setMessage("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setMessage("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setMessage("Password must be at least 6 characters.");
            return;
        }

        setMessage("Form submitted successfully!");
    }

    return (
        <main className="login-page">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <section className="login-card">
                <a href="#home" className="login-logo" aria-label="Home">
                    V
                </a>

                <div className="login-heading">
                    <p className="login-eyebrow">YOUR NEXT CHAPTER</p>

                    <h1>
                        Welcome <span>Back</span>
                    </h1>

                    <p className="login-description">
                        Sign in to your account to continue.
                    </p>

                    <div className="heading-line"></div>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>

                        <div className="input-wrapper">
                            <span className="input-icon" aria-hidden="true">
                                @
                            </span>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    setMessage("");
                                }}
                                placeholder="Enter your email"
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <div className="input-wrapper">
                            <span className="input-icon" aria-hidden="true">
                                ◆
                            </span>

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    setMessage("");
                                }}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                                minLength={6}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword((previous) => !previous)
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <p className="password-hint">
                            Minimum 6 characters
                        </p>
                    </div>

                    <button type="submit" className="login-button">
                        <span>Login to account</span>
                        <span className="button-arrow">↗</span>
                    </button>

                    {message && (
                        <p
                            className={`form-message ${
                                message.includes("successfully")
                                    ? "success"
                                    : "error"
                            }`}
                            role="status"
                            aria-live="polite"
                        >
                            <span aria-hidden="true">
                                {message.includes("successfully") ? "✓" : "!"}
                            </span>
                            {message}
                        </p>
                    )}
                </form>

                <div className="login-footer">
                    <span className="footer-line"></span>
                    <p>SECURE ACCESS <span>•</span> YOUR SPACE</p>
                    <span className="footer-line"></span>
                </div>
            </section>

            <p className="page-caption">
                DESIGNED WITH INTENTION <span>© 2026</span>
            </p>
        </main>
    );
}

export default App;
