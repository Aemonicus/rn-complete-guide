import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }


  return (
    <View style={styles.screen} >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="ADD ONE" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal =>
          <View style={styles.listItem} key={goal}>
            <Text >{goal}</Text>
          </View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%"
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: "black",
    borderWidth: 1
  }
})


