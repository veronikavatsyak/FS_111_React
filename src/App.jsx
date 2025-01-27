import "./App.css";
import { Counter } from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList/TodoList";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <h1>State</h1>
      <Counter />
      <ColorPicker />
      <TodoList />
      <button onClick={openModal}>Open modal</button>
      {isOpen && <Modal closeModal={closeModal}>Привіт, Вероніка!</Modal>}
    </div>
  );
};
export default App;
