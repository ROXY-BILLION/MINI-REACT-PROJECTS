import aidevImage from "./assets/Aidev.jpeg";
import appdev from "./assets/App3.jpeg";
import backenddev from "./assets/backend2.jpeg";
import "./App.css";
const services = [
    {
        title: "Aidev",
        image: aidevImage
    },
    {
        title: "AppDev",
        image: appdev
    },
    {
        title: "BackendDev",
        image: backenddev
    },
];

function App() {
    return (
        <div className="section">
            {services.map((service) => (
                <div className="box" key={service.title}>
                    <img
                        src={service.image}
                        alt={service.title}
                        width="300"
                    />
                    <h1>{service.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;