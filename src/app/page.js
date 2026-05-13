import Link from "next/link";

export default function Home() {
  return (
    <section className="home">
      <h1>Actividad Integradora 3</h1>
      <h2>CRUD en Next.js</h2>

      <p>
        Esta aplicación permite crear, leer, actualizar y eliminar tareas usando
        componentes, estado y enrutamiento en Next.js.
      </p>

      <Link href="/tareas" className="btn">
        Ir al CRUD
      </Link>
    </section>
  );
}