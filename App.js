import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

import FormikScreen from './src/screens/FormikScreen';
import MobxScreen from './src/screens/MobxScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        style={styles.scrollStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {/* <FormikScreen /> */}
        <MobxScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%',
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
