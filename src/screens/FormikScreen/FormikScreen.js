import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik, useFormik } from 'formik';
import { Icon } from '@rneui/themed';

const FormikScreen = props => {
  return (
    <Formik
      validateOnBlur
      initialValues={{ email: '', name: '', isOn: false }}
      onSubmit={(values, helpers) => {
        console.log('values', values);
        console.log('helpers', helpers);
        helpers.resetForm();
      }}>
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
        <View style={{ width: '90%' }}>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.TextInput}
          />
          {errors.email && <Text>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            style={styles.TextInput}
          />
          <Button onPress={handleSubmit} title="Submit" />

          <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

          <Text>{values.isOn ? 'On' : 'Off'}</Text>
          <Button
            title="setFieldValue "
            onPress={() => {
              setFieldValue('isOn', !values.isOn);
            }}
          />
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
});
