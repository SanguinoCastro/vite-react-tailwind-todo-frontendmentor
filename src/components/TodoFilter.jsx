const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 ">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={`duration-400 transition-all ${
                        filter === 'all'
                            ? 'text-blue-500 hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('all')}
                >
                    Todos
                </button>
                <button
                    className={`duration-400 transition-all ${
                        filter === 'active'
                            ? 'text-blue-500  hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('active')}
                >
                    Activas
                </button>
                <button
                    className={`duration-400 transition-all ${
                        filter === 'completed'
                            ? 'text-blue-500  hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('completed')}
                >
                    Completadas
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
