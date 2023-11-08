import { Card } from "@rneui/base";
import React from "react";
import { ScrollView, View } from "react-native";
import ComponentUpBar from "../componentUpBar/ComponentUpBar";
import Styles from "../popularCards/Styles";

const MovieCard = ({ image }) => {
  return (
    <View style={Styles.cardContainer}>
      <Card containerStyle={{ backgroundColor: "#060d17", borderWidth: 0 }}>
        <Card.Image
          source={{ uri: image }}
          style={Styles.cardImage}
          resizeMode="cover"
        />
      </Card>
    </View>
  );
};

const PopularCards = ({ movies }) => {
  return (
    <View>
      {/* <ComponentUpBar /> */}
      <ScrollView>
        <View>
          <ScrollView horizontal>
            {movies.map((movie, i) => (
              <MovieCard key={i} image={movie.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularCards;
