import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos/Todos';

function App() {
    return (
        <div className="app" >
            <Header />
            <Form />
            <Todos  />
        </div>
    );
}

export default App;
