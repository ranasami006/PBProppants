import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Disclamer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                { key: 'Android' },
                { key: 'iOS' },
                { key: 'Java' },
                { key: 'Swift' },
            ]
        }
    }
    async componentDidMount() {

    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ backgroundColor: 'white' }}>
                        <ImageBackground style={{ width: windowWidth, height: windowHeight / 3 }}
                            source={require('../../assets/BackgroundPbproppant.png')}
                        >
                            <Header
                                statusBarProps={{ barStyle: 'light', backgroundColor: 'transparent' }}
                                barStyle="light-content" // or directly
                                leftComponent={
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.goBack()}
                                        style={styles.buttonaccount}>
                                        <Ionicons name="arrow-back" size={responsiveWidth(5)}
                                            color="white" />
                                        <Text style={styles.textaccount}>Back</Text>
                                    </TouchableOpacity>
                                }
                                rightComponent={
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.openDrawer();
                                        }}>
                                        <Entypo
                                            name={'menu'}
                                            color={'#000'}
                                            size={responsiveWidth(7)}
                                            style={styles.icon}
                                        />
                                    </TouchableOpacity>
                                }
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    justifyContent: 'space-around',
                                    marginTop: responsiveHeight(2),
                                    borderBottomWidth: 0,
                                }}
                            />
                        </ImageBackground>
                        <View style={styles.bottomView}>
                            <Text style={{ marginTop: responsiveHeight(5), fontSize: 30, fontWeight: '700', padding: responsiveHeight(2) }}>
                                Disclaimer
                                </Text>
                            <Text style={{
                                height: '100%',
                                marginTop: responsiveHeight(0),
                                fontSize: 16,
                                fontWeight: '400',
                                padding: responsiveHeight(2),
                            }}>
                                All investments involve risk and the past performance of a security, cryptocurrency,
                                or financial product does not guarantee future results or returns.
                                Keep in mind that while diversification may help spread risk,
                                it does not assure a profit or protect against loss.
                                There is always the potential of losing money when you invest in securities,
                                cryptocurrencies, or other financial products. Investors should consider
                                their investment objectives and risks carefully before investing.
                                </Text>
                        </View>

                    </View>

                    {/* <LinearGradient
                        start={[1, 0]}
                        end={[1, 0]}
                        colors={['#F0B04E', '#F58B56']}
                        style={styles.background}
                    >
                        <View
                            style={styles.uperbackground}>
                        </View>
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            colors={['#F0B04E', '#F58B56']}
                            style={styles.backgroundGr}
                        >
                            <Header
                                statusBarProps={{ barStyle: 'light', backgroundColor: 'transparent' }}
                                barStyle="light-content" // or directly
                                leftComponent={
                                    <TouchableOpacity 
                                    onPress={()=>this.props.navigation.goBack()}
                                    style={styles.buttonaccount}>
                                        <Ionicons name="arrow-back"  size={responsiveWidth(5)}
                                        color="white" />   
                                        <Text style={styles.textaccount}>Back</Text>
                                    </TouchableOpacity>
                                }
                                rightComponent={
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.openDrawer();
                                        }}>
                                        <Entypo
                                            name={'menu'}
                                            color={'#000'}
                                            size={responsiveWidth(7)}
                                            style={styles.icon}
                                        />
                                    </TouchableOpacity>
                                }
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    justifyContent: 'space-around',
                                    marginTop: responsiveHeight(2),
                                    borderBottomWidth: 0,
                                }}
                            />

                            <Image source={require('../../assets/Logo.png')} style={{
                                width: 72,
                                height: 72,
                                alignSelf: 'center',
                            }} />
                        </LinearGradient>

                        <View style={styles.bottomView}>
                                <Text style={{marginTop:responsiveHeight(5),fontSize:30,fontWeight:'700',padding:responsiveHeight(2)}}>
                                Disclaimer
                                </Text>
                               

                        </View>
                        

                    </LinearGradient>
                    <View style={styles.formView}>
                    <Text style={{
                                    height:'100%',
                                    marginTop:responsiveHeight(0),
                                    fontSize:16,
                                    fontWeight:'400',
                                    //padding:responsiveHeight(2),
                                    }}>
                                All investments involve risk and the past performance of a security, cryptocurrency, 
                                or financial product does not guarantee future results or returns. 
                                Keep in mind that while diversification may help spread risk, 
                                it does not assure a profit or protect against loss. 
                                There is always the potential of losing money when you invest in securities, 
                                cryptocurrencies, or other financial products. Investors should consider 
                                their investment objectives and risks carefully before investing.
                                </Text>

                        </View> */}

                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        width: 122,
        height: 222,
        margin: responsiveHeight(1),
        borderRadius: responsiveHeight(5),
    },
    textaccount: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'right',
        //marginHorizontal:responsiveHeight(2)
    },
    buttonaccount: {
        flexDirection: 'row',
        width: 100,
        height: 40,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        padding: responsiveHeight(2),
        justifyContent: 'space-between',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundGr: {
        width: windowWidth,
        height: windowHeight / 3.1,
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: responsiveHeight(19)
    },
    background: {
        width: windowWidth,
        height: windowHeight / 1.6,
    },
    uperbackground: {
        height: windowHeight / 7,
        width: windowWidth / 3,
        backgroundColor: "#fff",
        marginTop: windowWidth / 3.5,
    },
    bottomView: {
        //height: windowHeight,
        marginTop:responsiveHeight(-10),
        width: windowWidth,
    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '95%',
        height: 360,
        //borderWidth: 5,
        // borderColor: '#F58B56',
        alignSelf: 'center',
        marginTop: responsiveHeight(-20),
        backgroundColor: 'white',
        // padding: responsiveHeight(2.5),
        borderRadius: responsiveHeight(2),
    },
    scrollView: {
        backgroundColor: 'white'
    },
    headertext1: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(0),

    },
    textinput: {
        height: '15%',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: responsiveHeight(1),
        borderWidth: 1,
        borderColor: "#C6BEB7",
        paddingLeft: responsiveHeight(2),
        marginTop: responsiveHeight(1.5),
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    button: {
        width: 153,
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(4)

    },
    text: {
        //color: 'white',
        fontSize: 15,
        fontWeight: '700'
    },
    buttonfaq: {
        width: '80%',
        height: 43,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: responsiveHeight(8),
        marginBottom: responsiveHeight(3)
    },
    textfaq: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
    },
    gradientaccount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
});
