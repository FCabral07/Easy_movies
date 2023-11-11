import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const ComponentBar = () => {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = React.useState("Home");
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
    setForceUpdate((prev) => !prev);
    navigation.navigate(iconName as never);
  };

  return (
    <View style={Styles.fixedContainer}>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("Home")}>
          <Icon
            name="home"
            size={28}
            color={activeIcon === "Home" ? "#FFFF00" : "#FFF0F5"}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("Search")}>
          <Icon
            name="search"
            size={28}
            color={activeIcon === "Search" ? "#FFFF00" : "#FFF0F5"}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("Favorite")}>
          <View style={Styles.heartIcon}>
            <Icon
              name="heart"
              size={28}
              color={activeIcon === "Favorite" ? "#FFFF00" : "#FFF0F5"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("Popular")}>
          <Icon5
            name="fire-alt"
            size={28}
            color={activeIcon === "Popular" ? "#FFFF00" : "#FFF0F5"}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconPress("Profile")}>
          <Icon
            name="user"
            size={28}
            color={activeIcon === "Profile" ? "#FFFF00" : "#FFF0F5"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComponentBar;

