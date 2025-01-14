import {Component} from "react";
import PropTypes from "prop-types";


const TasksFilter = (props)=>{

    const onChangeAllFilter = ()=>{
       props.changeFilter('all')
    }
    const onChangeActiveFilter = ()=>{
        props.changeFilter('active')
    }
    const onChangeCompletedFilter = ()=>{
        props.changeFilter('completed')
    }
    return (
                <ul className='filters'>
                    <li>
                        <button onClick={onChangeAllFilter}>All</button>
                    </li>
                    <li>
                        <button onClick={onChangeActiveFilter}>Active</button>
                    </li>

                    <li>
                        <button onClick={onChangeCompletedFilter}>Completed</button>
                    </li>

                </ul>
            );

    }

export default TasksFilter;



