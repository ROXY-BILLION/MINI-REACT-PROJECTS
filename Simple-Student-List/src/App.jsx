import students from "./data/students";
import "./App.css";

function App() {
    return (
        <main className="students-page">
            <header className="students-header">
                <a href="#home" className="students-brand">
                    <span className="brand-icon">S</span>
                    STUDENT<span className="brand-accent">HUB.</span>
                </a>

                <span className="header-badge">
                    <span className="status-dot"></span>
                    STUDENT DIRECTORY
                </span>
            </header>

            <section className="students-hero" id="home">
                <p className="eyebrow">YOUR ACADEMIC SPACE</p>

                <h1>
                    Student
                    <br />
                    <span>directory.</span>
                </h1>

                <p className="hero-description">
                    Manage your academic community in one place.
                    Browse student records and explore their courses.
                </p>

                <div className="students-summary">
                    <div className="summary-icon">♧</div>

                    <div>
                        <span className="summary-label">
                            TOTAL STUDENTS
                        </span>

                        <h2>
                            {students.length.toString().padStart(2, "0")}
                        </h2>
                    </div>
                </div>
            </section>

            <section className="directory-section">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">DIRECTORY / 001</p>
                        <h2>All students<span>.</span></h2>
                    </div>

                    <span className="record-count">
                        {students.length} RECORDS
                    </span>
                </div>

                <div className="student-grid">
                    {students.map((student, index) => (
                        <article className="student-card" key={student.id}>
                            <div className="student-card-top">
                                <span className="student-number">
                                    STUDENT / {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="student-status">
                                    ACTIVE
                                </span>
                            </div>

                            <div className="student-avatar">
                                {student.name.trim().charAt(0).toUpperCase()}
                            </div>

                            <h3>{student.name}</h3>

                            <p className="student-course-label">
                                ENROLLED COURSE
                            </p>

                            <div className="student-course">
                                <span className="course-icon">↗</span>
                                <span>{student.course}</span>
                            </div>

                            <div className="student-card-footer">
                                <span>STUDENT ID</span>
                                <span>
                                    #{String(student.id).padStart(3, "0")}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {students.length === 0 && (
                    <div className="empty-state">
                        <div className="empty-icon">∅</div>
                        <h3>No students yet</h3>
                        <p>Your student records will appear here.</p>
                    </div>
                )}
            </section>

            <footer className="students-footer">
                <a href="#home" className="footer-brand">
                    STUDENTHUB<span>.</span>
                </a>

                <p>Organized learning. Better connections.</p>

                <span>© 2026 STUDENTHUB</span>
            </footer>
        </main>
    );
}

export default App;
