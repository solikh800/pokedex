import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({name, width, ...otherProps}) => {
  const {errors, touched, setFieldTouched, values, setFieldValue} =
    useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
