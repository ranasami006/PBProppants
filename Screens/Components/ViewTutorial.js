import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Dimensions, TextInput,ImageBackground, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ViewTutorial extends Component {
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
        // var that = this;
        // let items = Array.apply(null, Array(60)).map((v, i) => {
        //     return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        // });
        // that.setState({
        //     //Setting the data source
        //     dataSource: items,
        // });
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
                                width: 70,
                                height: 70,
                                alignSelf: 'center',
                            }} />
                        </ImageBackground>
                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/dashboardicon1.png')} style={{
                                width: windowWidth / 2.5,
                                height: windowHeight / 4.5,
                                alignSelf: 'center',
                            }} />
                        </View>
                     <Text style={{ fontWeight: '700', 
                    fontSize: 30, marginTop: responsiveHeight(-2), 
                    marginLeft: responsiveHeight(1) }}>Video Tutorial</Text>
                    <View style={{flex:0,
                        padding:responsiveHeight(3),
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'flex-start',}}>
                    <YoutubePlayer
                         height={250}
                         width={windowWidth/2.5}
                        play={false}
                        videoId={'84WIaK3bl_s'}

                    />
                    <YoutubePlayer
                        height={250}
                        width={windowWidth/2.5}
                        play={false}
                        videoId={'84WIaK3bl_s'}


                    />
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
                            <Image source={require('../../assets/dashboardicon1.png')} style={{
                                width: windowWidth / 2.5,
                                height: windowHeight / 4.5,
                                alignSelf: 'center',
                            }} />
                        </View>

                    </LinearGradient>
                    <Text style={{ fontWeight: '700', 
                    fontSize: 30, marginTop: responsiveHeight(-2), 
                    marginLeft: responsiveHeight(1) }}>Video Tutorial</Text>
                    <View style={{flex:0,
                        padding:responsiveHeight(3),
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'flex-start',}}>
                    <YoutubePlayer
                         height={250}
                         width={windowWidth/2.5}
                        play={false}
                        videoId={'84WIaK3bl_s'}

                    />
                    <YoutubePlayer
                        height={250}
                        width={windowWidth/2.5}
                        play={false}
                        videoId={'84WIaK3bl_s'}

                    />
                    </View> */}
                    
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
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
        height: windowHeight /3.1,
        position: 'absolute',
        top:0,
        borderBottomLeftRadius: responsiveHeight(19)
    },
    background: {
        width: windowWidth,
        //height: windowHeight / 1.6,
    },
    uperbackground: {
        height: windowHeight / 7,
        width:windowWidth/3,
        backgroundColor: "#fff",
        marginTop: windowWidth /3.5,
    },
    bottomView: {
        //height: 250,
        width: windowWidth,
        borderTopRightRadius: responsiveHeight(15),
        marginTop:responsiveHeight(-5)

    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '90%',
        height: 360,
        borderWidth: 5,
        borderColor: '#F58B56',
        alignSelf: 'center',
        // marginTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: responsiveHeight(2.5),
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
    }
});
