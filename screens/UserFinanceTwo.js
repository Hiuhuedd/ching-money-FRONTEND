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


const UserFinanceTwo= ({navigation}) =>{
    const goals = useSelector(state => state.bookingReducer.ConsultationMethod);
    const [goalValues, setGoalValues] = useState(goals.map(goal => ({ goal, amt: '' })));
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
  
       
     
      


        const showAlert = (type, title, msg) => {
          Toast.show({
            type: type,
            title: title,
            textBody: msg,
          });
        };
        
        //==============================PAGE DISPATCH============================
        const dispatch = useDispatch();
        function checkAmtNotEmpty() {
          for (let i = 0; i < goalValues.length; i++) {
            if (goalValues[i].amt === "") {
              return false;
            }
          }
          return true;
        }
        const onMethodSelected = (method) => {
          if (goals.length !== goalValues.length) {
            console.log(goalValues);
            showAlert(ALERT_TYPE.WARNING, "Oops!", "Please set your goals amounts");
          }else{
            if(checkAmtNotEmpty()){
              navigation.navigate("UserFinanceThree")
              dispatch({
                type: "SELECT_CONSULTATION_METHOD2",
                payload:goalValues,
              });
            }else{
              showAlert(ALERT_TYPE.WARNING, "Oops!", "Please set your goals amounts");

            }
          }
        };

        const handleSetAmount = (key,amt) => {
          console.log(key,amt);
          const newGoalValues = [...goalValues];
          newGoalValues[key].amt = amt;
          setGoalValues(newGoalValues);
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
                  const HEIGHT=Dimensions.get("screen").height
            return(
            <View style={{backgroundColor:COLORS.white, height:"100%",paddingTop:20}}  >

                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={10} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("UserFinance"); }}/>

                                <TextAtom text="My Financial Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 2/3" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={0} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
                <ScrollView style={{height:HEIGHT-170,width:"100%",}} showsVerticalScrollIndicator={false} >

                    <TextAtom text="Specify Your Goal Amount" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                    <ViewAtom fd="column" jc="space-between" ai="center" w="100%" pv={10} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                      {goalValues.map((goalValue,index)=>{
                      
                        return(
                          <ViewAtom fd="column" jc="space-between"  w="100%" pv={10} ph={5} bg="transparent" br={0} mv={0} mh={0} key={goalValue.goal}>
                            <TextAtom text={goalValue.goal} c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                            <MyInput editable={true} keyboardType="numeric" secureTextEntry={false} style={styles.input} placeholder={`Your ${goalValue.goal} amount`} maxLength={40} setisUpdated={handleSetAmount} index={index} />

                          </ViewAtom>
                        )
                      })}
                        
                    </ViewAtom>
                    <ViewAtom  ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Next"}width="100%"bg={COLORS.primary}  borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>
                   </ScrollView>





                </ViewAtom>
                {/* <Appointments/> */}
               
             {/* <View style={{position:"absolute", width:"100%",bottom:0, backgroundColor:COLORS.gray }}>
            <BottomTabs navigation={navigation}/>
             </View> */}
            </View>
            )
}
export default UserFinanceTwo
 
const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width:"100%"
    },
  });
  
  
  
  