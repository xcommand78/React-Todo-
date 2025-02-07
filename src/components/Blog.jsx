import React from 'react';

export default function Blog() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Building a Simple Todo App with React</h1>
            <p className="text-gray-700 mb-4">
                In this blog post, we will explore how to create a simple Todo application using React. 
                This project is perfect for beginners who want to learn about state management, component structure, and user interaction in React.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">What is a Todo App?</h2>
            <p className="text-gray-700 mb-4">
                A Todo app is a task management tool that allows users to keep track of their tasks. 
                Users can add new tasks, mark them as complete, and delete them when they are no longer needed. 
                It's a great way to stay organized and focused on what needs to be done.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Add new tasks</li>
                <li>Delete tasks</li>
                <li>Mark tasks as complete</li>
                <li>Persistent storage using local storage</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Getting Started</h2>
            <p className="text-gray-700 mb-4">
                To get started, you will need to have Node.js and npm installed on your machine. 
                Create a new React app using Create React App by running the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                npx create-react-app todo-app
            </pre>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Building the App</h2>
            <p className="text-gray-700 mb-4">
                Once your app is set up, you can start building the components. 
                The main components you will need are:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Input Component: For adding new tasks</li>
                <li>Task List Component: To display the list of tasks</li>
                <li>Task Item Component: For individual task actions</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
            <p className="text-gray-700 mb-4">
                Building a Todo app is a great way to practice your React skills. 
                It covers essential concepts like state management and component structure. 
                Feel free to expand on this project by adding more features like editing tasks or setting due dates.
            </p>
            <p className="text-gray-700 mb-4">
                Happy coding!
            </p>
        </div>
    );
}