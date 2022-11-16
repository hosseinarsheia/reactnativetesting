import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik, useFormik } from 'formik';
import { Icon, CheckBox } from '@rneui/themed';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().required(),
  name: yup.string().required(),
  isOn: yup.string().required(),
  check: yup.boolean().oneOf([true], 'sss').required(),
});

const FormikScreen = props => {
  return (
    <Formik
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange={false}
      initialValues={{ email: '', name: '', isOn: false, check: false }}
      onSubmit={(values, helpers) => {
        console.log('values', values);

        // helpers.resetForm();
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <View style={{ width: '90%' }}>
          {console.log(' errors.check ', errors.check)}
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.TextInput}
            placeholder="email"
          />
          {errors.email && <Text>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            style={styles.TextInput}
            placeholder="name"
          />
          <Text>{values.isOn ? 'On' : 'Off'}</Text>

          <CheckBox
            center
            title="Click Here"
            checked={values.check}
            onPress={() => {
              setFieldValue('check', !values.check);
              setFieldTouched('check');
            }}
          />

          <Text>{errors.check}</Text>

          <Button onPress={handleSubmit} title="Submit" />

          {/* <Button
            title="setFieldValue "
            onPress={() => {
              setFieldValue('isOn', !values.isOn);
            }}
          /> */}
        </View>
      )}
    </Formik>
  );
};

export default FormikScreen;

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    marginVertical: 20,
  },

  errorMessage: {
    color: 'red',
  },
});
