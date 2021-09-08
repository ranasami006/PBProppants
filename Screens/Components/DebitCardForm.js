import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Dimensions,
    ImageBackground, TextInput,
    TouchableOpacity, Image,
    ScrollView, SafeAreaView, ToastAndroid
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import { TableView } from "react-native-responsive-table"
import { Table, Row, Rows } from 'react-native-table-component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { card_application } from '../../Backend/apiFile'
export default class DebitCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    async componentDidMount() {

    }

    async ValidationFn() {
        this.setState({ loader: true, ErrorMessege: '' });
        let TempCheck = await this.CheckValidateFn();

        switch (TempCheck) {
            case 0:
                this.submitData();
                break;
            case 1:
                this.setState({ loader: false });
                // alert(this.state.ErrorMessege);
                break;
            default:
                break;
        }
    }
    async CheckValidateFn() {

        //EmailCheck
        let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg2.test(this.state.email) === false) {
            console.log('Email is Not Correct');
            this.state.email !== undefined && this.state.email !== ''
                ? this.setState({ ErrorMessege: 'Please enter proper Email Id' })
                : this.setState({ ErrorMessege: 'Email cannot be empty' });
            // this.setState({ email: text })
            return 1;
        }

        let namelength = this.state.name.length
        if (namelength < 3) {
            this.state.password === ''
                ? this.setState({ ErrorMessege: 'name cannot not be empty' })
                : this.setState({
                    ErrorMessege: 'name should be atleast 3 characters!',
                });
            return 1;
        }

        return 0;
    }

    async submitData() {
        let response = await card_application(this.state.name,
            this.state.email,
            this.state.address)

            if(response.status == "success") {
                ToastAndroid.show
                ( 'Data is uploaded successfully',
                 ToastAndroid.SHORT);
            }
            else{
                ToastAndroid.show
                (response.body.message,
                 ToastAndroid.SHORT);
            }   
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
                                alignSelf: 'center', marginTop: responsiveHeight(-6)
                            }} />
                            <Text style={{ fontWeight: '700', fontSize: 30, marginTop: responsiveHeight(-4), marginLeft: responsiveHeight(1) }}>Hi,</Text>
                            <View style={styles.formView}>
                                <Text style={{
                                    fontWeight: 'bold', fontSize: 18,
                                    textAlign: 'center',
                                    marginTop: responsiveHeight(0)
                                }}>Fill out the form to start your application</Text>
 <Text style={{textAlign:'center',color:'red'}}>{this.state.ErrorMessege}</Text>
                                <View style={[styles.basicView, { marginTop: responsiveHeight(2) }]}>
                                    <Text style={styles.headertext1}>Your Name:</Text>
                                    <TextInput
                                        style={styles.textinput}
                                        placeholder={'Name'}
                                        placeholderTextColor={'grey'}
                                        onSubmitEditing={() => this._password.focus()}
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        value={this.state.name}
                                        onChangeText={(text) => {
                                            this.setState({ name: text });
                                        }}
                                    />
                                </View>
                                <View style={[styles.basicView, { marginTop: responsiveHeight(2) }]}>
                                    <Text style={styles.headertext1}>Your Email:</Text>
                                    <TextInput
                                        style={styles.textinput}
                                        placeholder={'Email'}
                                        placeholderTextColor={'grey'}
                                        onSubmitEditing={() => this._password.focus()}
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        value={this.state.email}
                                        onChangeText={(text) => {
                                            this.setState({ email: text });
                                        }}
                                    />
                                </View>

                                <View style={[styles.basicView, { marginTop: responsiveHeight(7) }]}>
                                    <Text style={styles.headertext1}>Address for card delivery:</Text>
                                    <TextInput
                                        style={[styles.textinput, { height: '300%', }]}
                                        placeholder={'Address for card delivery'}
                                        placeholderTextColor={'grey'}
                                        onSubmitEditing={() => this._password.focus()}
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        value={this.state.address}
                                        onChangeText={(text) => {
                                            this.setState({ address: text });
                                        }}
                                    />
                                </View>
                               
                                <TouchableOpacity
                                    onPress={() =>
                                        this.ValidationFn()
                                    }
                                    style={styles.button}>
                                    <LinearGradient
                                        colors={['#99D3FF', '#99D3FF']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Submit</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>


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
                                alignSelf: 'center', 
                                marginTop: Constants.statusBarHeight
                            }} />
                            <Text style={{ fontWeight: '700', fontSize: 30, 
                            marginTop: responsiveHeight(-5), marginLeft: responsiveHeight(1) }}>Hi,</Text>
                            <View style={styles.formView}>
                        <Text style={{
                            fontWeight: 'bold', fontSize: 18,
                            textAlign: 'center',
                            marginTop: responsiveHeight(0)
                        }}>Fill out the form to start your application</Text>

                        <View style={[styles.basicView, { marginTop: responsiveHeight(2) }]}>
                            <Text style={styles.headertext1}>Your Name:</Text>
                            <TextInput
                                style={styles.textinput}
                                placeholder={'Name'}
                                placeholderTextColor={'grey'}
                                onSubmitEditing={() => this._password.focus()}
                                returnKeyType="next"
                                returnKeyLabel="next"
                                value={this.state.email}
                                onChangeText={(text) => {
                                    this.setState({ email: text });
                                }}
                            />
                        </View>
                        <View style={[styles.basicView, { marginTop: responsiveHeight(2) }]}>
                            <Text style={styles.headertext1}>Your Email:</Text>
                            <TextInput
                                style={styles.textinput}
                                placeholder={'Email'}
                                placeholderTextColor={'grey'}
                                onSubmitEditing={() => this._password.focus()}
                                returnKeyType="next"
                                returnKeyLabel="next"
                                value={this.state.email}
                                onChangeText={(text) => {
                                    this.setState({ email: text });
                                }}
                            />
                        </View>
                      
                        <View style={[styles.basicView, { marginTop: responsiveHeight(7) }]}>
                            <Text style={styles.headertext1}>Address for card delivery:</Text>
                            <TextInput
                                style={[styles.textinput,{height: '300%',}]}
                                placeholder={'Address for card delivery'}
                                placeholderTextColor={'grey'}
                                onSubmitEditing={() => this._password.focus()}
                                returnKeyType="next"
                                returnKeyLabel="next"
                                value={this.state.email}
                                onChangeText={(text) => {
                                    this.setState({ email: text });
                                }}
                            />
                        </View>
      
                        <TouchableOpacity style={styles.button}>
                            <LinearGradient
                                colors={['#99D3FF', '#99D3FF']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.gradient}>
                                <Text style={styles.text}>Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                        </View>

                    </LinearGradient> */}


                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    headbackground: {
        height: 46, width: 959,
    },
    head: { height: 46, width: 959, },
    texttableHead: { textAlign: 'center', fontSize: 16, fontWeight: '400' },
    texttable: {
        marginTop: responsiveHeight(2),
        textAlign: 'center', padding: responsiveHeight(3),
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
        // height: windowHeight / 1.6,
    },
    uperbackground: {
        height: windowHeight / 7,
        width: windowWidth / 3,
        backgroundColor: "#fff",
        marginTop: windowWidth / 3.5,
    },
    bottomView: {
        //height: 250,
        // position: 'absolute',
        // bottom: 0,
        // top:0,
        backgroundColor: "#fff",
        width: windowWidth,
        borderTopRightRadius: responsiveHeight(15),
        //marginBottom:responsiveHeight(12),

    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '90%',
        //height: 340,
        alignSelf: 'center',
        marginTop: responsiveHeight(2.5),
        backgroundColor: 'white',
        padding: responsiveHeight(2.5),
        borderRadius: responsiveHeight(2),
        elevation: 5,
        marginBottom: responsiveHeight(2),
    },
    basicView: {
        flexDirection: 'row',
        height: 34,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',

    },
    scrollView: {
        backgroundColor: 'white'
    },
    headertext1: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: responsiveHeight(0),
        textAlign: 'center',
        width: '30%'
    },
    textinput: {
        height: '100%',
        backgroundColor: 'white',
        width: '70%',
        borderRadius: responsiveHeight(1),
        borderWidth: 1,
        borderColor: "#C6BEB7",
        paddingLeft: responsiveHeight(2),
        //marginTop: responsiveHeight(1.5),
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    button: {
        width: '70%',
        height: 31,
        alignSelf: 'flex-end',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(8),
    },
    text: {
        color: '#A0A0A0',
        fontSize: 15,
        fontWeight: '700',
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
        marginTop: responsiveHeight(8),
        marginBottom: responsiveHeight(3)
    },
    textfaq: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },

});
