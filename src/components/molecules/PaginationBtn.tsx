import { View, Text } from "react-native"
import { Movie } from "../../interfaces/responseInterface"
import { CustomIcon } from "./CustomIcon"

interface Props {
    moviePerPage: number
    currentData: Movie[]
    setActualPage: (value: number) => void
    actualPage: number
  }
  export const PaginationBtn = ( {moviePerPage,currentData,setActualPage, actualPage}:Props ) => {
    const pages = []
    for(let i = 1; i <= Math.ceil(currentData.length / moviePerPage)+1; i++){
      pages.push(i)
    }
    return (
      <View style={{marginVertical: 5,flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignContent: 'center', alignSelf: 'center'}}>
        <CustomIcon 
        name='arrow-back-circle-outline' 
        size={28} color={actualPage === 1 ?'gray' :'white'} 
        isPressable={actualPage === 1 ? false : true} 
        onpress={()=>setActualPage(actualPage - 1)} 
        />
          <Text style={{color: 'white', fontWeight: 'bold'}}>{actualPage}</Text>
         <CustomIcon 
        name='arrow-forward-circle-outline' 
        size={28} color={actualPage === 2 ?'gray' :'white'}
        isPressable={actualPage === 2 ? false : true} 
        onpress={()=>setActualPage(actualPage + 1)} 
        />
      </View>
    )
  }  
  