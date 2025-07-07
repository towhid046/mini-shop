import { Outlet } from "react-router-dom";
import Navbar from "./../components/shared/Navbar/Navbar";
import Footer from "./../components/shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:hidden px-4 mt-5">
      </div>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
