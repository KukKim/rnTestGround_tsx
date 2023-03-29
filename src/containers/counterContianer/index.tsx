
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { useSelector } from 'react-redux'

export default function Counter(props) {

    const reduxState = useSelector((state: any) => state.test.value);

    return (
        <View>
            <Text>
                {reduxState}
            </Text>
        </View>
    );
}