import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props; //分割代入
  return (
    <div className="input">
      <input
        disabled={disabled}
        id="addText"
        placeholder="ToDoを入力"
        value={todoText} //分割代入された名称を使う
        onChange={onChange}
      />
      {/* 常に初期値の空文字が設定されることになるためテキスト入力ができない */}

      <button disabled={disabled} id="addButton" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
