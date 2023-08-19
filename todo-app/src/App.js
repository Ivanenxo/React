import { useEffect, useState } from "react";
import { Title } from "./components/Title/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

function App() {


  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Ver la proxima pelicula de Marvel',
      complete: false,
    },
    {
      id: 2,
      title: 'Estudiar nueva tecnologia',
      complete: false,
    },
    {
      id: 3,
      title: 'Leer la nueva documentacion de spring boot security',
      complete: false,
    },
    {
      id: 4,
      title: 'Salir a hacer deporte',
      complete: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredTodos, setFilterdTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      complete: false
    }

    const TodoList = [...todos]
    TodoList.push(newTodo);
    setTodos(TodoList);
  }

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(updateList);
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.complete)
    setTodos(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('All')
  }

  const showActiveTodos = () => {
    setActiveFilter('Activas')
  }

  const showCompletedTodos = () => {
    setActiveFilter("Completadas")
  }

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilterdTodos(todos)
    } else if (activeFilter === 'Activas') {
      const activeTodos = todos.filter(todo => todo.complete === false)
      setFilterdTodos(activeTodos)
    } else if (activeFilter === 'Completadas') {
      const completedTodos = todos.filter(todo => todo.complete === true)
      setFilterdTodos(completedTodos)
    }
  }, [activeFilter, todos])



  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className=" container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          activeFilter={activeFilter}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />

      </div>

    </div>
  );
}

export default App;