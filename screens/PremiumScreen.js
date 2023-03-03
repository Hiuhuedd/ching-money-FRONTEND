import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import TextAtom from '../components/Atoms/TextAtom';
import ViewAtom from '../components/Atoms/ViewAtom';
import { Button } from '../components/Atoms/Button';
import { COLORS, SIZES } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import CardAtom from '../components/Atoms/CardAtom';


const PremiumScreen = () => {

  const data = [
      [
        'Free',
        '/forever',
        'Simple',
        'Unlimited budgets',
      'Advanced expense tracking',
      'Customized spending reports',
      'No ads',
      'Exclusive themes'],
      
        ['$8',
        '/month',
        'Standard','Unlimited budgets',  'Advanced expense tracking',  'Customized spending reports',  'No ads',  'Exclusive themes',  'Bill tracking and reminders',  'Investment tracking',] , 
        ['$12',
        '/month',
        'Enthusiastic',
        'Everything in Standard',
          'Automatic categorization',  'Syncing across devices',  'Customer support',  'Financial advice and education',  'Advanced security features']


]
  const onMethodSelected = (method) => {
    navigation.navigate("PremiumScreen")
    };
    const AnimalItem = ({ item }) =>  (
            <CardAtom fd="column" w="100%" jc="flex-start" ai="center" pv={5} ph={5} bg={COLORS.white} br={15} mv={15} mh={0}
            el={3} sh='#525252' 
            >
  <ViewAtom fd="row" jc="center" ai="flex-end" w="100%" pv={0} ph={25} br={0} mv={10} mh={0}>
               <TextAtom text={item[0]} c={COLORS.black} f="Poppins" s={SIZES.largeTitle} w="900"  ta="center"/>

               <TextAtom text={item[1]}c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"  ta="center"/>
</ViewAtom>
               <TextAtom text={item[2]}c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"  ta="center"/>

        {item.slice(3).map((benefit, index) => (

<ViewAtom fd="row" jc="flex-start" ai="flex-start" w="100%" pv={0} ph={25} br={0} mv={10} mh={0} key={index}>
<Feather name="check-circle" size={SIZES.h5}     color={COLORS.black}/>
<TextAtom text={`  ${benefit}`} c={COLORS.black} f="Poppins" s={SIZES.h5} w="500"  ta="center"/>
</ViewAtom>

         
        ))}
      
        </CardAtom>
        );
      ;

  return (
    <ViewAtom fd="column" jc="center" ai="center" w="100%" pv={25} ph={0} br={0} mv={10} mh={0}>
        <ViewAtom  jc="center" ai="center" w="100%" pv={25} ph={25} br={0} mv={0} mh={0} bg={COLORS.primary}>
                    <TextAtom text="Upgrade to Premium" c={COLORS.white} f="Poppins" s={SIZES.h1} w="900"  ta="center"/>
                                   
        </ViewAtom>
        <FlatList
  data={data}
  // horizontal={true}
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}

//   keyExtractor={index}
  renderItem={({item}) => {
    return(
     <ViewAtom fd="column" w="100%" ai="center" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
        <AnimalItem  item={item}  key={item} />
   
        <ViewAtom w="100%"  ai="center" pv={10} ph={0} bg="transparent" br={0} mv={0} mh={0}>
                    <Button text={`Get ${item[2]} Plan`}bg={COLORS.primary} w="50%" borderRadius={7} screen="BookingTwo"  onMethodSelected={onMethodSelected}/>
         </ViewAtom>
 </ViewAtom>
                       
  )}}
/>

     
    </ViewAtom>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    marginBottom: 30,
  },
  benefit: {
    marginVertical: 5,
  },
  benefitText: {
    fontSize: 18,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default PremiumScreen;