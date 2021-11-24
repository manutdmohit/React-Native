import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>

      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />

      <Button title="Go to List" onPress={() => navigation.navigate('List')} />

      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title=" Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Go to Square"
        onPress={() => navigation.navigate('Square')}
      />

      <Button
        title="Go to IncDec"
        onPress={() => navigation.navigate('IncDec')}
      />

      <Button 
      title="Go to Text" 
      onPress={() => navigation.navigate('Text')}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
