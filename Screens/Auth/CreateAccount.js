import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Dimensions, ImageBackground, ActivityIndicator,
    TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { signUp } from '../../Backend/apiFile'
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            ErrorMessege: '',
            password:'',
        }
    }

    async componentDidMount() {

    }
    async ValidationFn() {
        this.setState({ loader: true, ErrorMessege: '' });
        let TempCheck = await this.CheckValidateFn();

        switch (TempCheck) {
            case 0:
                this.signupuser();
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

 let passwordlength  =this.state.password.length     
        if (passwordlength<6) {
            this.state.password === ''
                ? this.setState({ ErrorMessege: 'Password cannot not be empty' })
                : this.setState({
                        ErrorMessege: 'Password should be atleast 6 characters!',
                    });
            return 1;
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                ErrorMessege: 'Password not match!',
            });
            return 1;
        }

        return 0;
    }

    async signupuser() {
        await this.setState({ success: true })
        let data = await signUp(this.state.email, this.state.password, this.state.confirmPassword)
        if (data.response) {
            console.log(data)
            alert('Thank you for your registration! Your account is now ready to use.');
            this.props.navigation.navigate('Login');
        }
        else {
            console.log("Else data ", data.message)
            this.setState({
                ErrorMessege:data.message,
                success: false,
            })
        }

        await this.setState({
            //data:data.response.results,
            success: false,
        })

    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ backgroundColor: 'white' }}>
                        <ImageBackground style={{ width: windowWidth, height: windowHeight / 3 }}
                            source={require('../../assets/BackgroundPbproppant.png')}
                        >
                            <Image source={require('../../assets/Logo.png')} style={{
                                width: 72,
                                height: 72,
                                alignSelf: 'center',
                                marginTop: Constants.statusBarHeight
                            }} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: responsiveFontSize(4), fontWeight: '700'
                            }}>Hi, welcome</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 14, fontWeight: '400'
                            }}>Login now to view the performance of</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 14, fontWeight: '400'
                            }}>your investment</Text>
                        </ImageBackground>


                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/Group.png')} style={{
                                width: responsiveWidth(37),
                                height: responsiveWidth(35),
                                alignSelf: 'center',
                            }} />
                            <View style={styles.formView}>
                                <Text style={[styles.headertext1, { marginTop: 0 }]}>Email</Text>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Enter your user name'}
                                    placeholderTextColor={'grey'}
                                    onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Password</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={true}
                                    placeholder={'Enter Password'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Confirm Password</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={true}
                                    placeholder={'Enter Password'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.confirmPassword}
                                    onChangeText={(text) => {
                                        this.setState({ confirmPassword: text });
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => {

                                        this.ValidationFn();
                                    }}
                                    style={styles.button}>

                                    <LinearGradient
                                        colors={['#F0B04E', '#F58B56']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        style={styles.gradient}>
                                        {
                                            this.state.success ?
                                                <ActivityIndicator size={'small'} color={'black'} />
                                                :
                                                <Text style={styles.text}>Create Account</Text>
                                        }
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>
                            <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.ErrorMessege} </Text>
                            <TouchableOpacity
                                style={{ marginTop: responsiveHeight(3), }}
                                onPress={() => {

                                    this.props.navigation.navigate('Login');
                                }}>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 14, padding: responsiveHeight(1.3) }}>Have an account?
                            <Text style={{ fontWeight: '500', fontStyle: 'italic', textDecorationLine: 'underline', }}>Login Here </Text>
                                </Text>
                            </TouchableOpacity>

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
                            <Image source={require('../../assets/Logo.png')} style={{
                                width: 72,
                                height: 72,
                                alignSelf: 'center', marginTop: Constants.statusBarHeight
                            }} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: responsiveFontSize(4), fontWeight: '700'
                            }}>Hi, welcome</Text>
                        </LinearGradient>

                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/Group.png')} style={{
                                width: windowWidth / 2.5,
                                height: windowHeight / 4.8,
                                alignSelf: 'center', marginTop: Constants.statusBarHeight
                            }} />
                            <View style={styles.formView}>
                                <Text style={[styles.headertext1, { marginTop: 0 }]}>Email</Text>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Enter your user name'}
                                    placeholderTextColor={'grey'}
                                    onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Password</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={this.state.secured}
                                    placeholder={'Enter Password'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Confirm Password</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={this.state.secured}
                                    placeholder={'Enter Password'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                                <TouchableOpacity style={styles.button}>
                                    <LinearGradient
                                        colors={['#F0B04E', '#F58B56']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Create Account</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </LinearGradient>
                 
                    <TouchableOpacity
                        style={{ marginTop: responsiveHeight(3), }}
                        onPress={() => {

                            this.props.navigation.navigate('Login');
                        }}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 14, padding: responsiveHeight(1.3) }}>Have an account?
                            <Text style={{ fontWeight: '500', fontStyle: 'italic', textDecorationLine: 'underline', }}>Login Here </Text>
                        </Text>
                    </TouchableOpacity> */}

                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
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
        marginTop: responsiveHeight(-4),
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
        height: windowHeight / 2.2,
        borderWidth: 5,
        borderColor: '#F58B56',
        alignSelf: 'center',
        marginTop: Constants.statusBarHeight,
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
        height: '12%',
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
