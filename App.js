import React from "react";
import HomeScreen from "./component/HomeScreen";
import NewHabitScreen from "./component/NewHabitScreen";
import { createStackNavigator } from "react-navigation";
import { StyleSheet } from "react-native";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    NewHabit: NewHabitScreen
  },
  {
    //headerMode: "none",
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBFEB8",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  }
});
