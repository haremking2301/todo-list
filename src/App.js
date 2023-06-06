import "./App.scss";
import "antd/dist/reset.css";
import { Input } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import TaskComponent from "./components/TaskComponent/task";
import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const handleSubmit = () => {
    setJobs((prev) => {
      const sw = [...prev, job];
      localStorage.setItem("todo", JSON.stringify(sw));
      return sw;
    });
  };
  return (
    <div className="App">
      <div className="todolist-container">
        <div className="todolist-wrapper">
          <div className="todolist-header">
            <h3 className="todolist-header__title">Todo List Application</h3>
            <form className="todolist-header__form">
              <Input
                value={job}
                onChange={function (e) {
                  return setJob(e.target.value);
                }}
                size="large"
                placeholder="Add new task in here"
              />
              <button>
                <PlusCircleTwoTone onClick={handleSubmit} />
              </button>
            </form>
          </div>

          <div className="todolist-main">
            {jobs.map((job, index) => (
              <TaskComponent key={index} task={job} />
            ))}
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
