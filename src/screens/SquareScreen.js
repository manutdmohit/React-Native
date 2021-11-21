import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const CHANGE_COLOR_VALUE = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  if ((red || green || blue) > 255 || (red || green || blue) < 0) {
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + CHANGE_COLOR_VALUE)}
        onDecrease={() => setRed(red - CHANGE_COLOR_VALUE)}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => setGreen(green + CHANGE_COLOR_VALUE)}
        onDecrease={() => setGreen(green - CHANGE_COLOR_VALUE)}
        color="Green"
      />

      <ColorCounter
        onIncrease={() => setBlue(blue + CHANGE_COLOR_VALUE)}
        onDecrease={() => setBlue(blue - CHANGE_COLOR_VALUE)}
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
