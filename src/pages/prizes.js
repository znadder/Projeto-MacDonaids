import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

export default class prizes extends Component {

    state = {
        products: [
            {
                name: 'iMac Pro',
                image: "https://http2.mlstatic.com/imac-pro-tela-retina-5k-mq2y2-intel-core-8-32ghz-32gb-nfe-D_NQ_NP_767032-MLB31709242533_082019-F.jpg",
                pos: '2 place',
            },
            {
                name: 'MacBook Pro 15',
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=892&hei=820&&qlt=80&.v=1529520060550",
                pos: '3 place',
            },
            {
                name: 'iPhone 11 Pro',
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-silver-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566953858420",
                pos: '4 to 10 place',
            },
            {
                name: 'Galaxy S20',
                image: "https://images.samsung.com/is/image/samsung/br/galaxy-s20/gallery/br-galaxy-s20-sm-g980-sm-g980flbjzto-frontcloudblue-208947373?$PD_GALLERY_PNG$",
                pos: '10 to 20 place',
            },
            {
                name: 'Notebook',
                image: "https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/LearnSegment/alienware/assets/en/PublishingImages/Alienware-images/alienware-laptop-category-premigration-day01_Module-1.jpg",
                pos: '20 to 30 place',
            },
            {
                name: 'Beats Pro',
                image: "https://img.olx.com.br/images/37/371921006457654.jpg",
                pos: '30 to 50 place',
            },
            {
                name: 'Mouse Gamer',
                image: "https://cdn.pichau.com.br/catalog/product/cache/a8a821144233824f257ff007174b65b4/m/7/m7102232.jpg",
                pos: '50 to 70 place',
            },
            {
                name: 'Gift Cards',
                image: "https://www.mygiftcardsupply.com/wp-content/uploads/2017/12/itunes-gift-card-pile-800x600.png",
                pos: '70 to 99 place',
            },
        ]
    }

    renderItem = ({ item }) => {

        if (item.pos === '2 place') {
            return (
                <View style={product.perfilBox}>
                    <Image style={product.imageProduct}
                        source={{ uri: item.image }} />
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Text style={{ color: '#CE1B29', position: 'absolute', marginLeft: 270, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.pos} </Text>
                </View>
            )
        } else if (item.pos === '3 place') {
            return (
                <View style={product.perfilBox}>
                    <Image style={product.imageProduct}
                        source={{ uri: item.image }} />
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Text style={{ color: '#2f7a3e', position: 'absolute', marginLeft: 270, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.pos} </Text>
                </View>
            )

        } else {

            return (
                <View style={product.perfilBox}>
                    <Image style={product.imageProduct}
                        source={{ uri: item.image }} />
                    <Text style={{ color: '#1f1f1f', position: 'absolute', marginLeft: 76, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}> {item.name} </Text>
                    <Text style={{ color: '#c1c1c1', position: 'absolute', marginLeft: 240, alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}> {item.pos} </Text>
                </View>
            )
        }
    }

        render() {
            return (
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}>
                            <Image style={styles.arrow}
                                source={require("./../assets/arrowleft.png")} />
                        </TouchableOpacity>

                        <Text style={{ color: 'black', fontSize: 18, position: 'absolute', fontWeight: '700' }}>Prizes</Text>
                    </View>

                    <View style={styles.mainPrize}>
                        <Text style={{ color: '#1f1f1f', fontSize: 22, fontWeight: 'bold', marginTop: 5 }}>Main Prize</Text>
                        <Text style={{ color: '#fed057', fontSize: 14, marginTop: 6, fontWeight: 'bold' }}>For 1st place</Text>
                        <Image style={styles.car}
                            source={require("./../assets/car/car.png")} />
                        <Text style={{ color: '#c1c1c1', fontSize: 10, fontWeight: 'bold' }}>BMW Series 7 Sedan</Text>
                    </View>

                    <View style={styles.getRewards}>
                        <Text style={{ color: '#c1c1c1', fontSize: 14, fontWeight: 'bold', marginLeft: 10, }}>Other rewards</Text>
                    </View>

                    <View style={styles.rewards}>
                        <FlatList
                            style={styles.flatlistItens}
                            contentContainerStyle={{ paddingBottom: 1 }}
                            data={this.state.products}
                            keyExtractor={item => item.name}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({

        flatlistItens: {
            paddingHorizontal: 15,
            backgroundColor: '#F6F7F9'
        },

        car: {
            width: 300,
            height: 160,
        },

        arrow: {
            width: 20,
            height: 20,
            marginRight: 330,
        },

        header: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
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

        mainPrize: {
            flex: 4.2,
            backgroundColor: '#F6F7F9',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderBottomWidth: 1,
            borderBottomColor: "#EEEEEE"
        },

        getRewards: {
            flex: 0.8,
            backgroundColor: '#F6F7F9',
            justifyContent: 'center'
        },

        rewards: {
            flex: 5.4,
            backgroundColor: 'yellow',
        },
    });

    const product = StyleSheet.create({
        perfilBox: {
            backgroundColor: 'white',
            marginHorizontal: 0,
            marginBottom: 5,
            flex: 1,
            borderRadius: 10,
            flexDirection: 'row',
        },

        imageProduct: {
            width: 60,
            height: 60,
            margin: 5
        }
    })