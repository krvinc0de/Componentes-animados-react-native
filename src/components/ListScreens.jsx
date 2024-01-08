//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons'
import { data } from '../data';
import { useNavigation } from '@react-navigation/native';


const Item = ({data}) => {

    const navigation = useNavigation()

    return(
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate(data.route)
        }}>
            <View style={styles.containerItem}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#242424', flex: 1}}>{data.name}</Text>
            <Material name='chevron-right' size={30} color='red'/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const ListScreens = () => {
    return (
        <FlatList 
            data={data}
            renderItem={({item, index}) => <Item key={index} data={item} />}
            contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100}}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    containerItem: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowColor: '#242424',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: .5,
        shadowRadius: 4,
    }
});

//make this component available to the app
export default ListScreens;
