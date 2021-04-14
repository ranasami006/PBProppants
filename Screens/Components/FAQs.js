import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, Dimensions, TextInput, Modal, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { TableView } from "react-native-responsive-table"
import { Table, Row, Rows } from 'react-native-table-component';
import { AntDesign } from '@expo/vector-icons';
import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from 'accordion-collapse-react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class FAQs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: 'hi', body: 'hello' },
                { title: 'hi2', body: 'hello2' }
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

                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['#F0B04E', '#F58B56']}
                        style={styles.background}
                    >

                        <Header
                            statusBarProps={{ barStyle: 'light', backgroundColor: 'transparent' }}
                            barStyle="light-content" // or directly
                            leftComponent={
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Login')}
                                    style={styles.buttonaccount}>
                                    <Ionicons name="arrow-back" size={responsiveWidth(5)
                                      
                                }
                                style={{paddingLeft:responsiveHeight(0.5)}}
                                        color="white" />
                                    <Text style={styles.textaccount}>Back To Home</Text>
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
                        <View style={styles.faq}>
                            <Text style={{ alignSelf: 'center', 
                            fontSize: 30, fontWeight: '700', 
                            padding: responsiveHeight(2) }}>Frequent Asked Question</Text>
                            <ScrollView style={{marginBottom:responsiveHeight(1)}}>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>What is PBP?</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives. These orders will be paid for by the company to receive profits, but investors invest in these orders with the company and the company pays a ROI dividend to the investor.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>How can i become on investor and where my money.</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives. These orders will be paid for by the company to receive profits, but investors invest in these orders with the company and the company pays a ROI dividend to the investor.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>When can i withdraw my money?</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives. These orders will be paid for by the company to receive profits, but investors invest in these orders with the company and the company pays a ROI dividend to the investor.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>How can i become on investor and where my money.</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives. These orders will be paid for by the company to receive profits, but investors invest in these orders with the company and the company pays a ROI dividend to the investor.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>What happens if i need to take my investment out early?</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives. These orders will be paid for by the company to receive profits, but investors invest in these orders with the company and the company pays a ROI dividend to the investor.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                                <View style={styles.questionView}>
                                    <Collapse>
                                        <CollapseHeader>
                                            <View style={styles.questionHeader}>
                                                <Text style={styles.textHeader}>My Investment says I am worth xxx amount why can not i withdraw that money early?</Text>
                                                <AntDesign name="downcircle" size={24} color="black" />
                                            </View>
                                        </CollapseHeader>
                                        <CollapseBody>
                                            <Text style={styles.bodyText}>A:
                                                PBP gives investors the opportunity to become investors by investing into the purchase orders that Permian Basin Proppants receives.</Text>
                                        </CollapseBody>
                                    </Collapse>
                                </View>
                            </ScrollView>
                        </View>
                    </LinearGradient>

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

    background: {
        width: windowWidth,
        //height: windowHeight+90,
    },

    scrollView: {
        backgroundColor: 'white'
    },


    buttonaccount: {
        flexDirection: 'row',
        width: 145,
        height: 40,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingRight:responsiveHeight(1.5)
    },
    textaccount: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'right',
    },
    gradientaccount: {
        width: '95%',
        height: 40,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    faq: {
        backgroundColor: 'white',
       
        width: '90%',
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        marginBottom:responsiveHeight(12),
        borderRadius: responsiveHeight(2),
        elevation:10,
    },
    questionView: {
        alignSelf: 'center',
        width: '97%',
        height: 120,
        borderRadius: responsiveHeight(2),
        elevation: 3,
        marginBottom:responsiveHeight(1),
    },
    questionHeader: {
        justifyContent: 'space-between',
        padding: responsiveHeight(1.5),
        flexDirection: 'row',
    },
    textHeader: {
        width: '70%',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bodyText:{
        fontSize: 10,
        fontWeight: '500',
        textAlign:'center',
        padding:responsiveHeight(1.5),
        marginTop:responsiveHeight(-2.5)

    }

});
