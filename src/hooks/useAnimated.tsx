import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimated = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(-200)).current;
    
    const fadeIn = ({ duration = 300, toValue = 0, callback= () => {}}) => {
   
        Animated.timing(
            animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true
            }
        ).start(callback);
    }

    const fadeOut = ({ duration = 300, toValue = 0, callback= () => {}}) => { 
        Animated.timing(
            animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true
            }
        ).start(callback );
    }

    const movingTopPosition = ({ duration = 300, initialPosition = 0, toValue = 0, callback= () => {}, easing = Easing.bounce}) =>{

        animatedTop.setValue(initialPosition);
             //Caida rebote
         Animated.timing(
             animatedTop,
             {
                 toValue:toValue ,
                 duration: duration,
                 easing: easing,
                 useNativeDriver: true
             }   
         ).start(callback);
        

    }

  return {
    //Properties
    animatedOpacity,
    animatedTop,
    //Methods
    fadeIn,
    fadeOut,
    movingTopPosition,
  }
}