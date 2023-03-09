import moment from 'moment';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker-expo';
import { COLORS, SIZES } from '../../constants/theme';
import TextAtom from '../Atoms/TextAtom';

const MyCalendar = ({ label, index, handleSetDate, }) => {
  const [focused, setFocused] = useState(true);
  const [selectedDate, setselectedDate] = useState(new Date());

  const onFocusChange = () => {
    setFocused(!focused);
  };
const handleSetSelectedDate=(d)=>{
  handleSetDate(d,index)
  setselectedDate(d)
}
  return (
    <View style={styles.container}>
       {/* <TextAtom text={label} c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/> */}
      <DatePicker
        style={styles.datePicker}
        date={moment(new Date()).format('MMMM D, YYYY')}
        mode="date"
        placeholder="Select date"
        format="MMMM D, YYYY"
        minDate={`${moment(new Date()).format('MMMM D, YYYY')}`}
        maxDate="January 2, 2100"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date)=>handleSetSelectedDate(date)}
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth: focused ? 2 : 1,
            borderRadius: 5,
            borderColor: focused ? '#fff' : '#fff',
            alignItems: 'flex-start',
            padding: 0,

          },
          placeholderText: {
            color: '#111',
          },
          dateText: {
            fontSize: 10,
            color:COLORS.primary
          },
        }}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  datePicker: {
    maxWidth:90,
    alignSelf: 'flex-start',
    padding:0,
  
// backgroundColor:"#111"

  },
});

export default MyCalendar;