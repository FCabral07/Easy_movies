import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieDetails = ({ route }) => {
  const { title, image } = route.params;

  return (
    <View>
      <Image source={{ uri: image }} style={{ width: 200, height: 300 }} />
      <Text>{title}</Text>
    </View>
  );
};

export default MovieDetails;
