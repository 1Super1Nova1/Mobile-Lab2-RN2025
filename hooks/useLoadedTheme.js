import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import Colors from "../constants/Colors";

export function useLoadedTheme() {
  const [theme, setTheme] = useState(Colors.light);

  useEffect(() => {
    AsyncStorage.getItem("theme").then((savedTheme) => {
      if (savedTheme === "dark") setTheme(Colors.dark);
    });
  }, []);

  return [theme, setTheme];
}
