import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from './Styles';

const Top10Views = ({ data, onPressMovie }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Criando o carousel de itens, a forma como ele é exibido
  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressMovie(item)}>
      <View style={Styles.carouselItem}>
        <Text style={Styles.text}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={Styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Retornando o carrosel, mostrando os dados a serem exibidos, o tamanho
      e o carrosel criado acima */}
      <Carousel
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {/* Criando a paginação, onde posso scrollar para o lado e ver os 
      outros components */}
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