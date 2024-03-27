import { Image, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles, colors } from "../../config/theme/AppTheme";
import { Title } from "../atoms/Title";
import { CustomIcon } from '../molecules/CustomIcon';
import { useNavigation } from "@react-navigation/native";

interface Props {
  icon?: boolean
}
export const CustomHeader = ({icon=false, }:Props) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const platform = Platform.OS;
    const height = platform === 'ios' ? insets.top + 50 : insets.top + 60
    const paddingTop = platform === 'ios' ? 0 : 10
  
    
    return (
      <View style={[globalStyles.customHeader, {height: height, alignItems: 'center', }]}>
        <View style={{marginTop: insets.top, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: paddingTop}}>
        {icon && <CustomIcon name={'chevron-back-outline'} size={30} color={'white'} isPressable={true} onpress={() => navigation.goBack()}/> }
          
          <Image source={require('../../assets/CCU.png')} style={{width: 110, height: 40}} />
  
        </View>
      </View>
    )
  }