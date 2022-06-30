import React, { useState , useEffect} from 'react';
import { View,StyleSheet ,TextInput,Pressable , Text , TouchableWithoutFeedback} from 'react-native';
import { Marker } from 'react-native-maps';
import MapView ,{PROVIDER_GOOGLE}from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";
import Modal from "react-native-modal";


const Maps = () => {
  const [modalVisible, setModalVisible] = useState(true);
  
  const [data,setData]=useState([]);
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiODFmMWZmMGEwY2UyMWRiMjc4NjY5ODVkMTZiN2JlNWY3MDcxMmMyZGNlNzU1ZTIwZmMyNTUzNGRmMWEzOTdmODE4MGYxOGQ1ODA5NWI3MDIiLCJpYXQiOjE2NTU3NjA5OTIuMTQ1NjEyLCJuYmYiOjE2NTU3NjA5OTIuMTQ1NjE2LCJleHAiOjE2ODcyOTY5OTIuMTIyMzgzLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.JUFGDoUl84Y9zwrPVQhgEmF6SvLK3nbXFDBSqDiT3YG6AmQSpX3sVuboi5DC2Z5rv3K3nxZ6l92_waMj8VKoMs97snEJH19Cn8Zobf-OpdWG1OYBl3OUndbszxN8nf6_VAc_N2ky9t2WFk0ewXXiLBs42nEdDUGoqAzRXJAZBZieT8goiXIrJnKWzaDDFtDVmlUw5NJQnSNCoDyntQFFk2HiVC1Aa52zTYouSVqgzLjHhwSHfG_ldPgnande-1ZLxlmQ4Y1e7h2zJhefSTPrIcT57J3EqpY2VOGU9MEQmVkycqZ37Cidh4Ruur_OjccDbZVWYx_GU1XIGgfZXkeq4IeKWG1uAVpbAfTbiPEWBSlL1gTqwCb9jiAgpexhr0EN87Bc_-ttenPNRIuZCUf8Wowlm7ZAH8wJKgmj6V1ry59qbGNm0Twdb7n_LqRmMQ32dOa3k6sxoHYEciKEWAY7-ceuAKPpu1rqf-kjbL6btfw2ZRh-Ly0AgbDL3xoqjnVz_T9MAvs-uMuS1oRfmgjh-QsjXNqUvsymqwv4Nv8Bt-kR9wYhxghGlk242mJ0nw2VzTlEDzGyCdOQ7GloKW7Qo8BpSx_Ir3ol9zenk5bMgDJH_C7Od1hmNqFLq8WyryCnlUXm9XjdA9S0I_jVkXA_hE09CoN9N8n0ZiAA4rPIUFI'
    }
    
    axios.get('https://1fb1-154-121-80-232.eu.ngrok.io/api/v1/pos', {
        headers: headers
      })
      .then((response) => {
       setData(response.data);
      })
      .catch((error) => {
      
      })
  }, [])
    
   
  useEffect(() => {
   
  }, [data]) 
  
  const [mapRegion, setmapRegion] = useState({
    latitude: 36.72934242925585, 
    longitude:  3.4983810782432556,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  

  function show() {
    
return(
      <Modal
      
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Point de vente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom POS "
              keyboardType="alphanumeric"/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal </Text>
            </Pressable>
          </View>
        </View>
      </Modal>)   
  
   

 
   
  }
  return (
  <>
    <View style={styles.container}>
    <MapView
    provider={PROVIDER_GOOGLE}
    showsMyLocationButton={true}
    showsUserLocation={true}
      style={{ ...StyleSheet.absoluteFillObject, height: '100%' }}
      region={mapRegion}
      onPress={(e)=> console.log(e.nativeEvent.coordinate)
    }
    >
      {data.map((item)=>{
    return ( <MapView.Marker
      onPress={() => {setModalVisible(true);  setmapRegion(item.lattitude, item.longetude);  }} 
      coordinate={{
        latitude: item.lattitude,
        longitude: item.longetude
      }}
      title = {item.Nom_POS}

    >

      
    </MapView.Marker>)
   
  
  })}
   
    </MapView> 
    {show()}
  </View>
  
  </>
  );
};
export default Maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize : 15,
    fontWeight : "700",
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius : 25,
    paddingHorizontal: 15

  },
  
}); 