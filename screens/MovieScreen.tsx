import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const movies = [
  "Fight Club",
  "American Psycho",
  "Conjouring 4",
  "Uncharted",
  "Resident Evil",
];

export default function MovieScreen() {
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState("");

  const handleSelect = () => {
    if (!choice.trim()) {
      setResult("Enter a number between 1 and 5.");
      return;
    }

    const numChoice = parseInt(choice, 10);

    if (isNaN(numChoice) || numChoice < 1 || numChoice > 5) {
      setResult("That’s not a valid option. Choose a number between 1 and 5.");
    } else {
      setResult(`You selected: ${movies[numChoice - 1]}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a movie (1–5):</Text>
      <TextInput
        style={styles.input}
        value={choice}
        onChangeText={setChoice}
        placeholder="Enter a number"
        keyboardType="numeric"
      />
      <Button title="Select Movie" onPress={handleSelect} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#9f1515ff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#d42d2dff", },
  result: { marginTop: 15, fontSize: 16, color: "green" },
});
