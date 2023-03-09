import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../constants/theme';
import TextAtom from '../Atoms/TextAtom';
import ViewAtom from '../Atoms/ViewAtom';
import Feather from 'react-native-vector-icons/Feather';


function Goals({setCurrentGoal,currentGoal,GoalsArray}) {

    const ITEM_HEIGHT=Dimensions.get("screen").width-350
    useEffect(() => {
        scrollToActiveItem()
    }, [currentGoal])
    
    const handleDate=(d)=>{
        setCurrentGoal(d)
    }
    const flatListRef = useRef(null);
    const scrollToActiveItem = () => {
      if (GoalsArray.length > 0 && currentGoal !== null) {
        flatListRef.current.scrollToIndex({
          index: currentGoal,
          animated: true,
          viewPosition: -0.5, // Set viewPosition to 0.5 to center the item
        });
      
       };
    };
    
  return (
    <FlatList
      data={GoalsArray}
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
      onContentSizeChange={() => flatListRef.current.scrollToIndex({ index:  currentGoal })}
      renderItem={({item})=> {    
        let step=GoalsArray.indexOf(item);
        if (currentGoal===step) {
            return(
            <TouchableOpacity onPress={()=>{handleDate(step)}}>

                <ViewAtom   pv={8} ph={8} bg={COLORS.primary} br={10} mv={0} mh={0}>

                <TextAtom text={GoalsArray[currentGoal].goalCategory} c={COLORS.white} f="Poppins" s={SIZES.body5} w="500"/>

                </ViewAtom>
           
                </TouchableOpacity>
            )
        }else{
         
            return(
            <TouchableOpacity onPress={()=>{handleDate(step)}}>

            <ViewAtom pv={8} ph={8} bg={COLORS.gray4} br={10} mv={0} mh={3}>
                    <TextAtom text={GoalsArray[step].goalCategory} c={COLORS.black} f="Poppins" s={SIZES.body5} w="500"/>       
            </ViewAtom>
            </TouchableOpacity>
            
            )

        }
    }
    }
    />
  );
}

export default Goals;