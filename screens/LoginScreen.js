import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Button,
} from "react-native";

import { useRoute } from "../router";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const submitForm = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    useRoute(state);
    setState(initialState);
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.containerLogin}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View style={styles.bodyLogin}>
            <Text style={styles.titleText}>Login</Text>
            <View style={styles.formLogin}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.inputMail}
                  name="email"
                  value={state.email}
                  placeholder="Email"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Password"
                  secureTextEntry={true}
                  name="password"
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </KeyboardAvoidingView>
              <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Sing in</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  ...styles.loginIn,
                  marginBottom: isShowKeyboard ? 32 : 66,
                }}
              >
                Don't have an account?{" "}
                <Text style={{ paddingLeft: 5 }}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  bodyLogin: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    marginBottom: 33,
    marginTop: 99,
  },
  formLogin: {
    marginBottom: 16,
  },
  inputMail: {
    width: 343,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputPassword: {
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 43,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: 343,
    height: 50,
    padding: 16,
    color: "#212121",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  loginIn: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});
