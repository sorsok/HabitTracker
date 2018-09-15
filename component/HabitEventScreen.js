import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "react-navigation";
import styles from "./Styles";

class NewHabitScreen extends React.Component {
  static navigationOptions = {
    title: "Add New Habit",
    headerStyle: {
      backgroundColor: "#DBFEB8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const itemId = this.props.navigation.getParam("itemId", "NO-ID");
    const otherParam = this.props.navigation.getParam(
      "otherParam",
      "some default value"
    );
    return (
      <View style={styles.screen}>
        <Text>New Habit Screen</Text>
        <Text>{itemId + ": " + otherParam}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="yellowgreen" />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("NewHabit", {
              itemId: 86,
              otherParam: "anything you want here"
            })
          }
        >
          <Text style={{ fontSize: 20 }}> + </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.container}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          returnKeyType="done"
        />
        <Text style={styles.container}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert("hi user");
          }}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    NewHabit: NewHabitScreen
  },
  {
    headerMode: "none",
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
