import { useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialStateTodos = [
    {
        id: 1,
        title: 'Completar el curso de JavaScript Online',
        completed: true,
    },
    { id: 2, title: 'Ir al gimnasio', completed: false },
    { id: 3, title: '10 minutos de meditación', completed: false },
    { id: 4, title: 'No decir groserias', completed: false },
    {
        id: 5,
        title: 'Completar la app ToDo de Frontend Mentor',
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed />

                <TodoFilter />
            </main>

            <footer className="mt-8 text-center">
                Drag and Drop para reorganizar la lista
            </footer>
        </div>
    );
};

export default App;
