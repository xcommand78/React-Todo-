import React, { useEffect, useState } from 'react';

export default function Input() {
    const [todo, setTodo] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getJson = () => JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(getJson());
    }, []);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') return alert('Please enter a task');
        
        const updatedTasks = [...tasks, todo];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setTodo('');
    };

    const handleDelete = (i) => {
        const tasksList = tasks.filter((_, index) => index !== i);
        localStorage.setItem('tasks', JSON.stringify(tasksList));
        setTasks(tasksList);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="container mx-auto p-6">
                {/* Input Section */}
                <div className="flex items-center justify-center mb-4">
                    <input
                        id="todo"
                        type="text"
                        value={todo}
                        onChange={handleChange}
                        className="w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
                        placeholder="Enter a new task"
                    />
                    <button
                        onClick={handleSubmit}
                        className="button"
                    >
                        Submit
                    </button> 
                </div>

                {/* Tasks Section */}
                <div className="mt-8 mb-6 text-center">
                    <strong className="text-2xl text-black font-semibold">Tasks</strong>
                </div>
                <div className="space-y-4 flex flex-wrap gap-4 justify-center">
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <div
                                key={index}
                                className="w-60 bg-white text-black rounded-lg shadow-lg p-4 transition-all duration-300 overflow-hidden"
                            >
                                <div className="full">
                                    {/* Task Content */}
                                    <div className="mb-2">
                                        <p className="task">
                                            {task}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-between items-center mt-4" id='card'>
                                        <span
                                            onClick={() => handleDelete(index)}
                                            className="text-red-500 cursor-pointer hover:text-red-700"
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-black text-center">No tasks yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
} 