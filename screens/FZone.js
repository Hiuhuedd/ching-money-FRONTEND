import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image ,ImageBackground, Platform,TextInput,BackHandler,Switch,ActivityIndicator,ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from "react-native-elements";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Button } from '../components/Atoms/Button';
import BottomTabs from '../components/Molecules/BottomTabs';
import appTheme from "../constants/theme"
// import { ScrollView } from 'react-native-gesture-handler';
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


const FZone= ({navigation}) =>{
  const { height } = Dimensions.get('window');
    const goals= [
        "income",
        "expenses",
        "debt repayments",
        "savings",
        "cash in hand",
      ];
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
  
       
     
        const [formData, setFormData] = useState({
            income: "",
            expenses: "",
            "debt repayments": "",
            savings: "",
            "cash in hand": "",
          });


        const showAlert = (type, title, msg) => {
          Toast.show({
            type: type,
            title: title,
            textBody: msg,
          });
        };
        
        const showAlertDialog = (type, title, msg) => {
            Dialog.show({
            //   type: type,
              title: title,
              textBody: msg,
              autoClose: 5000
            });
          };
        
        //==============================PAGE DISPATCH============================
        const dispatch = useDispatch();
       
        const onMethodSelected = (method) => {
            const isFormDataComplete = Object.values(formData).every(value => value !== "");
            if(isFormDataComplete){
                showAlertDialog(ALERT_TYPE.WARNING, <TextAtom text="Please wait as we establish your financial zone"  ta="center"c={COLORS.white} f="Poppins" s={SIZES.h3} w="500"/>, <ActivityIndicator size="small" color="#fff" />)

                
                dispatch({
                    type: "FINANCIAL_ZONE",
                    payload:formData,
                });
                setTimeout(() => {
                    navigation.navigate("FZoneTwo")   
                    
                }, 6000);
            }else{
                showAlert(ALERT_TYPE.WARNING, "Oops!", "Please fill all the fields");

            }
        };

        const handleSetAmount = (key,value) => {
            setFormData({ ...formData, [key]: value });
        
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
                   
                   <ScrollView style={{height:height-50,}}>
                <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={20} ph={20} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="flex-start" ai="center" w="70%" bg="transparent"  pv={10}br={0} mv={0} mh={0}
               
                >
              
                                 <Feather name="chevron-left" size={SIZES.h1}     color={COLORS.primary}  onPress={()=> {navigation.navigate("Hook"); }}/>

                                <TextAtom text="My Financial Zone" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>

                </ViewAtom>

                                <TextAtom text="Step 1/2" c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
                <ViewAtom fd="column" jc="flex-start" ai="center" w="100%" pv={0} ph={20} bg="transparent" br={0} mv={0} mh={0}>
             

                    <TextAtom text="Go ahead and specify your monthly cash flow" c={COLORS.black} f="Poppins" s={SIZES.h3} w="500"/>
                    <ViewAtom fd="column" jc="space-between" ai="center" w="100%" pv={5} ph={5} bg="transparent" br={0} mv={0} mh={0}>
                    {goals.map((item) => (
                         
                          <ViewAtom fd="column" jc="space-between"  w="100%" pv={5} ph={5} bg="transparent" br={0} mv={0} mh={0} key={item}>
                            <TextAtom text={item.toUpperCase()} c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"/>
                            <MyInput editable={true} keyboardType="numeric" secureTextEntry={false} style={styles.input} placeholder={`Enter monthly ${item}`}maxLength={40} setisUpdated={handleSetAmount} index={item} />

                          </ViewAtom>
                        ))}
                
                 
                        
                    </ViewAtom>

                   


                    <ViewAtom  ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={"Next"}width="100%"bg={COLORS.primary}  borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
                       
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
export default FZone
 
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
  });
  
  
  
  