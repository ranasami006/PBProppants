import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, 
    ActivityIndicator,
    Dimensions, TextInput, Modal, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
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
import { getFaqs } from "../../Backend/apiFile"
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class FAQs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
              
            ],
            success:true,
        }
    }
    async componentDidMount() {
        await this.setState({success:true})
        let data = await getFaqs()
       await this.setState({
           data:data.response.results,
           success:false,
       })
       // console.log(data.response.results)
    }
    renderItemRequest = ({ item }) => {
        return (
            <View style={styles.questionView}>
                <Collapse>
                    <CollapseHeader>
                        <View style={styles.questionHeader}>
                            <Text style={styles.textHeader}>{item.question}</Text>
                            <AntDesign name="downcircle" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Text style={styles.bodyText}>A:
                                                {item.answer}</Text>
                    </CollapseBody>
                </Collapse>
            </View>
        );
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
                                        style={{ paddingLeft: responsiveHeight(0.5) }}
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
                            <Text style={{
                                alignSelf: 'center',
                                fontSize: 30, fontWeight: '700',
                                padding: responsiveHeight(2)
                            }}>Frequent Asked Question</Text>
                           <ScrollView style={{marginBottom:responsiveHeight(0)}} >
                           {!this.state.success?(
                           
                            <FlatList data={this.state.data}
                                horizontal={false}
                                renderItem={this.renderItemRequest}
                            />
                            ):
                            <ActivityIndicator size={'large'} color={"#F0B04E"}/>
                            }

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
        height: windowHeight,
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
        justifyContent: 'space-between',
        paddingRight: responsiveHeight(1.5)
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
        height:'80%',
        marginBottom: responsiveHeight(20),
        borderRadius: responsiveHeight(2),
        elevation: 10,
    },
    questionView: {
        alignSelf: 'center',
        width: '97%',
        //height: 120,
        borderRadius: responsiveHeight(2),
        elevation: 3,
        marginBottom: responsiveHeight(1),
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
    bodyText: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        padding: responsiveHeight(1.5),
        marginTop: responsiveHeight(-2.5)
    }

});
