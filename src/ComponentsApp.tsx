import 'react-native-gesture-handler';



import { NavigationContainer } from '@react-navigation/native';

import { BottomTabs } from './navigator/BottomTabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Toast from 'react-native-toast-message';


const ComponentsApp = () => {
  return( 
    <Provider store={store}>

      <NavigationContainer>
          <BottomTabs />
      </NavigationContainer>

      <Toast />
    </Provider>
  );
};
export default ComponentsApp;
