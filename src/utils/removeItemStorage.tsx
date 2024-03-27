import AsyncStorage from "@react-native-async-storage/async-storage"

export const removeStorage = async () => {
    try {
      await AsyncStorage.clear( )
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }