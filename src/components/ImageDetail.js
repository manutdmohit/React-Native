import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} style={{ height: 100, width: 100 }} />
      <Text> {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
