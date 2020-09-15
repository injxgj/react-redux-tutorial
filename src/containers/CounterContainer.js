import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// 클래스형 컴포넌트 (connect)
// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 함수형 컴포넌트 (useSelector, useDispatch)
const CounterContainer = () => {
  const number = useSelector(({ counter }) => counter.number);
  const dispatch = useDispatch();
  return <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />;
};
export default CounterContainer;
