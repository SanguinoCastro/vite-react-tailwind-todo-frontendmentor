import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
                    <span className=" inline-block h-5 w-5 rounded-full border-2"></span>

                    <input
                        type="text"
                        placeholder="Crea una nueva tarea..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between p-4">
                        <span className="text-gray-400">
                            5 items pendientes
                        </span>
                        <button className="text-gray-400">
                            Limpiar completadas
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                    <button className="text-blue-600">Todos</button>
                    <button className="hover:text-blue-600">Activas</button>
                    <button className="hover:text-blue-600">Completadas</button>
                </div>
            </section>

            <p className="mt-8 text-center">
                Drag and Drop para reorganizar la lista
            </p>
        </div>
    );
};

export default App;
