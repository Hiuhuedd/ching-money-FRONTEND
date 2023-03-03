import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker-expo';
import { COLORS, SIZES } from '../../constants/theme';
import TextAtom from '../Atoms/TextAtom';

const MyCalendar = ({ label, date, handleSetDate, }) => {
  const [focused, setFocused] = useState(true);

  const onFocusChange = () => {
    setFocused(!focused);
  };

  return (
    <View style={styles.container}>
       {/* <TextAtom text={label} c={COLORS.primary} f="Poppins" s={SIZES.h5} w="500"/> */}
      <DatePicker
        style={styles.datePicker}
        date={new Date()}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2100-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={handleSetDate}
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
            color: '#CCCCCC',
          },
          dateText: {
            fontSize: 14,
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
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  datePicker: {
    width: '100%',
  },
});

export default MyCalendar;