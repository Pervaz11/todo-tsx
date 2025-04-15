import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="container mx-auto p-4">
        {routing}
      </div>
    </div>
  );
}

export default App;

