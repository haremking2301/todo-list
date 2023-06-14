import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons"

const TaskComponent = function(props) {
    const check = function() {
        const datalist2 = props.data;
        const newdata2 = datalist2.map(function(item) {
            return {
                content: item.content,
                isDone: item.isDone ? true : false || item.content === props.task ? true : false,
            };
        })
        props.dataFunction(newdata2)
        localStorage.setItem("todo", JSON.stringify(newdata2));
    }

    const dele = function() {
        const datalist = props.data;
        const newdata = datalist.filter(function(item) {
            return item.content !== props.task
        })
        props.dataFunction(newdata)
        localStorage.setItem("todo", JSON.stringify(newdata));
    }

    return (
        <div className= {props.class}>
            <p className={'todolist-task__name '+ (props.isDone ? 'todolist-task__name__done' : '' )}>{props.task}</p>
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