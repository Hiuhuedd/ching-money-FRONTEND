import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, View ,TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../constants/theme';
import TextAtom from '../Atoms/TextAtom';
import ViewAtom from '../Atoms/ViewAtom';
import Feather from 'react-native-vector-icons/Feather';


function Stepper({setCurrentStep,currentStep,stepsArray}) {

    const ITEM_HEIGHT=40
    useEffect(() => {

        scrollToActiveItem()
    }, [currentStep])
    
    const handleDate=(d)=>{
     
        setCurrentStep(d-1)
    }
    const flatListRef = useRef(null);
    const scrollToActiveItem = () => {
      if (stepsArray.length > 0 && currentStep !== null) {
        flatListRef.current.scrollToIndex({
          index: currentStep-1,
          animated: true,
          viewPosition: 0.5, // Set viewPosition to 0.5 to center the item
        });
      
       };
    };
    
  return (
    <FlatList
      data={stepsArray}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index
      })}
      onScrollToIndexFailed={() => {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
      }}
      ref={flatListRef}
      onContentSizeChange={() => flatListRef.current.scrollToIndex({ index:  currentStep-1 })}
      renderItem={({item})=> {    
        const step=stepsArray.indexOf(item)+1;
        if (currentStep===step) {
          // scrollToActiveItem() 
            return(
            <TouchableOpacity onPress={()=>{handleDate(step)}}>

                <ViewAtom fd="column" jc="center" ai="center"  pv={5} ph={5} bg={COLORS.gray4} br={30} mv={0} mh={3}>
                <ViewAtom   pv={3} ph={3} bg={COLORS.primary} br={50} mv={0} mh={0}>
                    
                <Feather name="clipboard" size={12}     color={COLORS.gray}/>
                    {/* <TextAtom text={step} c={COLORS.gray} f="Poppins" s={SIZES.body5} w="500"/> */}

                </ViewAtom>
                  <TextAtom text={step} c={COLORS.black} f="Poppins" s={SIZES.body4} w="500"/>
                

                </ViewAtom>
                </TouchableOpacity>
            )
        }else{
            return(
            <TouchableOpacity onPress={()=>{handleDate(step)}}>

            <ViewAtom fd="column" jc="center" ai="center"  pv={5} ph={5} bg={COLORS.gray4} br={30} mv={0} mh={3}>
                <ViewAtom   pv={3} ph={3} bg={COLORS.gray3} br={50} mv={0} mh={0}>
                
                <Feather name="clipboard" size={12}     color={COLORS.primary}/>

                </ViewAtom>
                <TextAtom text={step} c={COLORS.black} f="Poppins" s={SIZES.body5} w="500"/>
             
                

            </ViewAtom>
            </TouchableOpacity>
            
            )

        }
    }
    }
    />
  );
}

export default Stepper;