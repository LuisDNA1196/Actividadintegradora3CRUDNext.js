import Link from "next/link";

export default function DetalleTarea({ params }) {
  return (
    <section className="contenedor">
      <h1>Detalle de tarea</h1>

      <div className="card">
        <h2>Tarea con ID: {params.id}</h2>

        <p>
          Esta ruta demuestra el uso de enrutamiento dinámico en Next.js mediante
          la carpeta <strong>[id]</strong>.
        </p>

        <Link href="/tareas">Regresar a tareas</Link>
      </div>
    </section>
  );
}