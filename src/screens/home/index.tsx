
import React from 'react';
import {
  SafeAreaView,
  Button
} from 'react-native';

export default function HomeScreen(props) {
    return (
      <SafeAreaView>
        <Button
          title='Test1'
          onPress={() => {
            props.navigation.navigate('Test1')
          }}
        />
        <Button
          title='ReduxTest'
          onPress={() => {
            props.navigation.navigate('ReduxTest')
          }}
        />
      </SafeAreaView>
    );
}