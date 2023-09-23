


import {View, Text, ScrollView, SafeAreaView, Button, ActivityIndicator, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {horizontalScale, verticalScale, moderateScale} from '../utils/screenScaler'
import {useState, useEffect, useRef} from 'react'
import { Card } from '@rneui/themed';
import AddPersonModal from '../components/AddPersonModal';
import AddItemModal from '../components/AddItemModal';

export default function MainAddPage({ loadSpellServerCall}){
    
    const [personList, setPersonList] = useState([])
    const [itemList, setItemList] = useState([
        {"name":"chicken", "price": 10},
        {"name":"pasta", "price": 14},
        {"name":"beef", "price": 12},
        {"name":"beef", "price": 12},
        {"name":"beef", "price": 12}
    ])
    const [isAddPersonModalVisible, setIsAddPersonModalVisible] = useState(false);
    const [isAddItemModalVisible, setIsAddItemModalVisible] = useState(false);
    const scrollViewRef = useRef()

    const handleAddPerson = (person)=>{
        setPersonList([...personList, person])
    }
    const handleAddItem = (item)=>{
        setItemList([...itemList, item])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.personTab}>
                <Text style={styles.title}>People</Text>
                {personList.map(person=>{
                    return(
                        <Text>{person.name}</Text>
                    )
                })}
                
                <ScrollView 
                    ref={scrollViewRef}
                    //pagingEnabled={true}
                    horizontal= {false}
                    decelerationRate={'fast'}
                    snapToInterval
                    snapToAlignment={"start"}
                    contentInset={{
                        top: 0,
                        left: 100,
                        bottom: 0,
                        right: 30,
                    }}>
                    {itemList.map(item=>{
                        return(
                            <View style={styles.itemCardHolder}>
                                <Card>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Text>{item.price}</Text>
                                </Card>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.horizontalButtonGroup}>
                <AddPersonModal modalVisible={isAddPersonModalVisible} setModalVisible={setIsAddPersonModalVisible} addPerson={(a)=>handleAddPerson(a)}/>
                <AddItemModal modalVisible={isAddItemModalVisible} setModalVisible={setIsAddItemModalVisible} addItem={(a)=>handleAddItem(a)}/>
            
                {/* <Button title='Add Person' onPress={()=>handleAddPerson({"name":"bobby"})}></Button> */}
                <Button title='Add Person' onPress={()=>setIsAddPersonModalVisible(true)}></Button>
                <Button title='Add Item' onPress={()=>setIsAddItemModalVisible(true)}> </Button>
            </View>
            <View style={styles.itmeTab}>
                <Text style={styles.title}>Items</Text>
                <ScrollView 
                    ref={scrollViewRef}
                    //pagingEnabled={true}
                    horizontal= {true}
                    decelerationRate={'fast'}
                    snapToInterval
                    snapToAlignment={"start"}
                    contentInset={{
                        top: 0,
                        left: 100,
                        bottom: 0,
                        right: 30,
                    }}>
                    {itemList.map(item=>{
                        return(
                            <View style={styles.itemCardHolder}>
                                <Card>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Text>{item.price}</Text>
                                </Card>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: horizontalScale(375),
        height: verticalScale(812),
        backgroundColor: 'rgba(255,0,0,0.7)'
    },
    personTab:{
        width: horizontalScale(375),
        height: verticalScale(812-150-50),
        borderWidth: 1,
        borderColor: 'rgb(255,255,255)'
    },
    itmeTab:{
        width: horizontalScale(375),
        height: verticalScale(150),
        borderWidth: 1,
        borderColor: 'rgb(255,255,255)'
    },
    horizontalButtonGroup:{
        flex: 1,
        flexDirection: "row",
        gap: "5%"
    },
    itemCardLibrary: {
        flex:1,
        justifyContent:"center",
        flexDirection: "row"
    },
    itemCardHolder:{

    },
    title:{
        fontSize: moderateScale(20),
        fontWeight: "bold",
        textAlign: 'center'
    },



    loadoutCardContainer:{
        flexDirection: 'row',
        maxHeight: "100%"
    },
    cardContainer:{
        position: 'relative',
        width:'25%',
        paddingHorizontal: moderateScale(2)
    },
    selected:{
        transform: [
            {translateY: -verticalScale(20)}
        ]
    },  
    headerText:{
        fontSize: moderateScale(24)
    },
    loadButtonContainer:{
        position:'absolute',
        width: '100%',
        height: '25%',
        top: 50,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(6),
        
    },
    loadButton: {

    }
})
