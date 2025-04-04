import { StyleSheet } from "react-native";
import React from 'react';

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Textt } from "../styles/BottomNavigationIcon";
import { useLoadedTheme } from "../hooks/useLoadedTheme";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabOneScreen() {
  const [theme] = useLoadedTheme();

  return (
    <View style={styles.container}>
      <Text>
        {
          theme.background
        }
      </Text>
      <Text>AsyncStorage --
        {
          AsyncStorage.getItem("theme")
        }
      </Text>
      <Text>theme --
        {
          theme === Colors.light ? "light" : "dark"
        }
      </Text>
      <Textt>asdasdasd</Textt>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
