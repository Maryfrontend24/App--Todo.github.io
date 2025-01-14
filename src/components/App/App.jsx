import AppHeader from "../AppHeader/AppHeader.jsx";
import NewTaskForm from "../NewTaskForm/NewTaskForm.jsx";
import TasksList from "../TasksList/TasksList.jsx";
import Footer from "../Footer/Footer.jsx";
import React, {useState} from "react";





const App = ()=>{
         const [tasks, setTasks] = useState([{id:1, text:'Learning React Hooks', completed: false},
         {id:2, text:'Watch programming videos',completed: false}
         ]);
         const [filter, setFilter] = useState('all')




    function removeTask(id){
       let filteredTasks=tasks.filter(task => task.id !== id);
       setTasks(filteredTasks);
}


    function addTask(text){
        const newTask={id:Date.now(), text:text, completed:false};
        const newTasks =[newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeFilter(filter){
        setFilter(filter);
    }


let tasksTodoList = tasks;
      if(filter === "completed"){
          tasksTodoList=tasks.filter(task=>task.completed===true);
      }

  if(filter === "active"){
      tasksTodoList=tasks.filter(task=>task.completed === false)
  }


  function onToggleCompleted(id){
      setTasks(prevTasks =>
          prevTasks.map(task =>
              task.id === id ? { ...task, completed: !task.completed } : task
          )
      );

  }
  const getActiveTaskCount = () => tasks.filter(task => !task.completed).length;



  function  clearCompleted(){
      let filteredTasks=tasks.filter(task=>!task.completed);
      setTasks(filteredTasks);
  }


    const editTask = (id, newText) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, text: newText } : task
            )
        );
    };


    return (
        <section className="todoapp">
            <AppHeader />
            <NewTaskForm addTask={addTask} />
            <TasksList
                tasks={tasksTodoList}
                onToggleCompleted={onToggleCompleted}
                editTask={editTask}
                removeTask={removeTask}
            />
            <Footer
                getActiveTaskCount={getActiveTaskCount()}
                changeFilter={changeFilter}
                clearCompleted={clearCompleted}
            />
        </section>
    )

}

export default App;




