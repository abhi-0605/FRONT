import logo from './logo.svg';
import './App.css';
import Header from './my-component/Header';
import {Todoitem} from './my-component/Todoitem';
import {Todos} from './my-component/Todos';
import {Footer} from './my-component/Footer';


function App() {
  const ondelete =(todo)=>{
    console.log("i am ondelete of todo",todo)
    let index=todos.indexOf(todo);
    todos.splice(index,1);
  }
  let todos=[
    {
      sno:1,
      title: "Go to market",       
      desc: "you need to go to market"
    },
    {
      sno:2,
      title: "Go to mall",
      desc: "you need to go to market"
    },
    {
      sno:3,
      title: "Go to ghat",
      desc: "you need to go to market"
    },
  ]
  return (
    <>
      <Header title="MyTodoList" searchbar={false}/>
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer/>
    </>
  );
}


export default App;
