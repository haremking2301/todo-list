import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons"
const TaskComponent = function(props) {

    return (
        <div className= {props.class}>
            <p className={'todolist-task__name '+ (props.isDone ? 'todolist-task__name__done' : '' )}>{props.task}</p>
            <div className="todolist-task__group">
                <button className="todolist-task__group__done">
                    <CheckCircleTwoTone onClick={() => {props.check(props.id)}}/>
                </button>
                <button className="todolist-task__group__del">
                    <DeleteTwoTone onClick={() => {props.delete(props.id)}}/>
                </button>
            </div>
        </div>
    )
}

export default TaskComponent