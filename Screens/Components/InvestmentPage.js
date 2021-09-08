import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    StyleSheet, Alert, Text, View, Dimensions,
    TextInput, Modal, ImageBackground,
    TouchableOpacity, Image, ScrollView,
    SafeAreaView, FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { TableView } from "react-native-responsive-table"
import { Table, Row, Rows } from 'react-native-table-component';
import { getinvestmentdatabase } from '../../Backend/apiFile';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class InvestmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min_amount:0,
            modalVisible: false,
            tableHead: ['Transaction ID', 'Investment Name', 'Investment Date', 'Investment Amount,$', 'Ammendment Date', 'Equity'],
            tableData: [
                ['2021MAR214708', 'CREDIT CARD', 'March 21, 2021', '100.0', 'March 21, 2021', 'pending for Annoucment'],
                ['2021MAR214709', 'CREDIT CARD', 'April 22, 2021', '200.0', 'March 20, 2021', 'pending for Annoucment'],
            ],
            data: [],
        }
    }
    async componentDidMount() {
        let data1 = await getinvestmentdatabase()
       await this.setState({
            data: data1.response.results,

        })
        console.log("PAK", data1.response.results[0])
    }

    render() {
        const state = this.state;
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView style={styles.scrollView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignContent: 'space-between',
                                    alignItems: 'flex-end'
                                }}>
                                    <Text style={styles.modalText}>Investment Summary:</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ modalVisible: false });
                                        }}
                                    >
                                        <Entypo name="cross" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    // ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    //secureTextEntry={this.state.secured}
                                    placeholder={'I authorise to PBP to invest on Pioneer Orange Crew PO# 0134 with the amount of $5,000.00. '}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />

                                <Text style={[styles.headertext1]}>Investment Amount, $:</Text>
                                <TextInput
                                    style={[styles.textinput, { height: '10%' }]}
                                    placeholder={'5000$'}
                                    placeholderTextColor={'grey'}
                                    // onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.min_amount}
                                    onChangeText={(text) => {
                                        this.setState({ min_amount: text });
                                    }}
                                />

                                <Text style={styles.textStyle}>MEA is ${this.state.min_amount} </Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        // this.setState({modalVisible:true})
                                    }}
                                    style={styles.buttonModel}>
                                    <LinearGradient
                                        colors={['#1D1D1D', '#3E3E3E']}
                                        start={[1, 1]}
                                        end={[0, 0]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Agree and Invest Today</Text>
                                    </LinearGradient>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => {
                                        //    this.setState({modalVisible:true})
                                    }}
                                    style={styles.buttonModel}>
                                    <LinearGradient
                                        colors={['#1D1D1D', '#3E3E3E']}
                                        start={[1, 1]}
                                        end={[0, 0]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Crypto Currency check out</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <Text style={[styles.textStyle, { fontSize: 14, marginTop: responsiveHeight(1) }]}>A new tab will be opened and redirect you to checkout. All transactions with crypto currency will be confirmed & updated by admin.</Text>
                            </View>
                        </View>
                    </Modal>

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
                            <Text style={{
                                fontWeight: '700', fontSize: 30,
                                marginTop: responsiveHeight(0),
                                marginLeft: responsiveHeight(1),
                                paddingLeft: responsiveHeight(1)
                            }}>Investment Page</Text>
                            <View style={{ width: windowWidth - 90, paddingLeft: responsiveHeight(1) }}>
                                <Text style={{
                                    fontWeight: '400', fontSize: 14,
                                    marginLeft: responsiveHeight(1),

                                }}>
                                    Check all the details before submitting your investment to the market. Bear in mind on the refund policy and costs.</Text>
                                <Text style={{
                                    fontWeight: '400', fontSize: 14,
                                    marginLeft: responsiveHeight(1), marginTop: responsiveHeight(1)

                                }}>
                                    *MEA = Minimum Entry Amount

                                </Text>
                            </View>

                            <View style={{ marginTop: responsiveHeight(3) }}>
                                <LinearGradient
                                    colors={['#FF6B16', '#FFD597']}
                                    start={[1, 1]}
                                    end={[0, 0]}
                                    style={styles.gradientaccount}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',

                                    }} >
                                        <Text style={styles.headertext}>Investment Page</Text>
                                        <Text style={styles.headertext}>Investment Type</Text>
                                    </View>

                                </LinearGradient>
                                <FlatList
                                    data={this.state.data}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    width: "95%", padding: 2.5,

                                                }} >
                                                    <Text style={styles.headertext}>{item['investment name']}</Text>
                                                    <Text style={styles.headertext}>{item['investment class']}</Text>
                                                </View>
                                                <Text style={{
                                                    textAlign: 'left',
                                                    fontSize: 14, fontWeight: '700',
                                                    paddingLeft: responsiveHeight(3), color: '#F78F2A', marginTop: responsiveHeight(-2)
                                                }}>Investment Description</Text>
                                                <Text style={{
                                                    textAlign: 'left',
                                                    fontSize: 14, fontWeight: '500',
                                                    paddingLeft: responsiveHeight(3), marginTop: responsiveHeight(1)
                                                }}>{item['founder']}</Text>
                                                <Text style={{
                                                    textAlign: 'left',
                                                    fontSize: 14, fontWeight: '500',
                                                    paddingLeft: responsiveHeight(3), marginTop: responsiveHeight(1), width: windowWidth / 1.3
                                                }}>{item['investment description']}</Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    paddingLeft: 6,
                                                }} >
                                                    <Text style={[styles.headertext, { color: '#F78F2A', }]}>MEA, $</Text>
                                                    <Text style={styles.headertext}>{item['minimum entry amount']}</Text>
                                                </View>
                                                <Text style={[styles.headertext, {
                                                    paddingRight: responsiveHeight(3),
                                                    padding: 0, textAlign: 'right',
                                                    alignSelf: 'flex-end'
                                                }]}>Max. {item['maximum amount']}</Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this.setState({ 
                                                            modalVisible: true,
                                                            min_amount:item['minimum entry amount'] 
                                                        })
                                                    }}
                                                    style={styles.button}>
                                                    <LinearGradient
                                                        colors={['#FF6B16', '#FFD597']}
                                                        start={[1, 1]}
                                                        end={[0, 0]}
                                                        style={styles.gradient}>
                                                        <Text style={styles.text}>Invest Now</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                                <View style={{
                                                    width: '90%', alignSelf: 'center', height: 2, backgroundColor: '#FF6B16',
                                                    marginBottom: responsiveHeight(2),
                                                    marginTop: responsiveHeight(2)
                                                }}
                                                >

                                                </View>
                                            </>

                                        );
                                    }}
                                    keyExtractor={item => item._id}
                                />



                            </View>

                        </View>

                    </View>




                </ScrollView>




            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 382,
        height: 509,
        margin: 20,
        backgroundColor: '#F29C52',
        borderRadius: 20,
        padding: responsiveHeight(3),
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        padding: responsiveHeight(1),
        fontWeight: '400',
        fontSize: 12,
        //textAlign: 'center',
    },
    modalText: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: '700'
    },


    headertext: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '500',
        padding: responsiveHeight(3)
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
        // height: windowHeight / 1.6,
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
        marginTop: responsiveHeight(-5)

    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '90%',
        borderWidth: 5,
        borderColor: '#F58B56',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: responsiveHeight(2.5),
        borderRadius: responsiveHeight(2),
    },
    scrollView: {
        backgroundColor: 'white'
    },
    headertext1: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(0),

    },
    textinput: {
        height: '25%',
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
        borderRadius: 50,
    },
    button: {
        width: 194,
        height: 47,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(1),


    },
    buttonModel: {
        width: 286,
        height: 43,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(1.5)
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    buttonaccount: {
        flexDirection: 'row',
        width: 100,
        height: 40,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        padding: responsiveHeight(1.5),
        justifyContent: 'space-between'
    },
    textaccount: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'right',
        paddingRight: responsiveHeight(1),
        fontWeight: 'bold',
    },
    gradientaccount: {
        width: '95%',
        height: 40,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: responsiveHeight(1),
    },
    buttonfaq: {
        width: '90%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 50,
        // marginTop: responsiveHeight(8),
        // marginBottom: responsiveHeight(3)
    },
    textfaq: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    cardViewhead: {
        flexDirection: 'row',

        // borderRadius: 50,
    }

});
