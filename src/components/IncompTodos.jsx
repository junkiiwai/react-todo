import React from "react";

export const IncompTodos = (props) => {
  const { todos, onClickComp, onClickDele } = props; //分割代入
  return (
    <div className="incomplete">
      <p className="title">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {/* 返却する親タグにkeyを付す必要あり */}
              <div className="list-row">
                <p classNames="todo">{todo}</p>
                <button
                  onClick={() => {
                    onClickComp(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDele(index);
                  }}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
