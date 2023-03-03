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
import { useDispatch } from 'react-redux';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const {COLORS, SIZES, FONTS}=appTheme
console.disableYellowBox = true;

const UserFinance= ({navigation}) =>{
    
    //==============================Backpress============================
    const handleBackPress=()=>{
        
        navigation.navigate("Home") 
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
        const [GoalsArray, setGoalsArray] = useState([]);
        const [Savings, setIsSavings] = React.useState(false);
        const [Debt, setIsDebt] = React.useState(false);
        const [Item, setIsItem] = React.useState(false);
       
     
      


        const showAlert = (type, title, msg) => {
          Toast.show({
            type: type,
            title: title,
            textBody: msg,
          });
        };
        
        const onMethodSelected = (method) => {
          if (GoalsArray.length < 1) {
            showAlert(ALERT_TYPE.WARNING, "Oops!", "You'll need to specify at least one goal first");
          }else{
            navigation.navigate("UserFinanceTwo")
            console.log(GoalsArray);
            dispatch({
                type: "SELECT_CONSULTATION_METHOD",
                payload:GoalsArray,
              });
          }
        };

          
          
          //==============================PAGE DISPATCH============================
          const dispatch = useDispatch();
         
          const handleToggle = (Value,data) => {
            
            if(data==="Debt Settlement"){
                if(Value){        
                    setGoalsArray([...GoalsArray, data]);
                    setIsDebt(Value);
                }else{
                    setGoalsArray(GoalsArray.filter((element) => element !== data));
                    setIsDebt(Value);
                }
            }
            if(data==="Savings"){
                if(Value){        
                    setGoalsArray([...GoalsArray, data]);
                    setIsSavings(Value);
                }else{
                    setGoalsArray(GoalsArray.filter((element) => element !== data));
                    setIsSavings(Value);
                }
            }
            if(data==="Item Aquisition"){
                if(Value){        
                    setGoalsArray([...GoalsArray, data]);
                    setIsItem(Value);
                }else{
                    setGoalsArray(GoalsArray.filter((element) => element !== data));
                    setIsItem(Value);
                }
            }
          }
        // useEffect(() => {
        //     console.log(GoalsArray);
        //     dispatch({
        //         type: "SELECT_CONSULTATION_METHOD",
        //         payload:GoalsArray,
        //       });
        
        // }, [Savings,Debt,Item])
        
              
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
            <View style={{backgroundColor:COLORS.white, height:"100%",paddingTop:20}}>

                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 {/* <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("Home"); }}/> */}

                                <TextAtom text="My Financial Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 1/3" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={10} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
               

                    <TextAtom text="Specify Your Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                    <ViewAtom fd="row" jc="space-between" ai="center" w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                        <ViewAtom fd="row"  ai="center" w="33%" pv={0} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                            <ViewAtom fd="row" jc="space-between" ai="flex-start"   pv={15} ph={15} bg={COLORS.primary}  br={50}  mv={0} mh={5} >
                                <Feather name="briefcase" size={SIZES.h4}   color={COLORS.white}/>
                            </ViewAtom>
                            <TextAtom text="  Savings" c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>

                        </ViewAtom>

                        <Switch
                        value={Savings}
                        onValueChange={(newValue) => handleToggle(newValue, "Savings")}
                            trackColor={{ false: '#767577', true:COLORS.primary }}
                            thumbColor={Savings ? COLORS.white : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            />
                    </ViewAtom>
                    <ViewAtom fd="row" jc="space-between" ai="center" w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                        <ViewAtom fd="row"  ai="center" w="35%" pv={0} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                            <ViewAtom fd="row" jc="space-between" ai="flex-start"   pv={15} ph={15} bg={COLORS.primary}  br={50}  mv={0} mh={5} >
                                <Feather name="rotate-ccw" size={SIZES.h4}   color={COLORS.white}/>
                            </ViewAtom>
                            <TextAtom text="  Debt settlement" c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>

                        </ViewAtom>
                        <Switch
                        value={Debt}
                        onValueChange={(newValue) => handleToggle(newValue, "Debt Settlement")}
                            trackColor={{ false: '#767577', true:COLORS.primary }}
                            thumbColor={Debt ? COLORS.white : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            />
                    </ViewAtom>
                    <ViewAtom fd="row" jc="space-between" ai="center" w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                        <ViewAtom fd="row"  ai="center" w="33%" pv={0} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                            <ViewAtom fd="row" jc="space-between" ai="flex-start"   pv={15} ph={15} bg={COLORS.primary}  br={50}  mv={0} mh={5} >
                                <Feather name="unlock" size={SIZES.h4}   color={COLORS.white}/>
                            </ViewAtom>
                            <TextAtom text="  Item aquisition" c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>

                        </ViewAtom>
                        <Switch
                            value={Item}
                            onValueChange={(newValue) => handleToggle(newValue, "Item Aquisition")}
                            trackColor={{ false: '#767577', true:COLORS.primary }}
                            thumbColor={Item ? COLORS.white : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            />
                    </ViewAtom>


                    <ViewAtom  ai="center" w="100%" pv={30} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Next"}width="100%"bg={COLORS.primary}  borderRadius={7}   onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>



                </ViewAtom>
                {/* <Appointments/> */}
               
             {/* <View style={{position:"absolute", width:"100%",bottom:0, backgroundColor:COLORS.gray }}>
            <BottomTabs navigation={navigation}/>
             </View> */}
            </View>
            )
}
export default UserFinance
 
const styles = StyleSheet.create({
  
  });
  
  
  
  