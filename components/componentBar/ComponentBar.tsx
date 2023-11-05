import React from "react";
import { View } from "react-native";
import Styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

const ComponentBar = () => {
  return (
    <View style={Styles.fixedContainer}>
      <View style={Styles.iconContainer}>
        <Icon name="home" size={32} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        <Icon name="search" size={32} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        <View style={Styles.heartIcon}>
          <Icon name="heart" size={32} color="#FFF0F5" />
        </View>
      </View>
      <View style={Styles.iconContainer}>
        <Icon5 name="fire-alt" size={32} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        <Icon name="user" size={32} color="#FFF0F5" />
      </View>
    </View>
  );
};

export default ComponentBar;
