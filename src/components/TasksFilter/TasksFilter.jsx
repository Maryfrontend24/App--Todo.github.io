import {Component} from "react";
import PropTypes from "prop-types";


export default class TasksFilter extends Component {

    buttonFilterChange = (filter) => {
        this.props.setFilter(filter);
    };

        render()
        {
            return (
                <ul className='filters'>
                    <li>
                        <button onClick={() => this.buttonFilterChange('all')}>All</button>
                    </li>
                    <li>
                        <button onClick={() => this.buttonFilterChange('active')}>Active</button>
                    </li>

                    <li>
                        <button onClick={() => this.buttonFilterChange('completed')}>Completed</button>
                    </li>

                </ul>
            );
        }
    }


TasksFilter.defaultProps = {
    filter: 'All',
};

TasksFilter.propTypes = {
    filter: PropTypes.string,
    buttonFilterChange: PropTypes.func,
    setFilter: PropTypes.func,
}


