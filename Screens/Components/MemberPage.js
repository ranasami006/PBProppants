import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ImageBackground, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import { TableView } from "react-native-responsive-table"
import { Table, Row, Rows } from 'react-native-table-component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Transaction ID', 'Investment Name', 'Investment Date', 'Investment Amount,$', 'Ammendment Date', 'Equity'],
            tableData: [
                ['2021MAR214708', 'CREDIT CARD', 'March 21, 2021', '100.0', 'March 21, 2021', 'pending for Annoucment'],
                ['2021MAR214709', 'CREDIT CARD', 'April 22, 2021', '200.0', 'March 20, 2021', 'pending for Annoucment'],
            ]
        }
    }
    async componentDidMount() {

    }

    render() {
        const state = this.state;
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
                        </ImageBackground>
                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/dashboardicon1.png')} style={{
                                width: windowWidth / 2.5,
                                height: windowHeight / 4.8,
                                alignSelf: 'center', marginTop:responsiveHeight(-6)
                            }} />
                            <Text style={{ fontWeight: '700', fontSize: 30, marginTop: responsiveHeight(-4), marginLeft: responsiveHeight(1) }}>Hi,</Text>
                            <View style={{ width: windowWidth / 1.5 }}>
                                <Text style={{
                                    fontWeight: '400', fontSize: 14,
                                    marginLeft: responsiveHeight(1),

                                }}>How was your day? Your investment performance look great today. Why not invest more to earn more from the market?</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('InvestmentPage');
                                }}

                                style={styles.buttonfaq}>

                                <LinearGradient
                                    colors={['#000000', '#CACACA']}
                                    start={[1, 1]}
                                    end={[0, 0]}
                                    style={styles.gradientaccount}>
                                    <Text style={styles.textfaq}>Invest More</Text>
                                </LinearGradient>
                            </TouchableOpacity>


                            <ScrollView
                                style={{
                                    width: windowWidth - 20,
                                    alignSelf: 'center',
                                    marginBottom: responsiveHeight(5)
                                }}
                                horizontal={true}>


                                <Table
                                >
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[1, 0]}
                                        colors={['#F0B04E', '#F58B56']}
                                        style={styles.headbackground}
                                    >
                                        <Row data={state.tableHead} style={styles.head} textStyle={styles.texttableHead} />
                                    </LinearGradient>
                                    <Rows data={state.tableData} textStyle={styles.texttable} style={styles.bodytable} />
                                </Table>

                            </ScrollView>
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
                        </LinearGradient>

                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/dashboardicon1.png')} style={{
                                 width: windowWidth / 2.5,
                                 height: windowHeight / 4.8,
                                alignSelf: 'center', marginTop: Constants.statusBarHeight
                            }} />
                            <Text style={{ fontWeight: '700', fontSize: 30, marginTop: responsiveHeight(-4), marginLeft: responsiveHeight(1) }}>Hi,</Text>
                            <View style={{ width: windowWidth / 1.5 }}>
                                <Text style={{
                                    fontWeight: '400', fontSize: 14,
                                    marginLeft: responsiveHeight(1),

                                }}>How was your day? Your investment performance look great today. Why not invest more to earn more from the market?</Text>
                            </View>
                            <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('InvestmentPage');
                        }}

                        style={styles.buttonfaq}>

                        <LinearGradient
                            colors={['#000000', '#CACACA']}
                            start={[1, 1]}
                            end={[0, 0]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>Invest More</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <ScrollView
                        style={{ width: windowWidth - 20, 
                            alignSelf: 'center', 
                            marginBottom: responsiveHeight(5) }}
                        horizontal={true}>


                        <Table
                        >
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 0]}
                                colors={['#F0B04E', '#F58B56']}
                                style={styles.headbackground}
                            >
                                <Row data={state.tableHead} style={styles.head} textStyle={styles.texttableHead} />
                            </LinearGradient>
                            <Rows data={state.tableData} textStyle={styles.texttable} style={styles.bodytable}/>
                        </Table>

                    </ScrollView>
                        </View>

                    </LinearGradient>
 */}


                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    headbackground: {
        height: 70, width: 1050,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    bodytable: {
        width: 1050,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    texttableHead:
        { textAlign: 'center', fontSize: 16, fontWeight: '400' },
    texttable: {

        marginTop: responsiveHeight(2),
        textAlign: 'center', paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(3),
        borderBottomWidth: 2, borderBottomColor: '#F0B04E'
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
      
        backgroundColor: "#fff",
        width: windowWidth,
        

    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '90%',
        height: 306,
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
        borderRadius: 8,
    },
    button: {
        width: 131,
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(6)

    },
    text: {
        //color: 'white',
        fontSize: 15,
        fontWeight: '700'
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
    textaccount: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    gradientaccount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    buttonfaq: {
        width: '90%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(3)
    },
    textfaq: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },

});
