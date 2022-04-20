import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompTodos } from "./components/IncompTodos";
import { CompTodos } from "./components/CompTodos";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);
  //可変となるパーツはuseState
  //useState([初期値])

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //onChangeで変更あった時にその値に変更
  const onClickAdd = () => {
    if (todoText === "") return; //空文字なら何も返さない
    const newTodos = [...incompTodos, todoText]; //未完Todoが列挙される配列にtodoTextを結合
    setIncompTodos(newTodos);
    setTodoText(""); //追加後にtodoTextの値をリセット（にする）
  };
  const onClickDele = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1); //何番目の要素から何個削除する
    setIncompTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1); //何番目の要素から何個削除する
    const newCompTodos = [...compTodos, incompTodos[index]];
    setIncompTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);
    setCompTodos(newCompTodos);
    const newIncompTodos = [...incompTodos, compTodos[index]];
    setIncompTodos(newIncompTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompTodos.length >= 5}
      />
      {incompTodos.length >= 5 && (
        <p style={{ color: "red" }}>Todoリストは５個まで入るよ</p>
      )}
      <IncompTodos
        todos={incompTodos}
        onClickComp={onClickComp}
        onClickDele={onClickDele}
      />

      <CompTodos compTodos={compTodos} onClickBack={onClickBack} />
    </>
  );
};
