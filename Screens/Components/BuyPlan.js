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

export default class BuyPlan extends Component {
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
                                        onPress={() => this.props.navigation.navigate('ViewTutorial')}
                                        style={styles.buttonaccount}>

                                        <Text style={styles.textaccount}>View Toturial</Text>
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
                                width: 70,
                                height: 70,
                                alignSelf: 'center',
                            }} />
                        </ImageBackground>
                        <View style={styles.bottomView}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    flexDirection: 'row',
                                    marginTop: responsiveHeight(0)
                                }}>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#F98904', '#FCD46C']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2)
                                    }}>Gold</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        elevation: 15,
                                        alignContent: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            10% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2),
                                        fontSize: 11
                                    }}>

                                        $1k - $10k
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#9AA7C9', '#5E5F62']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2),
                                    }}>PLATINUM</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        elevation: 15,
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            20% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2), fontSize: 11
                                    }}>

                                        $10,001 up to $20,000
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#07A2CA', '#01F4CA']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2)
                                    }}>DIAMOND</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        elevation: 15,
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            30% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2), fontSize: 11
                                    }}>

                                        $20,001 up to infinity
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                            </ScrollView>

                        </View>
                        <Text style={{ fontWeight: '500', 
                     fontSize: 16, marginTop: responsiveHeight(0), 
                     marginLeft: responsiveHeight(1) }}>Your membership plan:</Text>
                  <Text style={{ fontWeight: '500', 
                     fontSize: 18, 
                     marginLeft: responsiveHeight(1),color:"#F78F2A" }}>GOLD</Text>
                    <View style={{alignSelf:'center',justifyContent:'center',alignContent:'center',width:windowWidth}}>
                   
                    <TouchableOpacity 
                         onPress={() => {
                           // this.props.navigation.navigate('InvestmentPage');
                      }}
                        
                    style={styles.buttonfaq}>
                        
                        <LinearGradient
                            colors={['#FF6B16', '#FFD597']}
                            start={[1, 1]}
                            end={[0, 0]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>Make a request to upgrade your plan</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={() => {
                           this.props.navigation.navigate('Disclamer');
                      }}
                        
                    style={[styles.buttonfaq,{marginTop:responsiveHeight(0)}]}>
                        
                        <LinearGradient
                            colors={['#FF6B16', '#FFD597']}
                            start={[1, 1]}
                            end={[0, 0]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>Disclaimer</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>

                   <Text style={{padding:responsiveHeight(2),fontSize:12,textAlign:'center'}}>
                       
Each investment contract according 
to the pricing plan varies. I.e.  
one of your investments may be Diamond qualified while others 
are below the Diamond level!!! Each purchase order  is price plan specific!
                    </Text> 
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
                                        onPress={() => this.props.navigation.navigate('ViewTutorial')}
                                        style={styles.buttonaccount}>

                                        <Text style={styles.textaccount}>View Toturial</Text>
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
                            <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ flexDirection: 'row', marginTop: responsiveHeight(7) }}>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#F98904', '#FCD46C']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2)
                                    }}>Gold</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        alignContent: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            10% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2),fontSize:11
                                    }}>

                                        $1k - $10k
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#9AA7C9', '#5E5F62']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2),
                                    }}>PLATINUM</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        alignContent: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            20% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2),fontSize:11
                                    }}>

                                        $10,001 up to $20,000
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['#07A2CA', '#01F4CA']}
                                    style={styles.backgroundView}
                                >
                                    <Text style={{
                                        color: 'white', fontWeight: '700',
                                        fontSize: 16, textAlign: 'center',
                                        padding: responsiveWidth(2)
                                    }}>DIAMOND</Text>
                                    <View style={{
                                        width: 107,
                                        height: 52,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: responsiveHeight(5),
                                        borderBottomEndRadius: responsiveHeight(5),
                                        alignContent: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                            30% ROI
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: 'white', textAlign: 'center',
                                        paddingTop: responsiveHeight(2),fontSize:11
                                    }}>

$20,001 up to infinity
                                    </Text>
                                    <View style={{ width: 80, height: 1, backgroundColor: 'white', alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                                    </View>
                                </LinearGradient>
                            </ScrollView>

                        </View>

                    </LinearGradient>
                
                     <Text style={{ fontWeight: '500', 
                     fontSize: 16, marginTop: responsiveHeight(0), 
                     marginLeft: responsiveHeight(1) }}>Your membership plan:</Text>
                  <Text style={{ fontWeight: '500', 
                     fontSize: 18, 
                     marginLeft: responsiveHeight(1),color:"#F78F2A" }}>GOLD</Text>
                    <View style={{alignSelf:'center',justifyContent:'center',alignContent:'center',width:windowWidth}}>
                   
                    <TouchableOpacity 
                         onPress={() => {
                           // this.props.navigation.navigate('InvestmentPage');
                      }}
                        
                    style={styles.buttonfaq}>
                        
                        <LinearGradient
                            colors={['#FF6B16', '#FFD597']}
                            start={[1, 1]}
                            end={[0, 0]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>Make a request to upgrade your plan</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={() => {
                           this.props.navigation.navigate('Disclamer');
                      }}
                        
                    style={[styles.buttonfaq,{marginTop:responsiveHeight(0)}]}>
                        
                        <LinearGradient
                            colors={['#FF6B16', '#FFD597']}
                            start={[1, 1]}
                            end={[0, 0]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>Disclaimer</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>

                   <Text style={{padding:responsiveHeight(2),fontSize:12,textAlign:'center'}}>
                       
Each investment contract according 
to the pricing plan varies. I.e.  
one of your investments may be Diamond qualified while others 
are below the Diamond level!!! Each purchase order  is price plan specific!
                    </Text>  */}
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        width: windowWidth / 3.5,
        height: windowHeight / 4,
        margin: responsiveHeight(1),
        borderRadius: responsiveHeight(3),
    },
    textaccount: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    buttonaccount: {
        width: 145,
        height: 40,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //marginTop: responsiveHeight(3)
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
        //height: windowHeight / 1.6,
    },
    uperbackground: {
        height: windowHeight / 7,
        width: windowWidth / 3,
        backgroundColor: "#fff",
        marginTop: windowWidth / 3.5,
    },
    bottomView: {
        backgroundColor: "transparent",
        width: windowWidth,
        marginTop: responsiveHeight(-2)
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
