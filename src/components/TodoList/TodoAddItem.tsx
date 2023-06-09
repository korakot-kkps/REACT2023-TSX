import { ChangeEvent, useState } from "react";
import ITodoItem from "../../types/TodoItem";
import { isIfStatement } from "typescript";

const TodoAddItem: React.FC = () => {
  const [todoItem, setTodoItem] = useState<ITodoItem>({
    id: 0,
    name: "",
    isComplete: false,
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem((objTodoItem) => ({
      ...objTodoItem, //copy todoItem
      [e.target.id]: e.target.value,
    }));
  };

  const addTodoHander = (e: any) => {
    //todo:korakot - call api post data
    if (todoItem) {
      console.log(todoItem.name);
    }
  };

  return (
    <>
      <h4>Add New Todo Item</h4>
      <input
        type="text"
        id="name" //assign id for use handler value change by generic function
        value={todoItem.name}
        placeholder="enter todo here..."
        onChange={e => ()}
      ></input>
      <button onClick={addTodoHander}>Submit</button>
    </>
  );
};
export default TodoAddItem;
