import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image ,ImageBackground, Platform,TextInput,BackHandler,Switch, AsyncStorage,ActivityIndicator } from 'react-native';
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
import moment from 'moment';
const {COLORS, SIZES, FONTS}=appTheme
console.disableYellowBox = true;

const UserFinanceSummary= ({navigation}) =>{
    const goals = useSelector(state => state.bookingReducer.ConsultationMethod3);

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
            Dialog.show({
            //   type: type,
              title: title,
              textBody: msg,
              autoClose: 3000
            });
          };
        const onMethodSelected = (method) => {
            AsyncStorage.setItem('goalsComplete', 'true');
            showAlert(ALERT_TYPE.SUCCESS, "Please wait...",  <ActivityIndicator size="small" color="#fff" />);
            setTimeout(() => {
                navigation.navigate("Hook")
            }, 4500);
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

                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("UserFinanceThree"); }}/>

                                <TextAtom text="My Financial Goals" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Summary" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                </ViewAtom>
                                <ScrollView style={{height:HEIGHT-170,width:"100%",}} showsVerticalScrollIndicator={false} >
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={10} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                                
               {goals.map((goal,index)=>{
            
                const formattedDate = moment(goal.date).format('MMMM D, YYYY');

                const formattedNumber = goal.amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return(

                    <ViewAtom fd="column" jc="space-between"  w="100%" pv={15} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                        <TextAtom text={goal.goal} c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                        <TextAtom text={`This financial goal has a target amount of ${formattedNumber} shillings. The target date for achieving this goal is ${formattedDate}. I have set this goal to help me save money and achieve my financial objectives. By saving regularly and tracking my progress towards this goal, I can stay motivated and work towards reaching my financial milestones.`} c={COLORS.gray2} f="Poppins" s={SIZES.h5} w="500"/>
                        
                    </ViewAtom>

                )
               })}

                    
                   


                    <ViewAtom  ai="center" w="100%" pv={30} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Finish"}width="100%"bg={COLORS.primary}  borderRadius={7}   onMethodSelected={onMethodSelected}/>
                       
                    </ViewAtom>



                </ViewAtom>
                                    </ScrollView>  
                               
                {/* <Appointments/> */}
               
             {/* <View style={{position:"absolute", width:"100%",bottom:0, backgroundColor:COLORS.gray }}>
            <BottomTabs navigation={navigation}/>
             </View> */}
            </View>
            )
}
export default UserFinanceSummary
 
const styles = StyleSheet.create({
  
  });
  
  
  
  