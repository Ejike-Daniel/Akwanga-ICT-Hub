import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <section className=" font-manrope">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
