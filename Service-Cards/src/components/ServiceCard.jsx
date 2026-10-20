function ServiceCard({ title, about, icon: Icon, bottom }) {
    return (
        <div className="card">
            <div className="icon">
                <Icon size={32} />
            </div>

            <h1>{title}</h1>
            <p>{about}</p>
            <p>{bottom}</p>

            <button>Schedule a call</button>
        </div>
    );
}

export default ServiceCard;