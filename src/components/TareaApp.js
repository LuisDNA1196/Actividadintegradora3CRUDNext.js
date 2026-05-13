"use client";

import { useState } from "react";
import TareaForm from "./TareaForm";
import TareaCard from "./TareaCard";

export default function TareaApp() {
const [tareas, setTareas] = useState([
  {
    id: 1,
    titulo: "Terminar actividad de Next.js",
    descripcion: "Completar el CRUD y grabar el video de evidencia",
    prioridad: "Alta",
  },
  {
    id: 2,
    titulo: "Estudiar React Hooks",
    descripcion: "Repasar useState y useEffect para el proyecto",
    prioridad: "Media",
  },
  {
    id: 3,
    titulo: "Subir proyecto a GitHub",
    descripcion: "Crear repositorio y subir código final",
    prioridad: "Baja",
  },
]);  const [tareaEditando, setTareaEditando] = useState(null);

  const guardarTarea = (tarea) => {
    if (tareaEditando) {
      const tareasActualizadas = tareas.map((item) =>
        item.id === tareaEditando.id ? { ...tarea, id: tareaEditando.id } : item
      );

      setTareas(tareasActualizadas);
      setTareaEditando(null);
    } else {
      const nuevaTarea = {
        ...tarea,
        id: Date.now(),
      };

      setTareas([...tareas, nuevaTarea]);
    }
  };

  const eliminarTarea = (id) => {
    const confirmar = confirm("¿Deseas eliminar esta tarea?");

    if (confirmar) {
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    }
  };

  return (
    <section className="contenedor">
      <h1>Gestor de tareas</h1>

     <TareaForm
  key={tareaEditando ? tareaEditando.id : "nueva"}
  guardarTarea={guardarTarea}
  tareaEditando={tareaEditando}
/>

      <div className="grid">
        {tareas.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          tareas.map((tarea) => (
            <TareaCard
              key={tarea.id}
              tarea={tarea}
              editarTarea={setTareaEditando}
              eliminarTarea={eliminarTarea}
            />
          ))
        )}
      </div>
    </section>
  );
}