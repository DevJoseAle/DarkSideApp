// import React, { useEffect, useState } from 'react'
// import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
// import { Icon } from 'react-native-vector-icons/Icon'
// import { CustomIcon } from './CustomIcon'
// import { colors } from '../../config/theme/AppTheme'
// import { getMovieByTitle } from '../../api/getMoviesByTitle'
// import { Movie } from '../../interfaces/responseInterface'
// import { SearchButton } from '../atoms/SearchButton'


// interface Props {
//   setDataMovies: (value: any) => void
//   dataMovies: any
// }
// export const SearchInput = ({setDataMovies, dataMovies}:Props) => {

//   const [textInputValue, setTextInputValue] = useState('');


//   const handleInputSubmit = async() => {
   
//    const movies =  await getMovieByTitle(textInputValue);
//    setDataMovies(movies)
//   };

//   const handleDelete = () => {
//     setTextInputValue('')
//     setDataMovies([])
//   }

//   useEffect(() => {
    
//   }, [dataMovies])


//   return (
//     <>
//       <View
//         style={styles.searchContainer}
//       >
//           <CustomIcon 
//           name={'search-outline'} 
//           size={30} color={colors.text}
//           isPressable
//           onpress={handleInputSubmit}
//           />

//           <TextInput
//           style={styles.input}
          
//           placeholder="Ej: Harry Potter"
//           onChangeText={setTextInputValue}
//           onSubmitEditing={handleInputSubmit}
//           inputMode='text'
//           value={textInputValue}
          
//           />
//        </View> 
//        <View style={{marginTop: 3}}>
//         { dataMovies.length > 1 
//          ?<SearchButton title={'Borrar'} fn={handleDelete} />
//         : <SearchButton title={'¡Buscar!'} fn={handleInputSubmit} />
          
//         }

//         </View>
//     </>
//   )
// }



// const styles = StyleSheet.create({
//     searchContainer:{
//         paddingLeft:10,
//         marginBottom:10,
//         height:50,
//         flexDirection:'row',
//         justifyContent:'center',
//         backgroundColor:"#909090",
//         borderRadius:20,
//         marginHorizontal: 12,
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: "#727272",
//     },
//     input: {
//       height: 40,
//       width: '90%',
//       borderRadius:20,
//       paddingLeft:20,
//       paddingRight:10,
//       paddingTop:0,
//       fontSize:20

//     }
// })