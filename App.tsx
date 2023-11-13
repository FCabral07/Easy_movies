import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/login/Login";
import JoinNow from "./src/screens/joinNow/joinNow";
import CreateAccount from "./src/screens/register/CreateAccount";
import Home from "./src/screens/home/Home";
import Search from './src/screens/search/Search';
import PopularMovies from "./src/screens/popularMovies/PopularMovies";
import Profile from "./src/screens/profile/Profile";
import   Edit   from "./src/screens/Edit"
import { LogBox } from "react-native";

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

// Código main do app
const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JoinNow">
        <Stack.Screen
          name="JoinNow"
          component={JoinNow}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
        <Stack.Screen name="PopularMovies" component={PopularMovies} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
