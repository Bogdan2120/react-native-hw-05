import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const PostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
    <View style={styles.screenHome}>
      <View style={styles.user}>
        <Image
          style={styles.userImg}
          source={require("../assets/images/User_img.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.post}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Image style={styles.postImg} source={{ uri: item.photo }} />
              <Text style={styles.postCaption}>{item.name}</Text>
              <View style={styles.postDetalis}>
                <View style={styles.postComments}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Coments")}
                  >
                    <Image
                      style={styles.postCommentsImg}
                      source={require("../assets/images/MessageCircle.png")}
                    />
                    <Text style={styles.postCommentsText}>0</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.postLocation}>
                  <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                    <Image
                      style={styles.postLocationImg}
                      source={require("../assets/images/MapPin.png")}
                    />
                    <Text style={styles.postLocationText}>{item.location}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  screenHome: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  user: {
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 32,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontSize: 13,
  },
  userEmail: {
    color: "hsla(0, 0%, 13%, 0.8)",
  },
  post: {
    // alignItems: "center",
  },
  postImg: {
    width: "100%",
    marginBottom: 8,
  },
  postCaption: {
    paddingBottom: 11,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
  },
  postDetalis: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postComments: {
    flexDirection: "row",
  },
  postCommentsImg: {
    marginRight: 8,
  },
  postCommentsText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  postLocation: {
    flexDirection: "row",
  },
  postLocationImg: {
    marginRight: 8,
  },
  postLocationText: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
