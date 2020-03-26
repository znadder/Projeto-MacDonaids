import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

export default class leadersPage extends Component {

    state = {
        users: [
            {
                name: 'Gustavo Fontolan',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxrzpnb9vBUszUOHV3buKsmiePRMjyvc8IPZrMUw-4twHh_6J&s",
                points: 429458,
                pos: 1,
            },

            {
                name: 'Lucas Gonçales',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsfRT8iSkCy4icRcAtUs-6iy1cvIMeyWxDN62qFtbOdRW5tTQAA&s",
                points: 321573,
                pos: 2,
            },

            {
                name: 'Thiago Rossi',
                image: "https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                points: 184958,
                pos: 3,
            },

            {
                name: 'Jonas Brothers',
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                points: 64532,
                pos: 4,
            },

            {
                name: 'Dj Robson Caetano',
                image: "https://paginalixo.com/wp-content/uploads/2019/10/maxresdefault-2-1024x576.jpg",
                points: 62029,
                pos: 5,
            },

            {
                name: 'eu',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpCJB6uE0MkGPcOXraJHzA36Gdn1dH1fkT6_o4hzWoLfouMcwHg&s",
                points: 60890,
                pos: 6,
            },
        ]
    }

    renderItem = ({ item }) => {

        if (item.pos == 1) {
            return (
                <View style={first.perfilBox}>
                    <Image style={styles.userImage}
                        source={{ uri: item.image }} />
                    <TouchableOpacity style={first.points}
                        onPress={() => { console.log('Cliquei, Pontos') }}>
                        <Text style={{ color: '#CE1B29', marginBottom: 1, fontSize: 12, fontWeight: 'bold' }}>{item.pos}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Image style={styles.star}
                        source={require("./../assets/star.png")} />
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 248, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.points} </Text>
                </View>
            )
        }

        else if (item.pos == 2) {
            return (
                <View style={second.perfilBox}>
                    <Image style={styles.userImage}
                        source={{ uri: item.image }} />
                    <TouchableOpacity style={second.points}
                        onPress={() => { console.log('Cliquei, Pontos') }}>
                        <Text style={{ color: '#CE1B29', marginBottom: 1, fontSize: 12, fontWeight: 'bold' }}>{item.pos}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Image style={styles.star}
                        source={require("./../assets/star.png")} />
                    <Text style={{ color: 'white', position: 'absolute', marginLeft: 248, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.points} </Text>
                </View>
            )
        }

        else if (item.pos == 3) {
            return (
                <View style={third.perfilBox}>
                    <Image style={styles.userImage}
                        source={{ uri: item.image }} />
                    <TouchableOpacity style={second.points}
                        onPress={() => { console.log('Cliquei, Pontos') }}>
                        <Text style={{ color: '#CE1B29', marginBottom: 1, fontSize: 12, fontWeight: 'bold' }}>{item.pos}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Image style={styles.star}
                        source={require("./../assets/star.png")} />
                    <Text style={{ color: 'white', position: 'absolute', marginLeft: 248, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.points} </Text>
                </View>
            )
        } else {
            return (
                <View style={styles.perfilBox}>
                    <Image style={styles.userImage}
                        source={{ uri: item.image }} />
                    <TouchableOpacity style={styles.points}
                        onPress={() => { console.log('Cliquei, Pontos') }}>
                        <Text style={{ color: 'white', marginBottom: 1, fontSize: 12, fontWeight: 'bold' }}>{item.pos}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Image style={styles.star}
                        source={require("./../assets/star.png")} />
                    <Text style={{ color: '#c1c1c1', position: 'absolute', marginLeft: 250, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.points} </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{ alignSelf: 'center', marginHorizontal: 117, fontSize: 22, fontWeight: 'bold' }}>Leaderboard</Text>
                    <TouchableOpacity style={styles.prizeButton}
                        onPress={() => { this.props.navigation.push("prizes"); console.log('entrou')}}>
                        <Text style={{ color: '#CE1B29', fontSize: 16, fontWeight: 'bold', marginTop: 30, marginLeft: 305 }}>Prizes</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infos}>

                    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', borderRightColor: '#F1F1F1', borderRightWidth: 1 }}>
                        <Text style={{ color: '#c1c1c1', fontSize: 12, fontWeight: 'bold' }}>Actived players</Text>
                        <Text style={{ color: '#CE1B29', fontSize: 16, fontWeight: 'bold', marginTop: 2 }}>34 289</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', borderRightColor: '#F1F1F1', borderRightWidth: 1 }}>
                        <Text style={{ color: '#c1c1c1', fontSize: 12, fontWeight: 'bold' }}>Total prizes</Text>
                        <Text style={{ color: '#CE1B29', fontSize: 16, fontWeight: 'bold', marginTop: 2 }}>500</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#c1c1c1', fontSize: 12, fontWeight: 'bold' }}>Time left</Text>
                        <Text style={{ color: '#CE1B29', fontSize: 16, fontWeight: 'bold', marginTop: 2 }}>3 m 12 d</Text>
                    </View>

                </View>

                <View style={styles.perfil}>
                    <View style={styles.perfilBox}>
                        <Image style={styles.userImage}
                            source={require("./../assets/picture.jpg")} />
                        <TouchableOpacity style={styles.points}
                            onPress={() => { console.log('Cliquei, Pontos') }}>
                            <Text style={{ color: 'white', marginBottom: 1, fontSize: 12, fontWeight: 'bold' }}>67</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 80, alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}> Arthur Ramos </Text>
                        <Image style={styles.star}
                            source={require("./../assets/star.png")} />
                        <Text style={{ color: '#c1c1c1', position: 'absolute', marginLeft: 280, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> 1627 </Text>
                    </View>

                    <View style={{ flex: 0.01, backgroundColor: '#c1c1c1' }}>
                    </View>

                </View>

                <View style={styles.flatlist}>

                    <FlatList
                        style={styles.flatlistItens}
                        contentContainerStyle={{ paddingBottom: 85 }}
                        data={this.state.users}
                        keyExtractor={item => item.name}
                        renderItem={this.renderItem}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    star: {
        width: 6,
        height: 6,
        alignSelf: 'center',
        marginLeft: 160,
    },

    pointText: {
        color: '#FFB300',
        fontWeight: "bold",
        marginLeft: 1,
        marginTop: 80,
        position: 'absolute',
    },

    points: {
        height: 14,
        width: 32,
        backgroundColor: '#CE1B29',
        marginLeft: 24,
        borderRadius: 40,
        marginTop: 56,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    userImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        margin: 10,
        alignSelf: 'center'
    },

    perfilBox: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        flex: 1,
        borderWidth: 2,
        borderColor: '#F6F7F9',
        borderRadius: 10,
        flexDirection: 'row',
    },

    perfil: {
        flex: 1.6,
        backgroundColor: '#F6F7F9',
    },

    prizeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },

    container: {
        flex: 1,
        backgroundColor: '#F6F7F9',
    },

    header: {
        flex: 0.95,
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
        borderBottomColor: '#F1F1F1',
    },

    flatlistItens: {
        paddingHorizontal: 15,
        backgroundColor: '#F6F7F9'
    },

    flatlist: {
        flex: 6.5,
        backgroundColor: '#F6F7F9'
    },

    infos: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
    }
});

const first = StyleSheet.create({
    points: {
        height: 14,
        width: 32,
        backgroundColor: 'white',
        marginLeft: 24,
        borderRadius: 40,
        marginTop: 56,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    perfilBox: {
        backgroundColor: '#FED057',
        marginHorizontal: 15,
        marginVertical: 10,
        flex: 1,
        borderWidth: 2,
        borderColor: '#FED057',
        borderRadius: 10,
        flexDirection: 'row',
    },
});

const second = StyleSheet.create({
    points: {
        height: 14,
        width: 32,
        backgroundColor: 'white',
        marginLeft: 24,
        borderRadius: 40,
        marginTop: 56,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    perfilBox: {
        backgroundColor: '#CE1B29',
        marginHorizontal: 15,
        marginVertical: 10,
        flex: 1,
        borderWidth: 2,
        borderColor: '#CE1B29',
        borderRadius: 10,
        flexDirection: 'row',
    },
});

const third = StyleSheet.create({
    points: {
        height: 14,
        width: 32,
        backgroundColor: 'white',
        marginLeft: 24,
        borderRadius: 40,
        marginTop: 56,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    perfilBox: {
        backgroundColor: '#2f7a3e',
        marginHorizontal: 15,
        marginVertical: 10,
        flex: 1,
        borderWidth: 2,
        borderColor: '#2f7a3e',
        borderRadius: 10,
        flexDirection: 'row',
    },
})