/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import { View, Text,Animated, TouchableOpacity } from 'react-native';


const App = () => {

    const value = useState(new Animated.ValueXY({x:0,y:0}))[0]

    const moveBall =() => {

        Animated.timing(value,{
            toValue : {x:100,y:100},
            duration:1000,
            useNativeDriver:false
        }).start();

    }

    return (
        <View>
            <Animated.View>
                <View style={{
                    width:100,
                    height : 100,
                    borderRadius : 100/2,
                    backgroundColor:'red'
                }}>

                </View>
            </Animated.View>
            <TouchableOpacity onPress={() => moveBall()}/>
        </View>
    )
}

export default App;