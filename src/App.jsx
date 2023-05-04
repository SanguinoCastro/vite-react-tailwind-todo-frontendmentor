import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate />

                <TodoList />

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
