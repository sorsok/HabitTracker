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
import styles from "./Styles";


export default class HomeScreen extends React.Component {
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
      <SafeAreaView style={styles.screen}>
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