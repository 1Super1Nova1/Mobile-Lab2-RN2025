import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { useLoadedTheme } from "./hooks/useLoadedTheme";
import Navigation from "./navigation";

import { ThemeProvider } from "styled-components";
import React from 'react';


export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const [theme] = useLoadedTheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
