import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,
    Linking, ImageBackground, TextInput,
     TouchableOpacity, Image, ScrollView, SafeAreaView, 
     FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { TableView } from "react-native-responsive-table"
import { Table, Row, Rows } from 'react-native-table-component';
import * as DocumentPicker from 'expo-document-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { getwithdrawalforms } from '../../Backend/apiFile'
export default class FormUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documentArray: [],
            documentArrayShow:[]
        }
    }
    async componentDidMount() {
        let data = await getwithdrawalforms()
        await this.setState({
            documentArrayShow:data.response.results,
        }) 
        
    }
    _pickDocument = async () => {
        const { documentArray } = this.state;
        let result = await DocumentPicker.getDocumentAsync({});
        await this.state.documentArray.push(result);
        await this.setState({ documentArray })
        // alert(result.uri);
        // console.log(result);
    }

    render() {
        const state = this.state;
        return (
            <SafeAreaView style={styles.container}>

               
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
                        <ScrollView style={styles.bottomView}>
                            <Image source={require('../../assets/dashboardicon1.png')} style={{
                                width: windowWidth / 2.5,
                                height: windowHeight / 4.8,
                                alignSelf: 'center', marginTop: responsiveHeight(-6)
                            }} />

                            <View style={styles.formView}>
                                <View style={styles.uperForm}>
                                    <Text style={styles.upperFormText}>Withdrawal Form</Text>
                                    <Text style={styles.upperFormText}>Filled up the form?</Text>
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: responsiveHeight(1.5) }}>

                                    {this.state.documentArray.length > 0 ? (
                                        this.state.documentArray.map((item, index) => {
                                            return (
                                                <View>
                                                    <Ionicons name="document-text-outline" size={100} color="#F58B56" style={{ alignSelf: 'center' }} />
                                                    <Text style={{ fontSize: 14, textAlign: 'center' }}>{item.name}</Text>
                                                </View>
                                            );
                                        })
                                    ) : (


                                        <Text style={{ fontSize: 14, textAlign: 'center' }}>No document is uploded yet</Text>
                                    )}
                                     {
                                     this.state.documentArrayShow.length > 0 ? (
                                        this.state.documentArrayShow.map((item, index) => {
                                           
                                            return (
                                                
                                                <TouchableOpacity
                                                onPress={()=> Linking.openURL('https://www.pbproppants-invest.com'+item['file'])}
                                                >
                                                    <Ionicons name="document-text-outline" size={100} color="#F58B56" style={{ alignSelf: 'center' }} />
                                                    <Text style={{ fontSize: 14, textAlign: 'center' }}>{item['file name']}</Text>
                                                </TouchableOpacity>
                                            );
                                        })
                                    ) : (


                                        null
                                    )}
                                </View>
                                <>
                                    <TouchableOpacity
                                        onPress={this._pickDocument}
                                        style={styles.button}>
                                        <LinearGradient
                                            colors={['#fff', '#fff']}
                                            start={[0, 0]}
                                            end={[1, 1]}
                                            style={styles.gradient}>
                                            <Text style={styles.text}>Click hehe to your upload with awal form</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this._pickDocument1}
                                        style={styles.button}>
                                        <LinearGradient
                                            colors={['#99D3FF', '#99D3FF']}
                                            start={[0, 0]}
                                            end={[1, 1]}
                                            style={styles.gradient}>
                                            <Text style={styles.text}>Submit</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </>
                            </View>

                        </ScrollView>
                    </View>    
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
        height: windowHeight/2,
        backgroundColor: "#fff",
        width: windowWidth,
        borderTopRightRadius: responsiveHeight(15),
    },
    uperView: {
        width: windowWidth,
        height: windowHeight / 3,
    },
    formView: {
        width: '100%',
        //height: windowHeight,
        marginTop: responsiveHeight(3.8),
        backgroundColor: '#fff',
        alignContent: 'center',
        padding: responsiveHeight(3),
        borderRadius: responsiveHeight(2),

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
        width: '80%',
        height: 40,
        alignSelf: 'center',
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(3),
        elevation: 5
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
    uperForm: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: windowWidth - 70,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    upperFormText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        //padding: 20,
    },
    title: {
        fontSize: 32,
    },
});
