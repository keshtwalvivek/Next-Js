import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavBar from "@/components/CustomNavBar";
import Footer from "@/components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <CustomNavBar />
        <div>
          <div>
            <h1>Side menu</h1>
          </div>
          <div className="my-4">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
