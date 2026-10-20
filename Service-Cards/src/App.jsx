import ServiceCard from "./components/ServiceCard";
import {
    Mail,
    Share2,
    Code2,
} from "lucide-react";
import "./App.css";
function App() {
  return (
    <div className="Services">
      <div className="cards">
        <h2>Our Services</h2>
        <div className="btw">
          <p>Our digital marketing service boosts your online presence with SEO , social media, and targeted ads.</p>
          <button>Schedule a call</button>
        </div>
      
        <ServiceCard icon={Mail} title="Email Marketing" about="We need to build your lists and send them newsletter regularly or simply an email blast" bottom="What is included in this service" />

        <ServiceCard icon={Share2} title="Socail Media Marketing" about="We help you to promote your brand on facebook, twitter, instagram with best socail strategies"
          bottom="What is included in this service" />
        
        <ServiceCard icon={Code2} title="Web & App Development" about="We develop digital assets, such as websites, microsite and mobile apps, for your business"
          bottom="What is included in this service" />
        
      </div>
    </div>
  )
}
export default App;