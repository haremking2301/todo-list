import "./App.scss";
import "antd/dist/reset.css";
import { Input } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import TaskComponent from "./components/TaskComponent/task";

function App() {
  return (
    <div className="App">
      <div className="todolist-container">
        <div className="todolist-wrapper">
          <div className="todolist-header">
            <h3 className="todolist-header__title">Todo List Application</h3>
            <form className="todolist-header__form">
              <Input size="large" placeholder="Add new task in here" />
              <button>
                <PlusCircleTwoTone />
              </button>
            </form>
          </div>

          <div className="todolist-main">
            <TaskComponent
              task="anh la vo dich"
              class="todolist-task"
            ></TaskComponent>
            <TaskComponent
              task="Task nay done"
              class="todolist-task todolist-task__name__done"
            ></TaskComponent>
          </div>

          <div className="todolist-pagination">
            <Pagination defaultCurrent={1} total={50} />;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
