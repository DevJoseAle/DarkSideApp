import Toast from 'react-native-toast-message';

interface Props{
    type: 'success' | 'info'| 'error',
    text1: string,
    text2: string

}

const toastMessages = ({type, text1, text2}: Props) =>{
    
    switch (type) {
        case 'success':
            Toast.show({
                type: 'success',
                text1: text1,
                text2: text2,
                visibilityTime:1800
            });
            break;
        case 'info':
            Toast.show({
                type: 'info',
                text1: text1,
                text2: text2,
                visibilityTime:1800
            });
            break;
        case 'error':
            Toast.show({
                type: 'error',
                text1: text1,
                text2: text2,
                visibilityTime:1800
            });
            break;

}}
export default toastMessages