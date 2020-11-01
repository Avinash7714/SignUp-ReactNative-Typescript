import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { emailValidator, passwordValidator } from "../utils/validator";
import Logo from "../components/logo";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onSignUpPressed = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError) {
      return Alert.alert(emailError || passwordError);
    }

    Alert.alert("Successfully Signed Up");
  };
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Create Account</Text>

      <TextInput
        style={styles.inputBox}
        onChangeText={(email) => setEmail(email)}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#29b673"
        selectionColor="lightgrey"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        onChangeText={(password) => setPassword(password)}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#29b673"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={_onSignUpPressed}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#29b673",
    fontSize: 30,
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#002f6c",
    marginVertical: 10,
  },
  button: {
    width: 150,
    backgroundColor: "#29b673",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
