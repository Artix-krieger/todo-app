import { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} =  useTodo();
    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false});
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <label htmlFor="todo-item"></label>
            <input
                id="todo-item"
                type="text"
                placeholder="Write Todo..."
                className="text-black w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-gray-600"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 font-bold">
                Add
            </button>
        </form>
    );
}

