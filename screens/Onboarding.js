import React, { useState } from 'react';
import { StyleSheet, AsyncStorage,Image, TouchableOpacity } from 'react-native';
import { Text,View } from 'react-native';
// import { Svg, Circle } from 'react-native-svg';
import { Button } from '../components/Atoms/Button';
import TextAtom from '../components/Atoms/TextAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { COLORS, SIZES } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';

console.disableYellowBox = true;
const Onboarding = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [title, settitle] = useState("Next");

  const handleNextStep = (t) => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);    
    }
    if (currentStep==1){
      settitle("Finish")
    }
    if (currentStep==2){
      AsyncStorage.setItem('onboardingComplete', 'true');
      navigation.navigate("AuthScreen")
    }
  };
  const handlePrevStep = (t) => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
    if (currentStep!==1) {
      settitle("Next")
    }
  };
  return (

    <View style={styles.container} >
 
      <View  style={styles.imgs}>
              <TouchableOpacity style={styles.skip} onPress={()=>{setCurrentStep(2);settitle("Finish")}}>
              <TextAtom text="Skip" c={COLORS.primary} f="Poppins" s={SIZES.body4} w="600"/>             
              <Feather name="arrow-right" size={SIZES.icon}     color={COLORS.primary}/>

              </TouchableOpacity>
     <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={0} ph={5} bg="transparent" br={0} mv={0} mh={0}>
        <Image source={require('../assets/ching2.png')} style={styles.logoImg} />
        </ViewAtom>   

       {currentStep === 1 && <Image source={require('../assets/4.png')} style={styles.deliveryIcon} />}
       {currentStep === 2 && <Image source={require('../assets/1.png')} style={styles.deliveryIcon} />}
       {/* {currentStep === 2 && <Image source={require('../assets/2.png')} style={styles.deliveryIcon} />} */}
       {/* {currentStep === 3 && <Image source={require('../assets/3.png')} style={styles.deliveryIcon} />} */}
        </View>   
  
 <View style={styles.content} >
        {currentStep === 1 && (
              <>
             <View style={{ alignSelf:"center"}}>
             <TextAtom text="Welcome" c={COLORS.white} f="Poppins" s={SIZES.h2} w="600"  ta="center"/>             
              </View>  
             <View style={{paddingTop: 10}}>
              <TextAtom text="Easily keep track of your spending and manage your finances"  ta="center"c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>             
             <TextAtom text="Did you know that you can actually get out of debt in less than 24 months?"  ta="center"c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>             
             <TextAtom text="It's time to achieve your financial goals with ease, clarity and peace of mind"  ta="center"c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>             
             <TextAtom text="Let's get started!"  ta="center"c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>  
            </View>
                       
            
              </>
            )}
            {currentStep === 2 && (
        <>
              <View style={{ alignSelf:"center"}}>
              <TextAtom text="Control" c={COLORS.white} f="Poppins" s={SIZES.h2} w="600"/>             
               </View>  
              <View style={{paddingTop: 10,alignItems:"center"}}>
          
              <TextAtom text="Take control of your finances enjoy your financial freedom and success." c={COLORS.white} f="Poppins" ta="center" s={SIZES.h5} w="500"/>          
              <TextAtom text="Get Started!." c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>          
           
             </View>
             </>
            )}
            {/* {currentStep === 3 && (
              <>
              <View style={{ alignSelf:"center"}}>
              <TextAtom text="Planning" c={COLORS.white} f="Poppins" s={SIZES.h2} w="600"/>             
               </View>  
              <View style={{paddingTop: 10}}>
           
              <TextAtom text="Now that you've established your financial strength, it's time to start tracking your expenses, income, savings and debt. Ching will stay ahead of your financial journey to help guide you to your goal. You can update any of your wallets/accounts and leave the rest to Ching" c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>          
           
             </View>
             </>
        
            )} */}
            {/* {currentStep === 4 && (
              <>
              <View style={{ alignSelf:"center"}}>
              <TextAtom text="Celebrate" c={COLORS.white} f="Poppins" s={SIZES.h2} w="600"/>             
               </View>  
              <View style={{paddingTop: 10,alignItems:"center"}}>
          
              <TextAtom text="Take delight in your financial freedom and success." c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>          
              <TextAtom text="Get Started!." c={COLORS.white} f="Poppins" s={SIZES.h5} w="500"/>          
           
             </View>
             </>
        
            )} */}
        
      
              <View style={styles.buttons}>

        {currentStep>1? <TouchableOpacity   onPress={()=>{handlePrevStep()}} >
        <Feather name="arrow-left" size={SIZES.icon}     color={COLORS.white}/>

        </TouchableOpacity> :  <TextAtom text="prev" c={COLORS.primary} f="Poppins" s={SIZES.h4} w="500"/>
 }
      <TouchableOpacity style={styles.btn} onPress={()=>{handleNextStep()}}  >
          <TextAtom text={title} c={COLORS.primary} f="Poppins" s={SIZES.body4} w="500"/>
        </TouchableOpacity> 
              </View>
            

            

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    height:"100%",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.gray
  },

  imgs: {
    paddingTop: 50,
    backgroundColor:COLORS.white,
    width:"100%",
    height:"55%",
    display:"flex",
    alignItems:"center",
    position:"relative"
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor:COLORS.primary,
    width:"100%",
    height:"45%",
    // alignItems:"center",
    position:"relative",
  },
 
  deliveryIcon:{
    width:"80%",
    height: "80%",
    // marginTop:"45%",
 
},
  logoImg:{
    width:"30%",
    height: "30%", 
},
  buttons:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    width:"100%",
    position:"absolute",
    bottom:15,
    left:20,
   
},
 skip:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    padding:20,
    width:"100%",
    position:"absolute",
   top:15,
   alignItems:"center"
},
btn:{

    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    shadowColor: COLORS.gray2,
  

}
});

export default Onboarding;