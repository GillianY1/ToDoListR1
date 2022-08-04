import addIcon from "../assets/icons/plus.svg";

function AddTask(){
    return(
        <div>
            <input type="text" placeholder={"Add new task here .."}/>
            <button >
                <img className='act-btn' src={addIcon} alt="" />
            </button>
        </div>
    );
}

export default AddTask;