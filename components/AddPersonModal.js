import { Modal, View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useState, useEffect, useRef} from 'react'
import {isNotBlank} from '../utils/generalUtils'

export default function AddPersonModal({ modalVisible, setModalVisible, addPerson }) {

    const [name, setName] = useState("");
    const validateInformation = () => {
        if(isNotBlank(name)){
            addPerson({"name": name});
            setName("");
            setModalVisible(false);
        } else {
            console.log("unable to add, failed name validation");
        }
    }
  return (
    
    <View style={styles.centeredView}>
        <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TextInput
                    value={name}
                    onChangeText={(userName) => setName(userName)}
                    placeholder={'Name'}
                    style={styles.input}
            />
            <View style={styles.horizontalButtonGroup}>
                <Pressable
                    style={[styles.button, styles.buttonAdd]}
                    onPress={() => validateInformation()}>
                    <Text style={styles.textStyle}>Add Person</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>
            </View>
        </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonAdd: {
        backgroundColor: '#00ff00',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
    },
    horizontalButtonGroup:{
        flex: 1,
        flexDirection: "row",
        gap: "5%"
    },
  });