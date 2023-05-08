import React from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.profile}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/images/PhotoBG.jpg")}
      >
        <View style={styles.profileBody}>
          <View style={styles.profileInfo}>
            <View style={styles.profileImgBody}>
              <Image
                style={styles.profileImg}
                source={require("../assets/images/User_profile.png")}
              />
              <View style={styles.imgButtonBody}>
                <Image
                  style={styles.imgButton}
                  source={require("../assets/images/Union.png")}
                />
              </View>
            </View>

            <Text style={styles.profileName}>Natali Romanova</Text>
          </View>

          <View style={styles.post}>
            <Image
              style={styles.postImg}
              source={require("../assets/images/Forest.png")}
            />
            <Text style={styles.postCaption}>Forest</Text>
            <View style={styles.postDetalis}>
              <View style={styles.postComments}>
                <Image
                  style={styles.postCommentsImg}
                  source={require("../assets/images/MessageCircle.png")}
                />
                <Text style={styles.postCommentsText}>0</Text>
              </View>
              <View style={styles.postLocation}>
                <Image
                  style={styles.postLocationImg}
                  source={require("../assets/images/MapPin.png")}
                />
                <Text style={styles.postLocationText}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  bgImage: {
    paddingTop: 119,
  },
  profileBody: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  profileInfo: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: -60,
    marginBottom: 32,
  },
  profileImgBody: {},
  profileImg: {
    width: 120,
    height: 120,
    position: "relative",
    borderRadius: 16,
    borderColor: "#E8E8E8",
    marginBottom: 32,
  },
  imgButtonBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    position: "absolute",
    top: 70,
    right: -12,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },
  profileName: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
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
