import {useEffect, useState} from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

export default function App(){
    const [tasks, setTasks] = useState([]);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    function handleAddTask(title) {
        const cleanTitle = title.trim();
        if (!cleanTitle) return;
        setError("");

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: cleanTitle,
                completed : false,
                userId: 1,
            }),
        })

            .then((res) =>{
                if (!res.ok) throw new Error("Error creating task");
                return res.json();
            }).then((createdTask) => {
                setTasks((prev) => [createdTask, ...prev]);
        }).catch((e) =>{
            setError(e.message);
        });

    }

    useEffect(() => {
        setLoading(true);
        setError("");

        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => {
                if (!res.ok) throw new Error("Error en la peticion get");
                return res.json();
            })
            .then((data) => {
                setTasks(data);
            }).catch((e) => {
                setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Para hacer</h1>
            <TaskForm onAddTask={handleAddTask}/>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <TaskList tasks={tasks} />
        </div>
    );

}