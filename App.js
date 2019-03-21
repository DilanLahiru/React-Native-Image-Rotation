/*This is an Example of React Native Rotate Image View Using Animation*/
import React from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
//import react in our project
////import all the components we needed

export default class App extends React.Component {
    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
    }

    componentDidMount() {
        this.StartImageRotateFunction();
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);

        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
        }).start(() => this.StartImageRotateFunction());
    }

    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 200,
                        height: 200,
                        transform: [{rotate: RotateData}],
                    }}
                    source={{
                        uri:
                            'https://aboutreact.com/wp-content/uploads/2018/08/logo1024.png',
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C2C2C2',
    },
});
