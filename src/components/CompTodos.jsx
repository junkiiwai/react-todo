import React from "react";

export const CompTodos = (props) => {
  const { compTodos, onClickBack } = props;
  return (
    <div className="complete">
      <p className="title">完了したToDo</p>
      <ul id="complete-list">
        {compTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="todo">{todo}</p>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
