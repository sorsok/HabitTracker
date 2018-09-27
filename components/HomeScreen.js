import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styles from "./Styles";
import NewHabitScreen from "./NewHabitScreen";
import HabitButton from "./HabitButton";


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      habits: ["Caffeine", "Nicotine", "Sugar"]
    })
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
  renderHabitButton(i) {
    return (
      <HabitButton
        key={i}
        name={this.state.habits[i]}
        onClick={() => this.state.onClick(i)}
      />
    );
  }
  render() {
    let habitCount = 0;
    const habits_component = [];

    for (let i = 0; i < Math.pow(this.props.habits.length, 0.5); i++) {
      let row = [];
      for (let j = 0; j < Math.pow(this.props.habits.length, 0.5); j++) {
        row.push(this.renderHabitButton(habitCount));
        squareCount++;
      }
      habits_component.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <div>{habits_component}</div>;

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("NewHabit", {
              itemId: 86,
              otherParam: "anything you want"
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