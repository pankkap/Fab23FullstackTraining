import React, { useState } from "react";

export default function TodoApp() {
  const [username, setusername] = useState("Krishna");
  const [todoitems, settodoitems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Buy Movie Ticket", done: true },
    { action: "Meeting@10Am", done: false },
    { action: "Call Mom", done: false },
  ]);

  const [newItem, setnewItem] = useState();
  const [showComplete, setshowComplete] = useState(false);

  function createNewTodo() {
    // console.log(newItem)
    if (newItem) {
      settodoitems([...todoitems, { action: newItem, done: false }]);
      console.log(todoitems.length);
      setnewItem("");
    }
  }

  function toggleTodo(todo) {
    settodoitems(
      todoitems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    );
  }
  function todoTableRow(doneValue) {
    return todoitems
      .filter((item) => item.done == doneValue)
      .map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.action}</td>
          <td>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodo(item)}
            />
          </td>
        </tr>
      ));
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="bg-primary text-white text-center">
            {username}'s Todo List ({todoitems.filter((t) => !t.done).length}{" "}
            todos Pending)
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setnewItem(e.target.value)}
            value={newItem}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={createNewTodo}>
            Add
          </button>
        </div>
      </div>

      {/* Todo Table */}
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRow(false)}</tbody>
          </table>
        </div>
      </div>

      {/* Checkbox to show and hide the table */}

      <div className="row">
        <div className="col-md-6">
          <input
            type="checkbox"
            checked={showComplete}
            onChange={(e) => setshowComplete(e.target.checked)}
          />
          <span className="text-primary mx-2">Show completed</span>
        </div>
      </div>

      {/* Table with Done value true */}
      {showComplete ? (
        // conditional Rendering
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Done</th>
                </tr>
              </thead>
              <tbody>{todoTableRow(true)}</tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}
