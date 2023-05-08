import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.mapScreen}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.4220936,
          longitude: -122.083922,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.4220936, longitude: -122.083922 }} />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapScreen: {
    flex: 1,
  },
});
