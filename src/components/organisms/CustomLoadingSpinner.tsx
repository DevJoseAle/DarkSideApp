import { ActivityIndicator, Text, View } from 'react-native';
import { colors, globalStyles } from '../../config/theme/AppTheme';
export const CustomLoadingSpinner = () => {
    return (
      <View style={ [globalStyles.mainContainer, {justifyContent: 'center', alignItems: 'center'}]}>
        <ActivityIndicator size="large" color={'white'}/>
        <Text style={globalStyles.subTitle}>Cargando...</Text>
      </View>
    )
  }