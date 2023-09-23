import { Modal, View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useState, useEffect, useRef} from 'react'
import {isNotBlank} from '../utils/generalUtils'
import { Ionicons } from '@expo/vector-icons';

export default function AddItemModal({ modalVisible, setModalVisible, addItem }) {

    const [name, setName] = useState("");
    const [taxable, setTaxable] = useState(true);
    const [price, setPrice] = useState("");
    const validateInformation = () => {
        if(isNotBlank(name)){
            addItem({
                name,
                taxable,
                price: isNotBlank(price)?price:"0"
            });
            setName("");
            setPrice("");
            setTaxable(true);
            setModalVisible(false);
        } else {
            console.log("unable to add, failed validation");
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
            <TextInput
                    value={price}
                    onChangeText={(price) => setPrice(price)}
                    keyboardType="numeric"
                    placeholder={'Price'}
                    style={styles.input}
            />
            
            <View style={styles.checkboxContainer}>
                {/* <CheckBox
                    value={taxable}
                    onValueChange={setTaxable}
                    style={styles.checkbox}
                /> */}
                
                {/* <CheckBox
                  disabled={false}
                  value={taxable}
                  onValueChange={(newValue) => setTaxable(newValue)}
                /> */}
                <Pressable
                    style={[styles.checkboxBase, taxable && styles.checkboxChecked]}
                    onPress={() => setTaxable(!taxable)}>
                    {taxable && <Ionicons name="checkmark" size={24} color="white" />}
                </Pressable>

                <Text style={styles.label}>Taxable</Text>
            </View>
            <View style={styles.horizontalButtonGroup}>
                <Pressable
                    style={[styles.button, styles.buttonAdd]}
                    onPress={() => validateInformation()}>
                    <Text style={styles.textStyle}>Add Item</Text>
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
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
      checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: 'coral',
      },
  });