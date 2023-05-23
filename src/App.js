import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterRoutes from "./Router/Router";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <RouterRoutes />
      </div>
      <Footer />
    </div>
  );
}
