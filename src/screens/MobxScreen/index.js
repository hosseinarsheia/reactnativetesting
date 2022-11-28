import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import {
  observable,
  action,
  computed,
  flow,
  makeAutoObservable,
  makeObservable,
} from 'mobx';
import { inject, observer, useLocalObservable } from 'mobx-react';

import { counterStore } from '../../MobxStore';

function index(props) {
  return (
    <View>
      <Text>{counterStore.counter}</Text>

      <Button title="increase" onPress={counterStore.increase} />
      <Button title="decrease" onPress={counterStore.decrease} />
    </View>
  );
}

export default observer(index);
