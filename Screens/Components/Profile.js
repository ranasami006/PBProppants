import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Modal, Text, View, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                { key: 'Android' },
                { key: 'iOS' },
                { key: 'Java' },
                { key: 'Swift' },
            ],
            modalVisible: false,
            secondView: false,
            checked: 'first',
        }
    }
    async componentDidMount() {
    }

    render() {

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
                        <LinearGradient
                            start={[1, 0]}
                            end={[1, 0]}
                            colors={['#F0B04E', '#F58B56']}
                            style={styles.modelBackground}
                        >
                            <Text style={{
                                fontSize: 22, fontWeight: '700',
                                padding: responsiveHeight(2),
                                marginTop: responsiveHeight(2), alignSelf: 'center'
                            }}>Your Current Plan:</Text>
                            {!this.state.secondView ? (
                                <>
                                    <View style={styles.optionText}>
                                        <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '700' }}>Gold</Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 22, fontWeight: '700',
                                        marginTop: responsiveHeight(5), alignSelf: 'center'
                                    }}>Change To:</Text>
                                    <TouchableOpacity style={styles.optionText1}
                                        onPress={() =>
                                            this.setState({ secondView: true })
                                        }
                                    >
                                        <Text style={{
                                            alignSelf: 'center',
                                            fontSize: 18, fontWeight: '700', paddingLeft: responsiveHeight(1)
                                        }}>Choose an option:</Text>
                                        <AntDesign name="downcircle" size={24} color="black" style={{ alignSelf: 'center', paddingRight: responsiveHeight(1) }} />
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <>
                                    <View style={styles.secondOptionText}>
                                        <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '700' }}>PLATINUM</Text>
                                        <RadioButton
                                            color={'#393939'}
                                            value="first"
                                            label="Carto Base MAp"
                                            status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: 'first' }); }}
                                        />

                                    </View>
                                    <View style={styles.secondOptionText}>
                                        <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '700' }}>DIAMOND</Text>
                                        <RadioButton
                                            color={'#393939'}
                                            value="second"
                                            status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: 'second' }); }}
                                        />
                                    </View>
                                </>
                            )}
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalVisible: false })
                                }}
                                style={styles.buttonReset}>
                                <LinearGradient
                                    colors={['#1D1D1D', '#3E3E3E']}
                                    start={[1, 1]}
                                    end={[0, 1]}
                                    style={styles.gradient}>
                                    <Text style={styles.text}>Submit request</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </LinearGradient>

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
                            <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', marginTop: responsiveHeight(1) }}> Profile Update </Text>
                            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', marginTop: responsiveHeight(0) }}> Update your profile he</Text>
                            <View style={styles.formView}>
                                <Text style={[styles.headertext1, { marginTop: 0 }]}>Username:</Text>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Username:'}
                                    placeholderTextColor={'grey'}
                                    onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Email:</Text>
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
                                <Text style={styles.headertext1}>Password:</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={this.state.secured}
                                    placeholder={'******'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Your referral code:</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    //secureTextEntry={this.state.secured}
                                    placeholder={'Pending assignation by admin'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveHeight(4) }}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: responsiveHeight(3), marginTop: responsiveHeight(1) }}>Your membership plan:</Text>
                                <Text style={{ fontSize: 18, fontWeight: '400', paddingLeft: responsiveHeight(3), color: "#F78F2A" }}>GOLD</Text>
                            </View>
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.setState({ modalVisible: true })}
                            >
                                <LinearGradient
                                    colors={['#F0B04E', '#F58B56']}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradient}>
                                    <Text style={styles.text}>Upgrade here</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttonUpdate}>
                            <LinearGradient
                                colors={['#AFCFFF', '#AFCFFF']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.gradientUpdate}>
                                <Text style={styles.textUpdate}>Update my Profile</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', marginTop: responsiveHeight(1) }}> Your referral network</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', marginBottom: responsiveHeight(2), paddingLeft: responsiveHeight(2), paddingRight: responsiveHeight(2) }}> This is the members that invited with your referral code
                        (Total:0 members invited)</Text>
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
                            <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', marginTop: responsiveHeight(1) }}> Profile Update </Text>
                            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', marginTop: responsiveHeight(0) }}> Update your profile he</Text>
                            <View style={styles.formView}>
                                <Text style={[styles.headertext1, { marginTop: 0 }]}>Username:</Text>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder={'Username:'}
                                    placeholderTextColor={'grey'}
                                    onSubmitEditing={() => this._password.focus()}
                                    returnKeyType="next"
                                    returnKeyLabel="next"
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Email:</Text>
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
                                <Text style={styles.headertext1}>Password:</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    secureTextEntry={this.state.secured}
                                    placeholder={'******'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                                <Text style={styles.headertext1}>Your referral code:</Text>

                                <TextInput
                                    ref={(input) => this._password = input}
                                    style={styles.textinput}
                                    //secureTextEntry={this.state.secured}
                                    placeholder={'Pending assignation by admin'}
                                    placeholderTextColor={'grey'}
                                    placeholderStyle={{ marginLeft: responsiveHeight(5) }}

                                    value={this.state.password}
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }}
                                />
                            </View>
                        </View>

                    </LinearGradient>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:responsiveHeight(4) }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: responsiveHeight(3),marginTop:responsiveHeight(1) }}>Your membership plan:</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', paddingLeft: responsiveHeight(3), color: "#F78F2A" }}>GOLD</Text>
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.setState({ modalVisible: true })}
                        >
                            <LinearGradient
                                colors={['#F0B04E', '#F58B56']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.gradient}>
                                <Text style={styles.text}>Upgrade here</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonUpdate}>
                        <LinearGradient
                            colors={['#AFCFFF', '#AFCFFF']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.gradientUpdate}>
                            <Text style={styles.textUpdate}>Update my Profile</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', marginTop: responsiveHeight(1) }}> Your referral network</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', marginBottom: responsiveHeight(2), paddingLeft: responsiveHeight(2), paddingRight: responsiveHeight(2) }}> This is the members that invited with your referral code
                        (Total:0 members invited)</Text> */}

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    modelBackground: {
        width: windowWidth - 30,
        height: windowHeight / 2,
        borderRadius: responsiveHeight(4),
        alignSelf: 'center', backgroundColor: 'white',
        elevation: 6,
        marginTop: responsiveHeight(20)
    },
    optionText1: {
        width: 350,
        height: 53,
        backgroundColor: 'white',
        elevation: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    secondOptionText: {
        width: 350,
        height: 53,
        backgroundColor: 'white',
        elevation: 3,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        padding: responsiveHeight(3),
        marginTop: responsiveHeight(0),
    },

    optionText: {
        width: 350,
        height: 53,
        backgroundColor: 'white',
        elevation: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    buttonReset: {
        width: 286,
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(6)
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
        
        marginTop:responsiveHeight(-5),
        width: windowWidth,
       // borderTopRightRadius: responsiveHeight(15),
    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '95%',
        height: 360,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: responsiveHeight(2),
        borderTopRightRadius: responsiveHeight(10)
    },
    scrollView: {
        backgroundColor: 'white'
    },
    headertext1: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(0),

    },
    textinput: {
        height: 36,
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
        borderRadius: 41,
    },
    button: {
        width: 143,
        height: 36,
        alignSelf: 'center',
        paddingRight: responsiveHeight(3)
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400'
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
        color: 'white',
    },
    buttonUpdate: {
        width: 324,
        height: 36,
        alignSelf: 'center',
        marginTop: responsiveHeight(4)
    },
    gradientUpdate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textUpdate: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },
});
