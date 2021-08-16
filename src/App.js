import "./styles.css";
import Navbar from "./components/navbar.js";
import NewRecording from "./content/new-recording/newrecording";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <NewRecording />
    </div>
  );
}
