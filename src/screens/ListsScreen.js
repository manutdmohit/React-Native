import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListsScreen = () => {
  const friends = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>{item.name}</Text>
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
