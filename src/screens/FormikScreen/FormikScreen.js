import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

const FormikScreen = props => {
  return (
    <Formik
      initialValues={{ email: '', name: '', isOn: false }}
      onSubmit={(values, helpers) => {
        console.log('values', values);
        console.log('helpers', helpers);
        helpers.resetForm();
      }}>
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View style={{ width: '90%' }}>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.TextInput}
          />
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            style={styles.TextInput}
          />
          <Button onPress={handleSubmit} title="Submit" />

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
