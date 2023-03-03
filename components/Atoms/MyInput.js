import React, { useRef, useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import { COLORS } from '../../constants/theme';

const MyInput = ({editable, keyboardType, secureTextEntry, style, placeholder,maxLength,setisUpdated,index}) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  }, [editable]);


  const handleChange = (value) => {
           setText(value);
        setisUpdated(index,value);  
  };


  return (
    <TextInput 
      ref={inputRef}
      autoFocus={editable}
      value={text}
      onChangeText={handleChange}
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray2}
      keyboardType={keyboardType}
      textContentType="none"
      secureTextEntry={secureTextEntry}
      autoCompleteType="off"
      autoCapitalize="none"
      maxLength={maxLength}
      editable={editable}
      style={style}
    />
  );
};

export default MyInput;