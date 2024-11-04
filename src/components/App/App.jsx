import AppHeader from "../AppHeader/AppHeader.jsx";
import NewTaskForm from "../NewTaskForm/NewTaskForm.jsx";
import TasksList from "../TasksList/TasksList.jsx";
import Footer from "../Footer/Footer.jsx";
import {Component} from "react";

export default class App extends Component {



    state = {
        tasks:[],
        filter: 'all',
        completed: false,
        date: new Date(),
    };


    addItem = (task) => {
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, { id: Date.now(), text: task, completed: false, date: new Date() }],
        }));
    };





    deleteItem = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => task.id !== id),
        }));

    };

    editTask = (id, newText) => {
        this.setState((prevState) => {
            const tasks = prevState.tasks.map(task =>
                task.id === id ? { ...task, text: newText } : task
            );
            return {tasks: tasks};
        });
    };

    onToggleCompleted = (id) => {
        this.setState((prevState) => {
            const tasks = prevState.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            return { tasks };
        });
    };


    setFilter = (filter) => {
        this.setState({ filter });
    };

    filterTasks = () => {
        const { tasks, filter } = this.state;
        if (filter === 'active') {
            return tasks.filter(task => !task.completed);
        } else if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        }
        return tasks;
    };




    clearCompleted = () => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => !task.completed),
        }));
    };



     getActiveTaskCount = () => {
         const { tasks } = this.state;
        return tasks.filter(task => !task.completed).length;
    };


    render() {
        const filteredTasks = this.filterTasks();

        return (
            <section className="todoapp">
                <AppHeader />
                <NewTaskForm onItemAdd={this.addItem} />
                <TasksList tasks={ filteredTasks }
                           onDeleted={this.deleteItem}
                           onToggleCompleted={this.onToggleCompleted}
                           onEdit={this.editTask}
                />
                <Footer  taskCountActive = {this.getActiveTaskCount()}
                         setFilter={this.setFilter}
                         clearCompleted={this.clearCompleted}
                />
            </section>
        )
    }
}





