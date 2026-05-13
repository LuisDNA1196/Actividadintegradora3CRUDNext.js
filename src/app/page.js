"use client";

import { useState } from "react";

export default function Home() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editando, setEditando] = useState(null);

  const guardarTarea = (e) => {
    e.preventDefault();

    if (titulo.trim() === "" || descripcion.trim() === "") {
      alert("Completa todos los campos");
      return;
    }

    if (editando !== null) {
      const tareasActualizadas = tareas.map((tarea) =>
        tarea.id === editando
          ? { ...tarea, titulo, descripcion }
          : tarea
      );

      setTareas(tareasActualizadas);
      setEditando(null);
    } else {
      const nuevaTarea = {
        id: Date.now(),
        titulo,
        descripcion,
      };

      setTareas([...tareas, nuevaTarea]);
    }

    setTitulo("");
    setDescripcion("");
  };

  const editarTarea = (tarea) => {
    setTitulo(tarea.titulo);
    setDescripcion(tarea.descripcion);
    setEditando(tarea.id);
  };

  const eliminarTarea = (id) => {
    const confirmar = confirm("¿Deseas eliminar esta tarea?");

    if (confirmar) {
      const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
      setTareas(tareasFiltradas);
    }
  };

  return (
    <main style={styles.contenedor}>
      <h1 style={styles.titulo}>CRUD de Tareas en Next.js</h1>

      <form onSubmit={guardarTarea} style={styles.formulario}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.botonGuardar}>
          {editando !== null ? "Actualizar tarea" : "Crear tarea"}
        </button>
      </form>

      <section style={styles.lista}>
        <h2>Lista de tareas</h2>

        {tareas.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          tareas.map((tarea) => (
            <div key={tarea.id} style={styles.card}>
              <h3>{tarea.titulo}</h3>
              <p>{tarea.descripcion}</p>

              <button
                onClick={() => editarTarea(tarea)}
                style={styles.botonEditar}
              >
                Editar
              </button>

              <button
                onClick={() => eliminarTarea(tarea.id)}
                style={styles.botonEliminar}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

const styles = {
  contenedor: {
    maxWidth: "700px",
    margin: "40px auto",
    fontFamily: "Arial",
  },
  titulo: {
    textAlign: "center",
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "80px",
  },
  botonGuardar: {
    padding: "10px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  lista: {
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  botonEditar: {
    marginRight: "10px",
    padding: "8px",
    backgroundColor: "#f0ad4e",
    border: "none",
    cursor: "pointer",
  },
  botonEliminar: {
    padding: "8px",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};