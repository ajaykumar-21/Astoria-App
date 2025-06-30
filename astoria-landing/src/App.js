import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectDetails from "./components/ProjectDetails";
import LocationInfo from "./components/LocationInfo";
import LeadForm from "./components/LeadForm";
import Amenities from "./components/Amenities";
import BuilderInfo from "./components/BuilderInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ProjectDetails />
      <LeadForm />
      <Amenities />
      <LocationInfo />
      <BuilderInfo />
      <Footer />
    </div>
  );
}

export default App;
