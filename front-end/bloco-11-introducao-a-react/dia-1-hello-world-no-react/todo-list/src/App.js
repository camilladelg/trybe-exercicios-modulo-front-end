const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar banho', 'Arrumar a casa', 'Fazer comida', 'Almoçar', 'Estudar'];

function App() {
  return (<ul>{tarefas.map((elemento) => Task(elemento))}</ul>);
}

export default App;
