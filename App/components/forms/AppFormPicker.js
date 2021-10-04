import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from './../AppPicker';

const AppFormPicker = ({
  items,
  name,
  placeholder,
  numberOfColumns,
  width,
  PickerItemComponent,
}) => {
  const {values, errors, touched, setFieldValue} = useFormikContext();
  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
