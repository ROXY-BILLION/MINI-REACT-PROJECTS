function Box({ title, children }) {
    return (
        <section className="box-content">
            <h3 className="box-title">{title}</h3>
            <div className="box-body">{children}</div>
        </section>
    );
}

export default Box;
