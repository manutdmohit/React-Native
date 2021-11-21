import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const CHANGE_COLOR_VALUE = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const setColor = (color, change) => {
    // color === "red", "green", "blue"
    // change === +15, -15

    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', CHANGE_COLOR_VALUE)}
        onDecrease={() => setColor('red', -1 * CHANGE_COLOR_VALUE)}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => setColor('green', CHANGE_COLOR_VALUE)}
        onDecrease={() => setColor('green', -1 * CHANGE_COLOR_VALUE)}
        color="Green"
      />

      <ColorCounter
        onIncrease={() => setColor('blue', CHANGE_COLOR_VALUE)}
        onDecrease={() => setBlue('blue', -1 * CHANGE_COLOR_VALUE)}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
