import logo from './logo.svg';
import './App.css';
import ContactsListComponent from './components/container/contacts_list';
/* import Greeting from './components/pure/greeting'; */
/* import Fgreeting from './components/pure/fgreeting'; */
/* import TaskListComponent from './components/container/task_list'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Carlos" /> */}
        {/* <Fgreeting name="Felipe"/> */}
        {/* COMPONENTE DE LISTADO DE TAREAS */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactsListComponent></ContactsListComponent>
      </header>
    </div>
  );
}

export default App;
