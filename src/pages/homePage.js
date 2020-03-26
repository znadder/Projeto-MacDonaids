import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, CheckBox } from 'react-native';

export default class homePage extends Component {

    state = {
        Gwidth: 0
    }

    componentDidMount() {
        this.setState({ Gwidth: Dimensions.get('window').width })
    }

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

                    <Text style={{ color: '#1f1f1f', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginTop: 10, }}>Arthur Ramos</Text>
                    <Text style={{ color: '#c1c1c1', fontSize: 12, alignSelf: 'center', top: 5 }}>Brasil</Text>
                </View>

                <View style={styles.Graphs}>

                    <Image style={styles.graphImage}
                        source={{ uri: 'https://www.patternfly.org/v3/pattern-library/data-visualization/line-chart/img/line-chart.png' }} />

                    <Text style={{ color: '#1f1f1f', fontSize: 12, fontWeight: 'bold', marginVertical: 20, marginLeft: 50 }}>Your position: </Text>

                    <TouchableOpacity style={user.thisYearGraph}
                        onPress={() => { console.log('Cliquei, Ano') }}>

                    </TouchableOpacity>
                    <Text style={{ color: '#c1c1c1', fontSize: 8, fontWeight: 'bold', bottom: 20, marginLeft: 170, position: 'absolute' }}>This Year</Text>

                    <TouchableOpacity style={user.lastYearGraph}
                        onPress={() => { console.log('Cliquei, Ano') }}>
                    </TouchableOpacity>

                    <Text style={{ color: '#c1c1c1', fontSize: 8, fontWeight: 'bold', bottom: 20, marginLeft: 250, position: 'absolute' }}>Last Year</Text>

                </View>

                <View style={styles.Product1}>

                    <TouchableOpacity style={styles.hamburguer}>
                        <Image style={styles.hambImage}
                            source={{ uri: 'https://laricaria.com/wp-content/uploads/2018/02/hamburguer-maconha-cannaburguer-1300x949.jpg' }} />
                        <Text style={{ color: '#1f1f1f', fontSize: 16, fontWeight: 'bold', marginTop: 24, marginLeft: 10}}> P.L.T</Text>
                        <Text style={{ color: '#c1c1c1', fontSize: 8, marginTop: 30, marginLeft: 180}}> Brasil</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.Product2}>

                <TouchableOpacity style={styles.hamburguer}>
                        <Image style={styles.pieImage}
                            source={require("./../assets/Pie.png")} />
                        <Text style={{ color: '#1f1f1f', fontSize: 16, fontWeight: 'bold', marginTop: 15, marginLeft: 5}}> Tsukumi Pie</Text>
                        <Text style={{ color: '#c1c1c1', fontSize: 8, marginTop: 20, marginLeft: 98}}> Brasil</Text>
                    </TouchableOpacity>

                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    pieImage: {
        width: 90,
        height: 42,
        marginLeft: 4,
        marginVertical: 5
    },

    hambImage: {
        width: 45,
        height: 45,
        marginLeft: 20,
        marginVertical: 10
    },

    graphImage: {
        width: 350,
        height: 170,
        alignSelf: 'center',
        marginTop: 15,
    },

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
        flex: 3.15,
        backgroundColor: '#F6F7F9',
    },

    name: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    Graphs: {
        flex: 4,
        backgroundColor: '#F6F7F9'
    },

    Product1: {
        flex: 1.3,
        backgroundColor: '#F6F7F9',
        justifyContent: 'center',
        alignContent: 'center',
    },

    Product2: {
        flex: 1.11,
        backgroundColor: '#F6F7F9',
        justifyContent: 'center',
        alignContent: 'center',
    },

    hamburguer: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        flex: 1,
        height: 80,
        width: 340,
        flexDirection: 'row',
        shadowColor: "#F6F7F9",
        shadowOffset: {
            width: -10,
            height: -10,
        },
        shadowOpacity: 0.010,
        shadowRadius: 0.65,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#F6F7F9',
        borderRadius: 10,
    },
});

const user = StyleSheet.create({

    lastYearGraph: {
        height: 10,
        width: 10,
        backgroundColor: '#FED057',
        borderRadius: 100,
        bottom: 20,
        position: 'absolute',
        marginLeft: 230
    },

    thisYearGraph: {
        height: 10,
        width: 10,
        backgroundColor: '#CE1B29',
        borderRadius: 100,
        bottom: 20,
        position: 'absolute',
        marginLeft: 150
    },

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
        fontSize: 90,
        color: 'black',
        alignSelf: 'center'
    },
})
