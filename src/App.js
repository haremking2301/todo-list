import "./App.scss";
import "antd/dist/reset.css";
import { Input, Spin } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import TaskComponent from "./components/TaskComponent/task";
import { useEffect, useState } from "react";
import { TasksApi } from "./apis/taskApi";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({
    crp: 1,
    limit: 5,
    total: 0
  });

  const fetchAllTasks = async (param) => {
    setIsLoading(true);
    const dataz = await TasksApi.getAllTasks(param);
    console.log(dataz.data);
    setJobs(dataz.data);
    setPage({
      ...page,
      total: dataz.headers["x-total-count"]
    })
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllTasks({
      _page: page.crp,
      _limit: page.limit
    });
  }, [page.crp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      content: job,
      isDone: false,
      id: Math.random(),
      createAt: new Date().getTime(),
    };
    await TasksApi.createTask(user);
    fetchAllTasks({
      _page: page.crp,
      _limit: page.limit
    });
    setJob("");
  };

  const handle = function (number) {
    setPage({
      ...page,
      crp: number,
    })
  }

  const handleDelete = async function(id) {
    await TasksApi.deleteTask(id);
    fetchAllTasks({
      _page: page.crp,
      _limit: page.limit
    })
  }

  const handleCheck = async function(id) {
    const done = {isDone: true};
    await TasksApi.doneTask(id, done)
    fetchAllTasks({
      _page: page.crp,
      _limit: page.limit
    })
  }


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
            {isLoading ? <Spin /> : <div />}
            {jobs.map((job, index) => (
              <TaskComponent
                key={index}
                task={job.content}
                isDone={job.isDone}
                id={job.id}
                class="todolist-task"
                data={jobs}
                dataFunction={setJobs}
                check={handleCheck}
                delete={handleDelete}
              />
            ))}
          </div>
          <div className="todolist-pagination">
            <Pagination
              total={page.total}
              defaultPageSize={page.limit}
              pageSize={page.limit}
              onChange={handle}
              defaultCurrent={page.crp}
              current={page.crp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
