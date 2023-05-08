import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

import { useRoute } from "../router";

const initialState = {
  name: "",
  location: "",
};

const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    if (errorMsg) {
      console.log("errorMsg", errorMsg);
    } else if (location) {
      console.log("latitude", location.coords.latitude);
      console.log("longitude", location.coords.longitude);
    }
    console.log("photo", photo.uri);
    setPhoto(photo.uri);
  };

  const deletePhoto = () => {
    setPhoto("");
  };

  const submitForm = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(navigation);
    console.log("data foto", { photo, ...state });
    navigation.navigate("Post", { photo, ...state });
    setPhoto("");
    useRoute(state);
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.createPostScreen}>
        <View style={styles.imgPostBody}>
          <View style={styles.imgBody}>
            {photo && (
              <View style={styles.photo}>
                <Image source={{ uri: photo }} />
                <TouchableOpacity onPress={deletePhoto}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            {!photo && (
              <Camera style={styles.camera} ref={setCamera}>
                <TouchableOpacity onPress={takePhoto}>
                  <View style={styles.imgNewPostBody}>
                    <Image
                      style={styles.imgNewPost}
                      source={require("../assets/images/CreateImgPost.png")}
                    />
                  </View>
                </TouchableOpacity>
              </Camera>
            )}
          </View>
          <Text style={styles.imgPostText}>Upload a photo</Text>
        </View>

        <View style={styles.bodyFormCreatePost}>
          <View style={styles.formCreatePostn}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.inputNamePost}
                name="NamePost"
                value={state.name}
                placeholder="Name post..."
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
              />
              <TextInput
                style={styles.inputLocationPost}
                placeholder="Location"
                name="location"
                value={state.location}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={{
                ...styles.button,
                marginBottom: isShowKeyboard ? 32 : 66,
              }}
              onPress={submitForm}
            >
              <Text style={styles.buttonText}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  createPostScreen: {
    paddingTop: 32,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgPostBody: {
    marginBottom: 48,
  },
  imgBody: {
    position: "relative",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  camera: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  photo: {
    width: "100%",
    height: 240,
  },
  imgNewPostBody: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
  imgPostText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  inputNamePost: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputLocationPost: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  button: {
    width: "100%",
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
});
