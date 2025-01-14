import TasksFilter from "../TasksFilter/TasksFilter.jsx";
import PropTypes from "prop-types";



const Footer = ({ getActiveTaskCount, changeFilter, clearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{getActiveTaskCount} items left</span>
             <TasksFilter changeFilter={changeFilter}  clearCompleted={clearCompleted} />
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;




