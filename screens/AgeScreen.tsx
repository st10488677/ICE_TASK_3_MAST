import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Age">;

export default function AgeScreen({ navigation }: Props) {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckAge = () => {
    if (!age.trim()) {
      setMessage("Please enter your age");
      return;
    }

    const numAge = parseInt(age, 10);

    if (isNaN(numAge)) {
      setMessage("Invalid. Please enter a number.");
    } else if (numAge < 18) {
      setMessage("You are not old enough to proceed.");
    } else if (numAge >= 18 && numAge <= 20) {
      setMessage("You are above 18 but not allowed to proceed.");
    } else if (numAge >= 21) {
      navigation.navigate("Movie");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter age"
        keyboardType="numeric"
      />
      <Button title="Check Age" onPress={handleCheckAge} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#b01414ff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f91414ff", 
  },
  message: { marginTop: 15, fontSize: 16, color: "red" },
});
