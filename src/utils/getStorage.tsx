import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (item: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(item);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };