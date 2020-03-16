import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class leadersPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: 50, fontSize: 25 }}>Leaders Page!</Text>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});