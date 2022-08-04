import Filter from './Filter';
import TaskItem from './TaskItem';

function TaskList(){
    return(
        <div>
            <Filter></Filter>
            <div>
                <TaskItem />
                <TaskItem />
            </div>
        </div>
    );
}

export default TaskList