import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
     <Link href="/"> <h2>CRUD Next.js</h2>
        </Link>

      <div>
        <Link href="/">Inicio</Link>
        <Link href="/tareas">Tareas</Link>
      </div>
    </nav>
  );
}