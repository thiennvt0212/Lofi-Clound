import Header from "./components/layout/Header";
import HomePage from "./Page/home";
import "./App.css";
import Sidebar from "./components/layout/sidebar";
import Footer from "./components/layout/Footer";
import { DarkModeProvider } from "./components/layout/Context";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Header />
      <Sidebar />
      <HomePage />
      <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
