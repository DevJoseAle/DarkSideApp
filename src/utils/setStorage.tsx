import AsyncStorage from '@react-native-async-storage/async-storage';


export const setStorage = async (value: any, key: string) => {
    try {
        const valueJSON = JSON.stringify(value);
        await AsyncStorage.setItem(key, valueJSON, ()=>{console.log('Guardado con exito')});
    } catch (e) {
      // saving error
      console.log(e, 'Error al guardar data')
    }
  };