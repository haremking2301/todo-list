import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons"

const TaskComponent = function(props) {
    return (
        <div className= {props.class}>
            <p className="todolist-task__name">{props.task}</p>
            <div className="todolist-task__group">
                <button className="todolist-task__group__done">
                    <CheckCircleTwoTone />
                </button>
                <button className="todolist-task__group__del">
                    <DeleteTwoTone />
                </button>
            </div>
        </div>
    )
}

export default TaskComponent