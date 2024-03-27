import { View } from "react-native"
import { Title } from "./Title"

export const NoFavorites = () => {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Title title={'  No tienes Pelis \nEn tus Favoritos🙁'} marginLeft={10}  size={25}/>
      </View>
    )
  }