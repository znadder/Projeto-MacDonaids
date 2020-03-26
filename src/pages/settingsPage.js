import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

export default class settingsPage extends Component {

    state = {

    }

    getPageOption = (option) => {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
                </View>
                <View style={styles.options}>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 65, width: 340, backgroundColor: 'white', borderRadius: 20, marginVertical: 6 }}
                        onPress={() => { alert(`This function is in development!`) }}>
                        <Text style={styles.textOption}>Notifications</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-18-512.png' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.getPageOption('Change access password') }}>
                        <Text style={styles.textOption}>Change access password</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://www.pinclipart.com/picdir/middle/130-1303682_security-password-2-icon-password-icon-in-png.png' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.getPageOption('Linked accounts') }}>
                        <Text style={styles.textOption}>Linked accounts</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/web-and-internet-icons/512/Link-512.png' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.getPageOption('about') }}>
                        <Text style={styles.textOption}>About</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://i.pinimg.com/474x/53/fa/bf/53fabf5ac9ed557319a2a0fa5ae535d8.jpg' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.getPageOption('help') }}>
                        <Text style={styles.textOption}>Help</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61671.png' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.getPageOption('termns') }}>
                        <Text style={styles.textOption}>Terms of use</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://img.pngio.com/contract-png-term-of-use-icon-418725-free-cliparts-on-clipartwiki-term-png-920_960.png' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { alert(`No, you can't do that. You don't have permission.`) }}>
                        <Text style={styles.textOption}>Delete account</Text>
                        <Image style={styles.imageIcon}
                            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-11-512.png' }} />
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    imageIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },

    textOption: {
        color: '#1f1f1f',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 18
    },

    header: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    options: {
        flex: 9.2,
        backgroundColor: '#F6F7F9'
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 65, width: 340,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 6
    },
});