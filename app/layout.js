import { Inter } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Aditya Narayan | Full Stack Developer",
  description: "Portfolio of Aditya Narayan, showcasing scalable and responsive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="noise-overlay"></div>
        <Background />
        {children}
      </body>
    </html>
  );
}
