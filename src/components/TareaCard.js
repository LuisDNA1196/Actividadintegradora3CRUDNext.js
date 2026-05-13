import Link from "next/link";

export default function TareaCard({ tarea, editarTarea, eliminarTarea }) {
  return (
    <article className="card">
      <span className="badge">{tarea.prioridad}</span>

      <h3>{tarea.titulo}</h3>
      <p>{tarea.descripcion}</p>

      <div className="acciones">

        <button onClick={() => editarTarea(tarea)}>Editar</button>

        <button className="danger" onClick={() => eliminarTarea(tarea.id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}