import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MultipleItems from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import Scrollbar from "./Components/ScrollBar/Scrollbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <MultipleItems />
      <Scrollbar />
      <Footer />
    </div>
  );
}

export default App;
