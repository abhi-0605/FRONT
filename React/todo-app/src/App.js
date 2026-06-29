import logo from './logo.svg';
import './App.css';
import Header from './my-component/Header';
import { Todoitem } from './my-component/Todoitem';
import { Todos } from './my-component/Todos';
import { Footer } from './my-component/Footer';
import { Addtodo } from './my-component/Addtodo';
import React, { useState, useEffect } from 'react';
import { About } from './my-component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("i am ondelete of todo", todo)

    // deleting this way in react doesnt work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addtodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo])
    console.log(mytodo);





  }

  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])


  return (
    <>
      <Router>
        <Header title="MyTodoList" searchbar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todos={todos} ondelete={ondelete} />
              </>
            }
          >
          </Route>

          <Route
            path="/about"
            element={<About />}
          >
          </Route>
        </Routes>


        <Footer />
      </Router>
    </>
  );
}


export default App;
