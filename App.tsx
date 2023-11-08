import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/login/Login";
import JoinNow from "./src/screens/joinNow/joinNow";
import CreateAccount from "./src/screens/register/CreateAccount";
import Home from "./src/screens/home/Home";
import Profile from "./src/screens/profile/Profile";
import  { Edit }  from "./src/screens/Edit"


// Código main do app
const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    < Edit />
    /*
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
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    */
  );
};

export default App;
