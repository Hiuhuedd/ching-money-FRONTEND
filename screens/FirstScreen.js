import React, { useState, useEffect} from 'react'
import { View,  Image,StyleSheet,ActivityIndicator,AsyncStorage } from "react-native";
import appTheme, { COLORS } from '../constants/theme';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
console.disableYellowBox = true;
export default FirstScreen  = ({navigation}) =>{

const [loader, setloader] = useState(false)


useEffect(() => {
AsyncStorage.getItem('onboardingComplete').then(value => {
        if (value !== null && value === 'true') {
          setloader(true)
          setTimeout(() =>{
              navigation.navigate('Onboarding')
              // navigation.navigate("PremiumScreen")
          }, 3000)
          
        }else{
          setloader(true)
          setTimeout(() =>{
              navigation.navigate('Onboarding')
          }, 6000)
          
        }
      });
}, [])

const [loaded] = useFonts({
  Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  Poppins1: require('../assets/fonts/Poppins-Black.ttf'),
});


if (!loaded) {
  return <AppLoading/>
}




return(
    <View      style={styles.logo}>

        <Image source={require('../assets/ching.png')} style={styles.deliveryIcon} />


        { loader? 
          <ActivityIndicator size="small" color="#fff" />
                :<></>
                }
        
    </View>
    
)
  }

  
const styles = StyleSheet.create({
  deliveryIcon:{
      width:"30%",
      height: "15%",
      marginRight:10,
      marginTop:"30%",
      marginBottom:"20%"
  },
 
  logo:{
    flex: 1,
    display:"flex",
    flexDirection:"column",
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:COLORS.primary 

  }
})


