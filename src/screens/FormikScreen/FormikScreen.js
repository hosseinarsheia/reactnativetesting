import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik, useFormik } from 'formik';
import { Icon, CheckBox } from '@rneui/themed';
import * as yup from 'yup';

import ss from './ss';

// const validationSchema = yup.object({
//   email: yup.string().nationalCode('test').required(),
//   name: yup.string().required(),
//   check: yup.boolean().oneOf([true], 'check box should selected').required(),
//   mine: false,
// });

const validationSchema = yup.object({
  // email: yup.string().nationalCode('test').required(),
  // name: yup.string().required(),
  // check: yup.boolean().oneOf([true], 'check box should selected').required(),
  mine: yup
    .bool()
    .test('global-ok', 'you do not fulfill the requirements', function (value) {
      return true;
    }),
});

const FormikScreen = props => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', name: '', check: false }}
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
          {console.log('errors', errors)}
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.TextInput}
            placeholder="email"
          />
          {errors.email && touched.email && (
            <Text style={styles.errorMessage}>{errors.email}</Text>
          )}

          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            style={styles.TextInput}
            placeholder="name"
          />
          {errors.name && touched.name && (
            <Text style={styles.errorMessage}>{errors.name}</Text>
          )}

          <CheckBox
            center
            title="Click Here"
            checked={values.check}
            onPress={() => {
              setFieldValue('check', !values.check);
              setFieldTouched('check');
            }}
          />
          {!values.check && touched.check && (
            <Text style={styles.errorMessage}>{errors.check}</Text>
          )}

          <Button onPress={handleSubmit} title="Submit" />
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
