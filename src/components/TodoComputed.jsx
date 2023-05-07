const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white p-4">
            <span className="text-gray-400">
                {computedItemsLeft} items pendientes
            </span>
            <button onClick={clearComplete} className="text-gray-400">
                Limpiar completadas
            </button>
        </section>
    );
};

export default TodoComputed;
