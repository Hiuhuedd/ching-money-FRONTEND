import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image ,ImageBackground, Platform,TextInput,BackHandler,Switch } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from "react-native-elements";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Button } from '../components/Atoms/Button';
import BottomTabs from '../components/Molecules/BottomTabs';
import appTheme from "../constants/theme"
import { ScrollView } from 'react-native-gesture-handler';
import EcareServices from '../components/Molecules/EcareServices';
import Appointments from '../components/Molecules/Appointments';
import ViewAtom from '../components/Atoms/ViewAtom';
import TextAtom from '../components/Atoms/TextAtom';
import { RadioButton } from 'react-native-paper';
import MedicalSpecialistDropdown from '../components/Molecules/MedicalSpecialistDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import MyInput from '../components/Atoms/MyInput';
console.disableYellowBox = true;
const {COLORS, SIZES, FONTS}=appTheme


const Hookone= ({navigation}) =>{

   
    //==============================Backpress============================
    const handleBackPress=()=>{
        
        navigation.navigate("Hook") 
        return true
    
    }
    useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress',handleBackPress);
    }, [])
    useEffect(() => {
    
        BackHandler.addEventListener('hardwareBackPress',handleBackPress);
        return()=>{
            BackHandler.removeEventListener('hardwareBackPress',handleBackPress);
            
        }
    }, [])

     
                //==============================PAGE STATE============================
   
        
        //==============================PAGE DISPATCH============================
        const dispatch = useDispatch();
       
        const onMethodSelected = (method) => {
            navigation.navigate("UserFinance")
        };

    
          
          
         
     

          
          
         
    
        
              
              //==============================PAGE FONTS============================

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        Poppins1: require('../assets/fonts/Poppins-Black.ttf'),
        Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
        Lob: require('../assets/fonts/Lobster-Regular.ttf')
                  });
                  if (!loaded) {
                    return <AppLoading/>
                  }
             
            return(
            <View style={{backgroundColor:COLORS.white, height:"100%",paddingTop:20, alignItems:"center", justifyContent:"center"}}  >

<TouchableOpacity style={styles.skip} onPress={()=>{navigation.navigate("Hook")}}>
              <TextAtom text="Skip" c={COLORS.primary} f="Poppins" s={SIZES.body4} w="600"/>             
              <Feather name="arrow-right" size={SIZES.icon}     color={COLORS.primary}/>

              </TouchableOpacity>
                <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={0} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
                  <Image source={require('../assets/10.png')} style={styles.deliveryIcon} />

                    <ViewAtom jc="center" ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                 
        <TextAtom text="See how easy it is to setup your money goals!." c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>
         <TextAtom text="Let's kick off this amazing journey, to put you in the driver's seat of your finances!" c={COLORS.black} ta="center" f="Poppins" s={SIZES.h5} w="500"/>
                    
                    
                    </ViewAtom>

                   


                    <ViewAtom jc="center" ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Proceed"}width="50%"bg={COLORS.primary}  borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>



                </ViewAtom>
               
            </View>
            )
}
export default Hookone
 
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width:"100%"
    },
    deliveryIcon:{
        width:"100%",
        height: "50%",
        // marginTop:"45%",
     
    },
    skip:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        padding:20,
        width:"100%",
        position:"absolute",
       top:20,
       alignItems:"center"
    },
  });
  
  
  
  