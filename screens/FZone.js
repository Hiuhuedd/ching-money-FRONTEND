import React, { useState } from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import Stepper from "react-native-stepper-ui";
import { RadioButton } from 'react-native-paper';
import ViewAtom from '../components/Atoms/ViewAtom';
import { COLORS, SIZES } from '../constants/theme';
import TextAtom from '../components/Atoms/TextAtom';
import { Button } from '../components/Atoms/Button';
import Feather from 'react-native-vector-icons/Feather';
import { questions } from '../constants/content/ZonesQuestionnaire';
import StepperComponent from '../components/Molecules/stepper';

const FZone=({navigation})=>{
const h=Dimensions.get("screen").height
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState([
    null, // employment status
    null, // monthly income
    null, // debt amount
    null, // savings amount
    null, // monthly savings percentage
    null, // savings usage frequency
    null, // retirement savings
    null, // major expense payment method
    null, // student loan amount
    null  // has filed bankruptcy
  ]);

  const steps = [
    { label: '  Employment status', icon: 'briefcase' },
    { label: '  Income status', icon: 'archive' },
    { label: '  Debt status', icon: 'sidebar' },
    { label: '  Savings status', icon: 'pocket' },
    { label: '  Savings amount', icon: 'pocket' },
    { label: '  Expenses status', icon: 'shopping-cart' },
    { label: '  Payment method', icon: 'credit-card' },
    { label: '  Bankruptcy status', icon: 'credit-card' },
    { label: '  Bankruptcy status', icon: 'credit-card' },
    { label: '  Bankruptcy status', icon: 'credit-card' },
    { label: '  Bankruptcy status', icon: 'credit-card' },
  ];

   
  const content=questions.map((q,i)=>{
    return(
      <ViewAtom  jc="flex-start" ai="flex-start" w="100%" pv={10} ph={15} bg="transparent" br={0} mv={0} mh={0}>
      <ViewAtom fd="row"  w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
      <Feather name={steps[currentStep].icon} size={SIZES.h3}     color={COLORS.primary}  />
      <TextAtom text={`  ${q.section}`} c={COLORS.black} f="Poppins" s={SIZES.body3}/>

       </ViewAtom>
      <TextAtom text={q.question} c={COLORS.black} f="Poppins" s={SIZES.h5}/>
     
      <RadioButton.Group onValueChange={newValue =>  setFormData(prevData => [...prevData.slice(0, i), newValue])} value={formData[i]}>
            <View>
               { q.choices.map(c=>{
                return(
               <ViewAtom fd="row" jc="flex-start" ai="center" w="100%" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <RadioButton  value={c} status={formData[i]=== c ? 'checked' : 'unchecked'} uncheckedColor={COLORS.gray2} color={COLORS.primary} />
                    <TextAtom text={c} c={COLORS.black} f="Poppins" s={SIZES.body4}/>
                </ViewAtom>  

                )
               })
              }        
            </View>     
        </RadioButton.Group>

</ViewAtom>
    )
  })
  const handleNext = () => {
    if (currentStep === steps.length - 1) {

    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={30} ph={5} bg="transparent" br={0} mv={0} mh={0}>
       <ViewAtom fd="column" jc="flex-start" ai="flex-start" w="100%" pv={10} ph={15} bg="transparent" br={0} mv={0} mh={0}>
                <ViewAtom fd="row" jc="space-between" ai="center" w="100%" bg="transparent"  pv={10}br={0} mv={0} mh={0}>
    <TextAtom text="My Financial Zone" c={COLORS.black} f="Poppins" s={SIZES.h4} w="500"/>
              <TouchableOpacity style={styles.skip} onPress={()=>{ navigation.navigate("PremiumScreen")}}>
                        <TextAtom text="Skip" c={COLORS.primary} f="Poppins" s={SIZES.body4} w="600"/>             
                        <Feather name="arrow-right" size={SIZES.icon}     color={COLORS.primary}/>
              </TouchableOpacity>
                </ViewAtom>

                                <TextAtom text={`Step ${currentStep+1}/${content.length}`} c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/>
                                
                               
                </ViewAtom>
      <StepperComponent stepsArray={content} currentStep={currentStep+1} setCurrentStep={setCurrentStep}/>
   
      <Stepper
        active={currentStep}
        content={content}
        onNext={() => handleNext()}
        onBack={() =>  setCurrentStep(currentStep -1)}
        onFinish={() =>   navigation.navigate("PremiumScreen")}
        buttonStyle={{ padding: 13, borderRadius: 4, alignSelf: 'center', margin: 15, backgroundColor: COLORS.primary,      width:"45%",alignItems: 'center',}}
        wrapperStyle={{justifyContent: 'center', alignItems: 'flex-start',height:h-250}}
        stepStyle={{backgroundColor: COLORS.primary, width: 20, height: 0, borderRadius: 0, justifyContent: 'center', alignItems: 'center', opacity: 0, }}
      />
    </ViewAtom>
  );
}

const styles = StyleSheet.create({
  skip:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    padding:0,
    // width:"100%",
    // position:"absolute",
   alignItems:"center"
},
});
  

export default FZone



