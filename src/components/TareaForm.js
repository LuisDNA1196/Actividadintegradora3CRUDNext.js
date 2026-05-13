"use client";

import { useEffect, useState } from "react";

export default function TareaForm(props) {
  const { guardarTarea, tareaEditando } = props;  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Media");

  useEffect(() => {
  if (!tareaEditando) return;
  setTitulo(tareaEditando.titulo);
  setDescripcion(tareaEditando.descripcion);
  setPrioridad(tareaEditando.prioridad);
}, [tareaEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !descripcion) {
      alert("Completa todos los campos");
      return;
    }

    guardarTarea({
      titulo,
      descripcion,
      prioridad,
    });

    setTitulo("");
    setDescripcion("");
    setPrioridad("Media");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <button type="submit">
        {tareaEditando ? "Actualizar tarea" : "Crear tarea"}
      </button>
    </form>
  );
}