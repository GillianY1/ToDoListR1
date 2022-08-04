// import checkIcon from "../assets/icons/check.png"

function TaskItem(props){
    return (
    <div>
        <input type="checkbox" />
        <input name="taskName" value="TaksName" />
        <button>Delete</button>
    </div>
    );
}

export default TaskItem;