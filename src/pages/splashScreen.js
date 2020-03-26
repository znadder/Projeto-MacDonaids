import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default class splashScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            splashs: [
                require("./../assets/slides/splash1.png"),
                require("./../assets/slides/splash2.png"),
                require("./../assets/slides/splash3.png"),
                require("./../assets/slides/splash4.png")
            ],

            ActiveIndex: 0,
        }
    }

    _onMomentumScrollEnd = e => {
        const offset = e.nativeEvent.contentOffset.x;
        let newIndex = (Math.round(offset / width));

        this.setState({ ActiveIndex: newIndex })
    }

    renderButton = () => {
        return (
            <View style={{
                height: 16,
                margin: 16,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={ styles.btActive }
                    onPress={() => { this.props.navigation.navigate('login') }}>
                </TouchableOpacity>
            </View>

        )
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.splashs}
                    style={{ flex: 1 }}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => {
                        return (
                            <ImageBackground
                                source={item}
                                style={{ height: '100%', width }}
                                resizeMode="cover"
                            />
                        )
                    }}
                />

                {this.state.ActiveIndex == 3 && this.renderButton()}

            </View>
        )
    }
}

const styles = StyleSheet.create({

    btActive: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        position: 'absolute',
    }
})