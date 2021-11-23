import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import IncrementDecrement from '../components/IncrementDecrement';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state.num + action.payload > 100
        ? state
        : { ...state, num: state.num + action.payload };
    case 'decrement':
      return state.num - action.payload < 0
        ? state
        : { ...state, num: state.num - action.payload };
    default:
      return state;
  }
};

const IncDecScreen = () => {
  const [state, dispatch] = useReducer(reducer, { num: 0 });
  return (
    <View>
      <IncrementDecrement
        method="Increment Decrement"
        onIncrease={() => dispatch({ type: 'increment', payload: 15 })}
        onDecrease={() => dispatch({ type: 'decrement', payload: 15 })}
      />
      <Text>{state.num}</Text>
    </View>
  );
};

export default IncDecScreen;
