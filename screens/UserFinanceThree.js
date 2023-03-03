import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image ,ImageBackground, Platform,TextInput,BackHandler,Switch, } from 'react-native';
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
import MyCalendar from '../components/Molecules/MyCalendar';

const {COLORS, SIZES, FONTS}=appTheme
console.disableYellowBox = true;

const UserFinanceThree= ({navigation}) =>{
    const goals = useSelector(state => state.bookingReducer.ConsultationMethod2);

    const [dates, setDates] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  
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
            for (let i = 0; i < GoalsArray.length; i++) {
              if (GoalsArray[i].date === "") {
                return false;
              }
            }
            return true;
          }
        const onMethodSelected = (method) => {
          if (GoalsArray.length !== goals.length) {
            showAlert(ALERT_TYPE.WARNING, "Oops!", "Please set your goal dates");
          }else{
            if(checkAmtNotEmpty()){
                navigation.navigate("UserFinanceSummary")
                dispatch({
                    type: "SELECT_CONSULTATION_METHOD3",
                    payload:GoalsArray,
                });
              }else{
                showAlert(ALERT_TYPE.WARNING, "Oops!", "Please set your goal dates");
    
              }
        }

        
    };
    const handleSetDate = (selectedDate) => {

        const newDates = [...dates];
        newDates[selectedDateIndex] = selectedDate;
        setDates(newDates);
        setShowDatePicker(false);
        updateGoalsArray(newDates);
    };
    
    const updateGoalsArray = (newDates) => {

        const newData = goals.map((item, index) => {
            return {
                ...item,
                date: newDates[index],
            };
        });
        setGoalsArray(newData);

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
            <View style={{backgroundColor:COLORS.white, height:"100%",paddingTop:20}}  >

                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("UserFinanceTwo"); }}/>

                                <TextAtom text="My Financial Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 3/3" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={10} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
               

                    <TextAtom text="Specify Your Goal Date" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                    <ViewAtom fd="column" jc="space-between" ai="center" w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                      {goals.map((goal,index)=>{
                      
                        return(
                          <ViewAtom fd="column" jc="space-between"  w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0} key={index}>
               <TextAtom text={goal.goal} c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                    <TouchableOpacity  onPress={() => {
                                setSelectedDateIndex(index);
                                setShowDatePicker(true);
                             
                              
                                }}>
                          <ViewAtom fd="row" jc="space-between" ai='center'  w="35%" pv={0} ph={5} >
                        <Feather name="calendar" size={SIZES.h4}     color={COLORS.primary}  />

                            <TextAtom text="  Select a date" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                      
                           
                            </ViewAtom>
                            </TouchableOpacity>
                         
                          
                          {(showDatePicker&&selectedDateIndex===index)&&(
                              <MyCalendar handleSetDate={handleSetDate} label="Select a date" />
                
                            )}

                          </ViewAtom>
                        )
                    })}
                        
                    </ViewAtom>
                   


                    <ViewAtom  ai="center" w="100%" pv={30} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Next"}width="100%"bg={COLORS.primary}  borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>



                </ViewAtom>
                {/* <Appointments/> */}
               
             {/* <View style={{position:"absolute", width:"100%",bottom:0, backgroundColor:COLORS.gray }}>
            <BottomTabs navigation={navigation}/>
             </View> */}
            </View>
            )
}
export default UserFinanceThree
 
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width:"100%"
    },
  });
  
  
  
  