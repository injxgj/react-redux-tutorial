import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import todos, { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

// 클래스형 컴포넌트 (connect)
// const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
//   return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />;
// };

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }), // stateToProps
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   } // dispatchToProps
// )(TodosContainer);

// 함수형 컴포넌트 (useSelector, useDispatch)
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />;
};
export default TodosContainer;
