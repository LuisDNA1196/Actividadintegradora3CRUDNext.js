import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CRUD en Next.js",
  description: "Actividad Integradora 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}