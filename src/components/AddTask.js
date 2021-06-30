import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }

    onAdd({ title, desc, reminder });

    setTitle("");
    setDesc("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="title"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Desc</label>
        <input
          type="title"
          placeholder="Add Desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        value="Add Task"
        className="btn btn-block"
        style={{ marginTop: "10px" }}
      />
    </form>
  );
};

export default AddTask;
