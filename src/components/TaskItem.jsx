export default function TaskItem({ task }) {
    return (
        <li>
            <span>{task.title}</span>
            {" — "}
            <strong>{task.completed ? "Completada" : "Pendiente"}</strong>
        </li>
    );
}
