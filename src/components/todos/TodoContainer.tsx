import React, { SetStateAction, useState, Dispatch } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  items: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  todoItems: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoPosUpdate: (status: string, currentId: string | undefined, clickedId: string) => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  items,
  setItems,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
  handleTodoPosUpdate,
}) => {
  //인풋창visible
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  return (
    <Wrapper>
      <TodoHeader status={status} setIsVisibleForm={setIsVisibleForm} />
      {isVisibleForm && (
        <CreateForm
          status={status}
          setIsVisibleForm={setIsVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        status={status}
        items={items}
        setItems={setItems}
        todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoPosUpdate={handleTodoPosUpdate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
