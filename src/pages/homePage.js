import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class homePage extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{ alignSelf: 'center', left: 155, fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
                    <TouchableOpacity style={styles.bellButton}
                        onPress={() => { console.log('Cliquei, Sino') }}>
                        <Image style={styles.imageBell}
                            source={require("./../assets/bell.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.ImageProfile}>
                    <Image style={user.userImage}
                        source={require("./../assets/picture.jpg")} />
                    <TouchableOpacity style={user.points}
                        onPress={() => { console.log('Cliquei, Pontos') }}>
                        <Image style={user.star}
                            source={require("./../assets/star.png")} />
                        <Text style={user.pointText}>1627</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.name}>
                    <Text styles={styles.nameText}>Arthur Ramos</Text>
                    <Text styles={user.country}>Brasil</Text>
                </View>

                <View style={styles.Graphs}>

                </View>

                <View style={styles.Product1}>

                </View>

                <View style={styles.Product2}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nameText: {
        color: 'red',
        fontSize: 30,
    },

    bellButton: {
        justifyContent: 'center',
        left: 280,
    },

    imageBell: {
        height: 20,
        width: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#F6F7F9',
    },

    header: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: -20,
            height: -20,
        },
        shadowOpacity: 1.10,
        shadowRadius: 1.65,
        elevation: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D0D0',
    },

    ImageProfile: {
        flex: 3.1,
        backgroundColor: '#F6F7F9',
    },

    name: {
        flex: 1,
        backgroundColor: '#F6F7F9',
        alignItems: 'center',
    },

    Graphs: {
        flex: 4,
        backgroundColor: 'green'
    },

    Product1: {
        flex: 1.3,
        backgroundColor: 'blue'
    },

    Product2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
});

const user = StyleSheet.create({

    userImage: {
        height: 125,
        width: 125,
        borderRadius: 100,
        marginTop: 10,
        alignSelf: 'center'
    },

    points: {
        height: 22,
        width: 80,
        backgroundColor: '#CE1B29',
        alignSelf: 'center',
        borderRadius: 40,
        marginTop: 118,
        position: 'absolute',
    },

    star: {
        width: 8,
        height: 8,
        marginTop: 7,
        marginLeft: 18,
    },

    pointText: {
        color: '#FFB300',
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 1,
        position: 'absolute',
    },

    name: {
        backgroundColor: 'black',
        fontWeight: 'bold',
    },

    country: {
        fontSize: 10,
        color: 'black',
    },
})
