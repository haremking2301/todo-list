import "./App.scss";
import "antd/dist/reset.css";
import { Input } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import TaskComponent from "./components/TaskComponent/task";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:6969/data",
      responseType: "stream",
    })
      .then(function (response) {
        return JSON.parse(response.data);
      })
      .then(function (response) {
        setJobs(response);
      });
  }, []);

  const [page, setPage] = useState(jobs.slice(0, 5));

  const handle = (data = 1) => {
    setPage(jobs.slice(0 + (data - 1) * 5, 5 + (data - 1) * 5));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      content: job,
      isDone: false,
    };
    axios
      .post("http://localhost:6969/data", { user })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    setJob("");
  };

  useEffect(() => {
    handle();
  }, [jobs]);

  return (
    <div className="App">
      <div className="todolist-container">
        <div className="todolist-wrapper">
          <div className="todolist-header">
            <h3 className="todolist-header__title">Todo List Application</h3>
            <form className="todolist-header__form" onSubmit={handleSubmit}>
              <Input
                value={job}
                onChange={function (e) {
                  return setJob(e.target.value);
                }}
                size="large"
                placeholder="Add new task in here"
              />
              <button>
                <PlusCircleTwoTone type="submit" />
              </button>
            </form>
          </div>

          <div className="todolist-main">
            {page.map((job, index) => (
              <TaskComponent
                key={index}
                task={job.content}
                isDone={job.isDone}
                id={index}
                class="todolist-task"
                data={jobs}
                dataFunction={setJobs}
              />
            ))}
          </div>
          <div className="todolist-pagination">
            <Pagination
              total={jobs.length}
              defaultPageSize={5}
              onChange={handle}
              defaultCurrent={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
