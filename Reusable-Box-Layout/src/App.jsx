import Box from "./components/Box";
import "./App.css";

function App() {
    return (
        <main className="dashboard">
            <aside className="sidebar">
                <a href="#home" className="dashboard-brand">
                    <span className="brand-mark">N</span>
                    NORTHSTAR<span className="brand-period">.</span>
                </a>

                <p className="sidebar-label">WORKSPACE</p>

                <nav className="sidebar-nav">
                    <a href="#home" className="nav-item active">
                        <span>◫</span> Overview
                    </a>

                    <a href="#profile" className="nav-item">
                        <span>◎</span> Profile
                    </a>

                    <a href="#notifications" className="nav-item">
                        <span>◉</span> Notifications
                    </a>

                    <a href="#tasks" className="nav-item">
                        <span>✓</span> Tasks
                    </a>
                </nav>

                <div className="sidebar-bottom">
                    <div className="sidebar-avatar">D</div>
                    <div>
                        <p>David</p>
                        <span>React Developer</span>
                    </div>
                </div>
            </aside>

            <section className="dashboard-main" id="home">
                <header className="topbar">
                    <div>
                        <p className="breadcrumb">WORKSPACE / OVERVIEW</p>
                        <h1>My Dashboard<span>.</span></h1>
                    </div>

                    <div className="topbar-date">
                        <span className="date-icon">◷</span>
                        <span>MY WORKSPACE</span>
                    </div>
                </header>

                <section className="welcome-banner">
                    <div className="welcome-content">
                        <p className="banner-label">YOUR SPACE, YOUR PROGRESS</p>

                        <h2>
                            Good to have
                            <br />
                            you here, David.
                        </h2>

                        <p>
                            Your workspace is ready. Keep learning,
                            stay organized, and make progress every day.
                        </p>

                        <a href="#tasks" className="banner-link">
                            VIEW YOUR TASKS <span>↗</span>
                        </a>
                    </div>

                    <div className="banner-art" aria-hidden="true">
                        <div className="art-circle circle-one"></div>
                        <div className="art-circle circle-two"></div>
                        <div className="art-square">N</div>
                        <span className="art-caption">KEEP MOVING.</span>
                    </div>
                </section>

                <section className="overview-section">
                    <div className="section-title">
                        <div>
                            <p className="section-eyebrow">YOUR WORKSPACE</p>
                            <h2>At a glance</h2>
                        </div>

                        <span className="overview-tag">OVERVIEW / 001</span>
                    </div>

                    <div className="dashboard-grid">
                        <div className="dashboard-box profile-box" id="profile">
                            <div className="box-topline">
                                <span className="box-icon green-icon">◎</span>
                                <span className="box-index">01</span>
                            </div>

                            <Box title="Profile">
                                <div className="profile-content">
                                    <div className="profile-avatar">D</div>
                                    <div>
                                        <p className="profile-name">David</p>
                                        <p className="profile-subtitle">
                                            React Learner
                                        </p>
                                    </div>
                                </div>

                                <div className="box-divider"></div>

                                <div className="info-row">
                                    <span>Current course</span>
                                    <strong>React</strong>
                                </div>
                            </Box>

                            <p className="box-caption">YOUR PERSONAL SPACE</p>
                        </div>

                        <div
                            className="dashboard-box notification-box"
                            id="notifications"
                        >
                            <div className="box-topline">
                                <span className="box-icon orange-icon">◉</span>
                                <span className="box-index">02</span>
                            </div>

                            <Box title="Notifications">
                                <div className="notification-summary">
                                    <span className="notification-number">03</span>
                                    <span className="notification-status">
                                        NEW MESSAGES
                                    </span>
                                </div>

                                <p className="box-description">
                                    You have 3 new messages waiting for your
                                    attention.
                                </p>
                            </Box>

                            <p className="box-caption">STAY UP TO DATE</p>
                        </div>

                        <div className="dashboard-box task-box" id="tasks">
                            <div className="box-topline">
                                <span className="box-icon blue-icon">✓</span>
                                <span className="box-index">03</span>
                            </div>

                            <Box title="Tasks">
                                <div className="task-content">
                                    <span className="task-marker"></span>
                                    <div>
                                        <p className="task-name">
                                            Finish the React project.
                                        </p>
                                        <p className="task-status">
                                            CURRENT PRIORITY
                                        </p>
                                    </div>
                                </div>

                                <div className="task-progress">
                                    <span></span>
                                </div>

                                <p className="progress-caption">
                                    Keep going. You're building momentum.
                                </p>
                            </Box>

                            <p className="box-caption">ONE STEP AT A TIME</p>
                        </div>
                    </div>
                </section>

                <footer className="dashboard-footer">
                    <span>NORTHSTAR<span className="footer-dot">.</span></span>
                    <p>Build with purpose. Progress with intention.</p>
                    <span>© 2026 WORKSPACE</span>
                </footer>
            </section>
        </main>
    );
}

export default App;
