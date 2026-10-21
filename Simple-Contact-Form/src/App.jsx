import { useState } from "react";
import "./App.css";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
};

function App() {
    const [formData, setFormData] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({
        type: "",
        message: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setFeedback({ type: "", message: "" });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setFeedback({ type: "", message: "" });

        // Frontend demo only: no message is sent to a server.
        setTimeout(() => {
            setIsSubmitting(false);

            setFeedback({
                type: "success",
                message:
                    "Your form passed validation! Connect a backend or email service to deliver your message.",
            });

            setFormData({ ...initialForm });
        }, 800);
    }

    function handleReset() {
        setFormData({ ...initialForm });
        setFeedback({ type: "", message: "" });
    }

    return (
        <main className="contact-page">
            <nav className="navbar">
                <a href="#home" className="brand">
                    <span className="brand-icon">V</span>
                    VELORA<span className="brand-dot">.</span>
                </a>

                <div className="nav-status">
                    <span className="status-dot"></span>
                    Available for projects
                </div>
            </nav>

            <section className="contact-layout" id="home">
                <div className="contact-intro">
                    <p className="eyebrow">
                        <span></span> LET'S CONNECT
                    </p>

                    <h1>
                        Have an idea?
                        <br />
                        <span>Let's make it</span>
                        <br />
                        happen.
                    </h1>

                    <p className="intro-description">
                        Have a project in mind, a question to ask, or an
                        opportunity to discuss? Send a message. I'd love
                        to hear what you're working on.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="detail-icon">@</div>
                            <div>
                                <p>Email us</p>
                                <h3>
                                    <a href="mailto:hello@velora.dev">
                                        hello@velora.dev
                                    </a>
                                </h3>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">↗</div>
                            <div>
                                <p>Response time</p>
                                <h3>Usually within 24 hours</h3>
                            </div>
                        </div>
                    </div>

                    <div className="intro-bottom">
                        <span className="decorative-line"></span>
                        <p>GOOD IDEAS START WITH A CONVERSATION.</p>
                    </div>
                </div>

                <div className="form-card">
                    <div className="form-heading">
                        <div>
                            <p className="form-step">01 / GET IN TOUCH</p>
                            <h2>Send a message</h2>
                        </div>

                        <div className="form-symbol">✳</div>
                    </div>

                    <p className="form-description">
                        Fill in the details below and let's get started.
                    </p>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >
                        <div className="input-row">
                            <div className="form-group">
                                <label htmlFor="name">Full name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    minLength={2}
                                    maxLength={100}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    maxLength={254}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                maxLength={150}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">What do you need?</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select a service
                                </option>
                                <option value="web">
                                    Web Development
                                </option>
                                <option value="app">
                                    App Development
                                </option>
                                <option value="ui">
                                    UI/UX Design
                                </option>
                                <option value="other">
                                    Something else
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me a little about your idea..."
                                value={formData.message}
                                onChange={handleChange}
                                minLength={10}
                                maxLength={3000}
                                required
                            ></textarea>

                            <span className="field-hint">
                                {formData.message.length}/3000 characters
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Checking your message..."
                                : "Send message"}

                            <span>{isSubmitting ? "…" : "↗"}</span>
                        </button>

                        <button
                            type="reset"
                            className="reset-btn"
                            disabled={isSubmitting}
                        >
                            Clear form
                        </button>

                        {feedback.message && (
                            <p
                                className={`form-feedback ${feedback.type}`}
                                role="status"
                                aria-live="polite"
                            >
                                {feedback.message}
                            </p>
                        )}

                        <p className="privacy-note">
                            Your details will only be used to respond to
                            your enquiry.
                        </p>
                    </form>
                </div>
            </section>

            <footer className="contact-footer">
                <a href="#home" className="footer-brand">
                    VELORA<span>.</span>
                </a>

                <p>Thoughtful work. Meaningful connections.</p>

                <span>© 2026 VELORA STUDIO</span>
            </footer>
        </main>
    );
}

export default App;
