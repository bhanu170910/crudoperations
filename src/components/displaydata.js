"use clent"
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "@/redux/slice";
import style from "../app/style/Home.module.scss";

function DisplayData({ setEditingTask }) {
  const userdata = useSelector((state) => state.todos.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className={style.displaydata}>
      {userdata.length > 0 ? (
        userdata.map((task) => (
          <div key={task.id} className={style.task}>
            <span>{task.name}</span>
            <div>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default DisplayData;
