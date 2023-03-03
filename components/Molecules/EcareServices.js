import React ,{useState,useEffect}from 'react';
import {StyleSheet,Image  } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { COLORS, SIZES } from '../../constants/theme';
import  TextAtom  from '../Atoms/TextAtom';
import ViewAtom from '../Atoms/ViewAtom';
import { image_Diagnosis, image_dr2, image_Pharmacist } from '../../constants/images';
const EcareServices=()=>{
    const [loaded] = useFonts({
        Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
        Poppins1: require('../../assets/fonts/Poppins-Black.ttf'),
        Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
        Lob: require('../../assets/fonts/Lobster-Regular.ttf')
                  });
      
      
      if (!loaded) {
        return <AppLoading/>
      }
      return(
     <ViewAtom fd="column" jc="center" ai="flex-start" w="100%" pv={15} ph={20} bg="transparent" br={0} mv={10} mh={0}>
    <TextAtom text="Ecare services" c={COLORS.black} f="Poppins" s={SIZES.h3} w="600"/>

     <ViewAtom fd="row" jc="space-between" ai="center" w="100%" pv={0} ph={0} bg={COLORS.white}  br={0} mv={0} mh={0}>
        <ViewAtom fd="column" jc="center" ai="center" w="25%" pv={0} ph={0} bg={COLORS.white}  br={0}  mv={0} mh={0}>
        <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={10} ph={10} bg={COLORS.white}  br={50}  mv={0} mh={0} >
                <Image style={styles.userImg}  source={image_Diagnosis}/>
         </ViewAtom>
         <TextAtom text="Consultation" c={COLORS.gray2} f="Poppins" s={SIZES.body5} w="500"/>
               
        </ViewAtom>


        <ViewAtom fd="column" jc="center" ai="center" w="25%" pv={0} ph={0} bg={COLORS.white}  br={0}  mv={0} mh={0}>
        <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={10} ph={10} bg={COLORS.white}  br={50}  mv={0} mh={0} >
                <Image style={styles.userImg}  source={image_dr2}/>
         </ViewAtom>
         <TextAtom text="Medicine" c={COLORS.gray2} f="Poppins" s={SIZES.body5} w="500"/>
               
        </ViewAtom>


        <ViewAtom fd="column" jc="center" ai="center" w="25%" pv={0} ph={0} bg={COLORS.white}  br={0}  mv={0} mh={0}>
        <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={10} ph={10} bg={COLORS.white}  br={50}  mv={0} mh={0} >
                <Image style={styles.userImg}  source={image_Pharmacist}/>
         </ViewAtom>
         <TextAtom text="Ambulance" c={COLORS.gray2} f="Poppins" s={SIZES.body5} w="500"/>
               
        </ViewAtom>
    
                
     </ViewAtom>
            

     </ViewAtom>
      )
}
export default EcareServices
const styles = StyleSheet.create({
 
       
       userImg: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor:COLORS.white
      },

    
  });