import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListsScreen = () => {
  const friends = [
    { name: 'A', age: 25 },
    { name: 'B', age: 30 },
    { name: 'C', age: 24 },
    { name: 'D', age: 35 },
    { name: 'E', age: 36 },
    { name: 'F', age: 37 },
    { name: 'G', age: 38 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.age}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

export default ListsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
  },
});
