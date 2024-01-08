//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListScreens from '../components/ListScreens';

// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#242424'}}>
                Componentes animados
            </Text>
            <Text style={{fontSize: 16, fontWeight: '400', color: 'grey'}}>
                Esta aplicacion recopilo distintos componentes animado utilizando Animated de react native.
            </Text>
            <View style={styles.containerList}>
                <ListScreens />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 20,
        gap: 10
    },
    containerList: {
        flex: 1,
    }
});

//make this component available to the app
export default HomeScreen;
