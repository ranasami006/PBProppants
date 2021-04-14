import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Modal,
    Dimensions, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    async componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />

                <ScrollView style={styles.scrollView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>

                        <View style={{
                            width: windowWidth - 30,
                            height: windowHeight / 2,
                            borderRadius: responsiveHeight(4),
                            alignSelf: 'center', backgroundColor: 'white',
                            elevation: 6,
                            marginTop: responsiveHeight(20)
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', padding: responsiveHeight(2), marginTop: responsiveHeight(2) }}>Reset the password</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: responsiveHeight(2) }}>No worry, we are here to help key in the your email to start changing the password.</Text>
                            <TextInput
                                style={styles.textinputModel}
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
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalVisible: false })
                                }}
                                style={styles.buttonReset}>
                                <LinearGradient
                                    colors={['#F0B04E', '#F58B56']}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradient}>
                                    <Text style={styles.text}>Send reset email</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Modal>




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
                            }}>Hi, welcome back.</Text>
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

                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('MemberPage');
                                    }}
                                    style={styles.button}>
                                    <LinearGradient
                                        colors={['#F0B04E', '#F58B56']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Login</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ marginTop: responsiveHeight(2), }}
                                    onPress={() => {
                                        this.setState({ modalVisible: true })
                                        //   this.props.navigation.navigate('forgotPassword');
                                    }}>
                                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 14, padding: responsiveHeight(1.3) }}>Forget Password?
                                    <Text style={{ fontWeight: '500', fontStyle: 'italic', textDecorationLine: 'underline', }}>Click here to reset</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity

                                onPress={() => {
                                    this.props.navigation.navigate('CreateAccount');
                                }}
                                style={styles.buttonaccount}>
                                <LinearGradient
                                    colors={['#F0B04E', '#F58B56']}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientaccount}>
                                    <Text style={styles.textaccount}>Create account</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 18, fontWeight: '500', marginTop: responsiveHeight(2),
                            }}>Having Some Question In Mind?</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12, fontWeight: '400'
                            }}>Read through our FAQs to find the answer.</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('FAQs');
                                }}
                                style={styles.buttonfaq}>
                                <LinearGradient
                                    colors={['#F0B04E', '#F58B56']}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientaccount}>
                                    <Text style={styles.textfaq}>FAQs</Text>
                                </LinearGradient>
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
                                alignSelf: 'center', 
                                marginTop: Constants.statusBarHeight
                            }} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: responsiveFontSize(4), fontWeight: '700'
                            }}>Hi, welcome back.</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 14, fontWeight: '400'
                            }}>Login now to view the performance of</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 14, fontWeight: '400'
                            }}>your investment</Text>
                        </LinearGradient>

                        <View style={styles.bottomView}>
                            <Image source={require('../../assets/Group.png')} style={{
                                width: responsiveWidth(37),
                                height: responsiveWidth(35),
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

                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('MemberPage');
                                    }}
                                    style={styles.button}>
                                    <LinearGradient
                                        colors={['#F0B04E', '#F58B56']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        style={styles.gradient}>
                                        <Text style={styles.text}>Login</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ marginTop: responsiveHeight(2), }}
                                    onPress={() => {
                                        this.setState({ modalVisible: true })
                                        //   this.props.navigation.navigate('forgotPassword');
                                    }}>
                                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 14, padding: responsiveHeight(1.3) }}>Forget Password?
                                    <Text style={{ fontWeight: '500', fontStyle: 'italic', textDecorationLine: 'underline', }}>Click here to reset</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </LinearGradient> */}

                    {/* <TouchableOpacity

                        onPress={() => {
                            this.props.navigation.navigate('CreateAccount');
                        }}
                        style={styles.buttonaccount}>
                        <LinearGradient
                            colors={['#F0B04E', '#F58B56']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textaccount}>Create account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18, fontWeight: '500', marginTop: responsiveHeight(2),
                    }}>Having Some Question In Mind?</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 12, fontWeight: '400'
                    }}>Read through our FAQs to find the answer.</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('FAQs');
                        }}
                        style={styles.buttonfaq}>
                        <LinearGradient
                            colors={['#F0B04E', '#F58B56']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.gradientaccount}>
                            <Text style={styles.textfaq}>FAQs</Text>
                        </LinearGradient>
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
        width: windowWidth / 2,
        height: windowHeight + 80,
        backgroundColor: 'white'
    },
    uperbackground: {
        height: windowHeight / 7,
        width: windowWidth / 3,
        backgroundColor: "#fff",
        marginTop: windowWidth / 3.5,
    },
    bottomView: {
        backgroundColor: 'transparent',
        width: windowWidth,
        marginTop: responsiveHeight(-4)

    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '90%',
        height: windowHeight / 2.3,
        borderWidth: 5,
        borderColor: '#F58B56',
        alignSelf: 'center',
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: responsiveHeight(2.5),
        borderRadius: responsiveHeight(2),
    },
    scrollView: {
        backgroundColor: 'white',
    },
    headertext1: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(0),

    },
    textinputModel: {
        height: '12%',
        backgroundColor: 'white',
        width: '95%',
        borderRadius: responsiveHeight(1),
        borderWidth: 1,
        borderColor: "#C6BEB7",
        paddingLeft: responsiveHeight(2),
        alignSelf: 'center',
        marginTop: responsiveHeight(1.5),
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
    buttonReset: {
        width: 211,
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(6)
    },

    button: {
        width: 131,
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(5.5)

    },
    text: {
        //color: 'white',
        fontSize: 15,
        fontWeight: '700'
    },
    buttonaccount: {
        width: 145,
        height: 40,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: responsiveHeight(4)
    },
    textaccount: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white'
    },
    gradientaccount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    buttonfaq: {
        width: 237,
        height: 40,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(3)
    },
    textfaq: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },

});
