import { StyleSheet, Button, StatusBar } from "react-native";
import React from 'react';
import Colors from "../constants/Colors";
import { Text, View } from "../components/Themed";
import { ThemeProvider } from "styled-components";
import { Textt } from "../styles/BottomNavigationIcon";
import { useLoadedTheme } from "../hooks/useLoadedTheme";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabFiveScreen() {
  const [theme, setTheme] = useLoadedTheme();

  const toggleTheme = async () => {
    const newTheme = theme === Colors.light ? Colors.dark : Colors.light;
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme === Colors.dark ? "dark" : "light");
  };

  return (
    // <ThemeProvider theme={theme}>
    <View style={styles.container} >
      <StatusBar barStyle={theme === Colors.light ? "light-content" : "dark-content"} />
      <Text>
        {
          theme === Colors.light ? "light" : "dark"
        }
      </Text>
      <Textt>asdasdasd</Textt>
      <Button
        title="press"
        onPress={toggleTheme}>
      </Button>
    </View>
    // </ThemeProvider>
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
