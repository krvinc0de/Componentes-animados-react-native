//import liraries
import React, { Component, useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, Button } from 'react-native';

const OpacityAndScale = () => {

    //seteo de valores animados por defecto, se deben guardar en referencias
    //para evitar perderse las animaciones en re-renderizados de la pantalla
    const animatedValues = {
        opacity: useRef(new Animated.Value(1)).current,
        scale: useRef(new Animated.Value(1)).current,
        radius: useRef(new Animated.Value(0)).current
    }
    const { opacity, scale, radius } = animatedValues

    const handledAnimated = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000, 
            useNativeDriver: false
        }).start(({finished}) => {
            console.log('animacion terminada: ', finished);
            //asignacion de valor al terminar la animacion principal sin animacion
            //opacity.setValue(1)
            //con animacion debajo 
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }).start()

            Animated.timing(scale, {
                toValue: 2,
                duration: 2000,
                useNativeDriver: false
            }).start()

        })
    }

    const handledScale = () => {
        Animated.timing(scale, {
            toValue: 1.5,
            duration: 500, 
            useNativeDriver: false
        }).start(({finished}) => {
            console.log('animacion terminada: ', finished);
            Animated.timing(radius, {
                toValue: 100,
                duration: 500,
                useNativeDriver: false
            }).start()
        })
    }

    const handleReset = () => {
        //sin animaciones
        opacity.setValue(1)
        radius.setValue(0)
        scale.setValue(1)
    }

    const animatedStyles = {
        opacity: opacity,
        transform: [{
            scale: scale
        }],
        borderRadius: radius
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button onPress={() => handledAnimated()} title='animacion de opacidad y escala'/>
            <Button onPress={() => handledScale()} title='animacion de escala y radio'/>
            <Button onPress={() => handleReset()} title='resetear valores'/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        gap: 50
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'tomato',
    }
});

//make this component available to the app
export default OpacityAndScale;
