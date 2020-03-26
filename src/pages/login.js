import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions, TextInput, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';

const { width } = Dimensions.get("window");

export default class login extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <ScrollView style={{ backgroundColor: 'black' }}
                    contentContainerStyle={{ flexGrow: 1 }}>

                    <ImageBackground
                        source={require("../assets/login/background.png")}
                        style={{ height: '100%', width, flex: 1 }}
                        resizeMode="cover"
                    >

                        <KeyboardAvoidingView enabled>

                            <View style={styles.container1}>

                                <Text style={{ color: '#1f1f1f', fontSize: 24, fontWeight: 'bold', alignSelf: 'center', marginTop: 65, position: 'absolute' }}>Sign In</Text>

                                <Text style={{ color: '#1f1f1f', fontSize: 10, fontWeight: 'bold', position: 'absolute', marginLeft: 36, marginTop: 122 }}>Email</Text>

                                <View style={styles.boxInput}>
                                    <Image style={styles.emailIcon}
                                        source={require("./../assets/login/email.png")} />

                                    <TextInput style={styles.input}
                                        underlineColorAndroid="transparent"
                                        placeholder="Enter your Email"
                                        placeholderTextColor="#f1f1f1"
                                        autoCapitalize="none"
                                    />
                                </View>

                                <Text style={{ color: '#1f1f1f', fontSize: 10, fontWeight: 'bold', position: 'absolute', marginLeft: 36, marginTop: 214 }}>Password</Text>

                                <View style={styles.boxInput2}>

                                    <Image style={styles.keyIcon}
                                        source={require("./../assets/login/key.png")} />

                                    <TextInput style={styles.input}
                                        underlineColorAndroid="transparent"
                                        placeholder="Enter your Password"
                                        placeholderTextColor="#f1f1f1"
                                        autoCapitalize="none"

                                    />

                                </View>


                                <TouchableOpacity style={{ position: 'absolute', right: 32, marginTop: 290 }}
                                    onPress={() => { alert('Ala kk, perdeu a senha!') }}>
                                    <Text style={{ color: '#1f1f1f', fontSize: 12, fontWeight: 'bold' }}>Forgot Password?</Text>
                                </TouchableOpacity>

                                <View style={{ position: 'absolute', marginTop: 295, marginLeft: 20 }}>
                                    <CheckBox
                                        checkedIcon={<Image style={{ height: 16, width: 16, borderRadius: 4 }} source={require('./../assets/login/cheked.png')} />}
                                        uncheckedIcon={<Image style={{ height: 16, width: 16, borderRadius: 4 }} source={require('./../assets/login/option.png')} />}
                                        checked={this.state.checked}
                                        onPress={() => this.setState({ checked: !this.state.checked })}
                                    />

                                </View>

                                <Text style={{ color: '#1f1f1f', fontSize: 10, fontWeight: 'bold', marginTop: 31, marginLeft: 31 }}>Remember Me</Text>
                            </View>

                            <View style={styles.container2}>

                                <TouchableOpacity style={styles.buttonLogin}
                                    onPress={() => { this.props.navigation.navigate('bottomRoutes') }}>
                                    <Text style={{ color: '#CE1B29', fontSize: 15 }}>LOGIN</Text>
                                </TouchableOpacity>

                                <Text style={{ color: '#1f1f1f', fontSize: 12, alignSelf: 'center', marginTop: 20 }}>- OR -</Text>

                                <Text style={{ color: '#1f1f1f', fontSize: 10, alignSelf: 'center', marginTop: 24 }}>Sign in with</Text>

                                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                                    <TouchableOpacity style={{ marginRight: 20 }}
                                        onPress={() => { alert('Então quer logar com facebook?') }}>
                                        <Image style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={require('./../assets/login/face.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => { alert('Então quer logar com Google?') }}>
                                        <Image style={{ height: 50, width: 50, borderRadius: 50 }}
                                            source={require('./../assets/login/google.png')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                                    <Text style={{ color: '#1f1f1f', fontSize: 12, alignSelf: 'center' }}>Don't have an Account? </Text>
                                    <TouchableOpacity
                                        onPress={() => { alert('Então ainda não tem conta é?') }}>
                                        <Text style={{ color: 'black', fontSize: 14, alignSelf: 'center', fontWeight: 'bold' }}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </KeyboardAvoidingView>
                    </ImageBackground>
                </ScrollView >
            </View >
        )
    }
}
const styles = StyleSheet.create({

    google: {
        height: 40,
        width: 40,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderWidth: 0.2,
        shadowColor: '#5296e7',
        borderColor: '#5296e7',
    },

    face: {
        height: 40,
        width: 40,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderWidth: 0.2,
        shadowColor: '#5296e7',
        borderColor: '#5296e7',
    },

    buttonLogin: {
        height: 40,
        width: 300,
        backgroundColor: '#f7f7f7',
        marginTop: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxMarker: {
        height: 15,
        width: 15,
        borderRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderWidth: 0.2,
        shadowColor: '#5296e7',
        borderColor: '#5296e7',
    },

    boxInput: {
        height: 50,
        width: 300,
        backgroundColor: '#dfdfdf',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 140,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 0.2,
        shadowColor: '#dfdfdf',
        borderColor: '#dfdfdf',
    },

    boxInput2: {
        height: 50,
        width: 300,
        backgroundColor: '#dfdfdf',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 40,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 0.2,
        shadowColor: '#dfdfdf',
        borderColor: '#dfdfdf',
    },

    container1: {
        backgroundColor: 'transparent',
        flexGrow: 1,
        // justifyContent: 'center',
        paddingHorizontal: 30,
        paddingBottom: 26,
    },

    container2: {
        backgroundColor: 'transparent',
        flexGrow: 1,
        // justifyContent: 'center',
        paddingHorizontal: 30,
    },

    emailIcon: {
        width: 19,
        height: 15,
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 15
    },

    keyIcon: {
        width: 19,
        height: 18,
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 15
    },

})
