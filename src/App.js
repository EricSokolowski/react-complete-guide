import Backdrop from "./components/Backdrop";
import Modal from "./components/Model";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='learn-todo'/>
      <Todo text='title uhh'/>
      <Todo text='test test test'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
