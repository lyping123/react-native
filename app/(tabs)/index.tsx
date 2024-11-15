
import { StyleSheet, Linking, Text, Button, View,ToastAndroid,Modal,TextInput,Pressable ,Alert,SafeAreaView} from 'react-native';
import React from 'react';
import {Link} from 'expo-router'


export default function TabTwoScreen() {
  
  
  return (
    <SafeAreaView style={[styles.container,contaistyles ]}>
      <Button title="Default Toast"  color="red"   />
      <View style={{ height: 10 }} />
      <Button title="Toast with textInput"  color="orange" />
      <View style={{ height: 10 }} />
      <Button title="Toast with gravity"  color="green" />
      <View style={{ height: 10 }} />

      <Button title="Open Modal" color="blue"  />
      
      <View style={{ height: 10 }} />
      <Button title="Toast with layout"  color="purple"/>
      <TextInput
        style={styles.input}
      />

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a modal!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
}

const contaistyles={ backgroundColor:"white"};
const buttonstyle={ marginBottom:'10%',width:300};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

});
