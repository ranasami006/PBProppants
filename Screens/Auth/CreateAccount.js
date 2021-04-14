import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,ImageBackground, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
        height: windowHeight/2.2,
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
