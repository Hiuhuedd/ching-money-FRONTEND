import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,BackHandler,Switch,  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { CheckBox, Divider } from "react-native-elements";
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
import {  RadioButton } from 'react-native-paper';
import MedicalSpecialistDropdown from '../components/Molecules/MedicalSpecialistDropdown';
import { useDispatch } from 'react-redux';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Goals from '../components/Molecules/Goals';
import { CustomerGoals } from '../constants/content/CustomerGoals';

const {COLORS, SIZES, FONTS}=appTheme
console.disableYellowBox = true;

const UserFinance= ({navigation}) =>{
    
    //==============================Backpress============================
    const handleBackPress=()=>{
        
        navigation.navigate("Hookone") 
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
        const [currentGoal, setCurrentGoal] = useState(0);
        

       
     
      

        const [selectedOptions, setSelectedOptions] = useState([]);
        const [tik, settik] = useState(false);

        const handleOptionChange = (option, isChecked) => {
          if (isChecked) {
            settik(true)     
            setSelectedOptions([...selectedOptions, option]);
          } else {
            settik(false)
            setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
          }
        };

        const showAlert = (type, title, msg) => {
          Toast.show({
            type: type,
            title: title,
            textBody: msg,
          });
        };
        
        const onMethodSelected = (method) => {
          if (selectedOptions.length < 1) {
            showAlert(ALERT_TYPE.WARNING, "Oops!", "You'll need to specify at least one goal first");
          }else{
            navigation.navigate("UserFinanceTwo")
            console.log(selectedOptions);
            const filteredArr = selectedOptions.filter((str, index) => {
                return selectedOptions.indexOf(str) === index;
              });
            dispatch({
                type: "SELECT_CONSULTATION_METHOD",
                payload:filteredArr,
              });
          }
        };

          
          
          //==============================PAGE DISPATCH============================
          const dispatch = useDispatch();
        
   
              
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



             const goalsList=CustomerGoals[currentGoal].goal
             const HEIGHT=Dimensions.get("screen").height
            return(
            <View style={{backgroundColor:COLORS.white, height:"100%",paddingTop:20}}>

                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 {/* <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("Home"); }}/> */}

                                <TextAtom text="My Financial Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 1/3" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                <TextAtom text="Specify your goals" c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={5} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                      <ScrollView style={{height:HEIGHT-100}}>
                        
                <Goals setCurrentGoal={setCurrentGoal} currentGoal={currentGoal} GoalsArray={CustomerGoals}/>

                  
                <ViewAtom jc="flex-start" ai="flex-start"  bg="transparent"  pv={3} ph={20} br={0} mv={0} mh={0}>
             {

            goalsList.map(option=>{
                return(
                    <TouchableOpacity key={option} onPress={() => handleOptionChange(option,!tik )}>
         <ViewAtom fd="row" jc="flex-start" ai="center" w="100%" bg="transparent"  pv={1}br={0} mv={0} mh={0} > 
                    <CheckBox
                    onPress={(isChecked) => handleOptionChange(option, isChecked)}
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='check'
                    uncheckedIcon='add'
                    checkedColor={COLORS.primary}
                    checked={selectedOptions.includes(option)}
                    />
             
                { !tik?   <TextAtom text={option} c={COLORS.gray2} f="Poppins" s={ SIZES.h5} w="500"/>:<TextAtom text={option} c={COLORS.primary} f="Poppins" s={ SIZES.h5} w="500"/>
                }

               </ViewAtom>
                  </TouchableOpacity>

                )

                })
             }
               </ViewAtom>

             <View style={{alignSelf:"auto"}} >

                    <ViewAtom  ai="center" w="100%" pv={30} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Next"}width="100%"bg={COLORS.primary}  borderRadius={7}   onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>
             </View>


                        </ScrollView>          

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
  
  
  
  