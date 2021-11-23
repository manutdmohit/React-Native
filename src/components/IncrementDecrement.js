import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const IncrementDecrement = ({ method, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{method}</Text>

      <Button onPress={() => onIncrease()} title="Increment" />
      <Button onPress={() => onDecrease()} title="Decrement" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IncrementDecrement;
