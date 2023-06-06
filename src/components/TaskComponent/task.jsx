import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons"

const TaskComponent = function(props) {
    const check = function() {
        props.setClass('todolist-task todolist-task__name__done');
    }

    const dele = function() {
        const datalist = props.data;
        const newdata = datalist.filter(function(item) {
            return item !== props.task
        })
        props.dataFunction(newdata)
        localStorage.setItem("todo", JSON.stringify(newdata));
    }

    return (
        <div className= {props.class}>
            <p className="todolist-task__name">{props.task}</p>
            <div className="todolist-task__group">
                <button className="todolist-task__group__done">
                    <CheckCircleTwoTone onClick={check}/>
                </button>
                <button className="todolist-task__group__del">
                    <DeleteTwoTone onClick={dele}/>
                </button>
            </div>
        </div>
    )
}

export default TaskComponent