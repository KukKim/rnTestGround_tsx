
import React from 'react';
import {
  View,
  SafeAreaView,
  Button,
  Text
} from 'react-native';
import { CounterContainer } from '../../containers'
import { increment, decrement } from './testSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxTestScreen() {

    const reduxState = useSelector((state: any) => state.test.value);
    const dispatch = useDispatch();

    return (
      <SafeAreaView>
        <CounterContainer/>
        <View
          style={{
            flexDirection:"row"
          }}
        >
          <Button
            title='<'
            onPress={() => {
              dispatch(decrement())
            }}
          />
          <View>
            <Text>
              {reduxState}
            </Text>
          </View>
          <Button
            title='>'
            onPress={() => {
              dispatch(increment())
            }}
          />
        </View>
      </SafeAreaView>
    );
}