import { useState } from "react";

export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        onAddTask(title);
        setTitle("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button >Añadir</button>
        </form>
    );


}
