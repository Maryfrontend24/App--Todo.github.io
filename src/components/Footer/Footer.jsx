import TasksFilter from "../TasksFilter/TasksFilter.jsx";
import PropTypes from "prop-types";


const Footer = ({ taskCountActive, setFilter, clearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{taskCountActive} items left</span>
             <TasksFilter setFilter={setFilter}/>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;



Footer.propTypes = {
    taskCountActive: PropTypes.number,
    filter: PropTypes.string,
    clearCompleted: PropTypes.func,
    setFilter: PropTypes.func,
}

