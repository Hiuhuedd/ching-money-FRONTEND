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
import { analyzeFinancialData } from '../utils/helper';
console.disableYellowBox = true;
const {COLORS, SIZES, FONTS}=appTheme


const FZoneTwo= ({navigation}) =>{
  const { height } = Dimensions.get('window');

    const C_flow = useSelector(state => state.bookingReducer.FZone);

    const z = analyzeFinancialData(C_flow);
    console.log(z);
    //==============================Backpress============================
    const handleBackPress=()=>{
        
        navigation.navigate("FZone") 
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
  
       
     
      

        const showAlert = (type, title, msg) => {
          Toast.show({
            type: type,
            title: title,
            textBody: msg,
          });
        };
        
        //==============================PAGE DISPATCH============================
        const dispatch = useDispatch();
       
        const onMethodSelected = (method) => {
        navigation.navigate("PremiumScreen")
        };

        

        const Zones = [
            {
              zone: "Green zone",
              description: "This indicates that the user is in a financially stable position. They have enough income to cover their expenses, debt repayments, and savings, with some extra cash in hand. A possible plan for this case is to continue with good financial habits and consider investing their excess cash in appropriate investment vehicles to grow their wealth.",
              color: COLORS.green // Green
            },
            {
              zone: "Yellow zone",
              description: "This indicates that the user's financial position is decent, but they may be stretching their finances thin. They may have to cut back on some expenses and increase their savings to achieve long-term financial stability. A possible solution for this case is to create a budget that prioritizes necessary expenses and cuts back on discretionary spending.",
              color: COLORS.gold // Yellow
            },
            {
              zone: "Orange zone",
              description: "This indicates that the user's financial position is not ideal, and they may be at risk of financial instability. They may have to make significant lifestyle changes to get their finances back on track. A possible solution for this case is to reevaluate their expenses and prioritize essential costs. They can also consider increasing their income. It's also essential for them to create a debt repayment plan and start paying off their debts as soon as possible.",
              color: COLORS.amber // Orange
            },
            {
              zone: "Red zone",
              description: "This indicates that the user's financial position is not ideal, and they are in danger of significant financial distress. They may have to take drastic measures to get their finances back on track, such as seeking professional help. A possible solution for this case is to prioritize essential expenses and consider drastic lifestyle changes to reduce expenses further. They can also consider increasing their income. It's also crucial for them to create a debt repayment plan and start paying off their debts as soon as possible.",
              color: COLORS.rose // Red
            }
          ];
          
          
          
            
          
         
     

          
          
         
    
        
              
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
            <View style={{backgroundColor:Zones[z].color, height:"100%",paddingTop:20}}  >
<ScrollView style={{height:height-50,}}>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.black}  onPress={()=> {navigation.navigate("FZone"); }}/>

                                <TextAtom text="My Financial Zone" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 2/2 Your Zone" c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={0} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
               

                    <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={20} ph={10} bg="transparent" br={0} mv={20} mh={0}>
                
                    <ViewAtom  jc="center" ai="center" w="100%" pv={25} ph={5} br={0} mv={10} mh={0}>
                    <TextAtom text={`You are in the ${Zones[z].zone}`} c={COLORS.white} f="Poppins" s={SIZES.h1} w="500"  ta="center"/>
                                   
                    </ViewAtom>
                    <TextAtom text={`${Zones[z].description} Tap the button below to get started now!`} c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>
                   
                
                 
                        
                    </ViewAtom>
                   


                    <ViewAtom  ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Get started"}width="100%"bg={COLORS.black}  borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>



                </ViewAtom>
                {/* <Appointments/> */}
               
             {/* <View style={{position:"absolute", width:"100%",bottom:0, backgroundColor:COLORS.gray }}>
            <BottomTabs navigation={navigation}/>
             </View> */}
             </ScrollView>
            </View>
            )
}
export default FZoneTwo
 
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width:"100%"
    },
  });
  
  
  
  