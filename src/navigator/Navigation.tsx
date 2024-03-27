import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../components/pages/HomePage';
import { CustomHeader } from '../components/organisms/CustomHeader';
import { MoviePage } from '../components/pages/MoviePage';
import { MovieCharts } from '../components/pages/MovieCharts';



export type RootStackParams = {
  Inicio: undefined;
  MovieCharts: { episode_id: string, previousScreen: string},
  Movie: { episode_id: string, previousScreen: string};

}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          header: () => <CustomHeader/>
        }}
        name="Inicio" 
        component={HomePage} 
        />

      <Stack.Screen 
        options={{
          header: () => <CustomHeader/>
        }}
        name="MovieCharts" 
        component={MovieCharts} 
      />
      <Stack.Screen 
        options={{
        headerShown: false
        }}
        name="Movie" 
        component={MoviePage } 
      />
     
    </Stack.Navigator>
  );
}




