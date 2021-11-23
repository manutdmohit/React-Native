import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import IncrementDecrement from '../components/IncrementDecrement';

const reducer = (state, action) => {
  switch (action.numToChange) {
    case 'num':
      return state.num + action.amount > 100 || state.num + action.amount < 0
        ? state
        : { ...state, num: state.num + action.amount };
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
        onIncrease={() => dispatch({ numToChange: 'num', amount: 15 })}
        onDecrease={() => dispatch({ numToChange: 'num', amount: -15 })}
      />
      <Text>{state.num}</Text>
    </View>
  );
};

export default IncDecScreen;
