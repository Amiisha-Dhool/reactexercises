import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}