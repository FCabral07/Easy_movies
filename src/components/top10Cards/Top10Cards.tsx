import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from './Styles';

const Top10Views = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({ item }) => (
    <View style={Styles.carouselItem}>
      <Text style={Styles.text}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={Styles.image} />
    </View>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={Styles.paginationContainer}
        dotStyle={Styles.paginationDot}
        inactiveDotStyle={Styles.paginationInactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

export default Top10Views;