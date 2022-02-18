import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import COLORS from '../assets/colors'
import IMAGES from '../assets/images/images'
import ICONS from '../assets/icons/icons'
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';

const windowWidth = Dimensions.get('window').width

export default function Pending({navigation, route, pending}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState({ticket: 'Select a Ticket'});

  const [create, setCreate] = useState(false);
  const [markerName, setMarkerName] = useState("");
  const [details, setDetails] = useState("");

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={styles.ticketWrapper} onPress={() => {setModalVisible(true); setModalValue(item)}}>
        <ImageBackground source={item.used === 0 ? IMAGES.upcomingBlue : IMAGES.upcomingCompleted} imageStyle={{ borderRadius: 5}} resizeMode="contain" style={styles.ticket}>
          <Text style={item.used === 0 ? styles.ticketHeadingLight : styles.ticketHeadingDark}>
            {item.ticket}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  const createTicket = () => {
    if(create === true){
      return(
        <View style={styles.popup}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>
              Create a new {'\n'}
              Marker
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setMarkerName}
            value={markerName}
            placeholder="Marker Name (Maybe treat at Mc Donalds)"
            placeholderTextColor={COLORS.primary}
          />
          <TextInput
            style={styles.input}
            onChangeText={setDetails}
            value={details}
            placeholder="Marker Details"
            placeholderTextColor={COLORS.primary}
          />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <BlurView intensity={300} style={styles.centeredView}>
          <View style={styles.ticketModalWrapper}>
            <ImageBackground source={IMAGES.upcomingBlue} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20}} resizeMode="cover" style={styles.ticketModalTheme} >
              <Text style={{color: '#fff'}}>
                # Ticket
              </Text>
            </ImageBackground>
            <Text style={styles.ticketModalHeading}>
              {modalValue.ticket}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: '70%',
              }}
            />
            <Text style={styles.ticketModalDetails}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </Text>
            <View style={styles.ticketModalDates}>
              <View style={styles.ticketModalDatesWrapper}>
                <Text style={styles.ticketModalDatesHeading}>
                  Created at
                </Text>
                <Text style={styles.ticketModalDatesDate}>
                  12-10-2021
                </Text>
              </View>
              <View style={styles.ticketModalDatesWrapper}>
                <Text style={styles.ticketModalDatesHeading}>
                  Valid till
                </Text>
                <Text style={styles.ticketModalDatesDate}>
                  12-11-2021
                </Text>
              </View>
            </View>
            <Text>
              SCAN THIS BARCODE TO TEAR THIS TICKET
            </Text>
            <Image source={IMAGES.barcode} style={styles.barcode}/>
            <Text style={{paddingBottom: 30}}>
              208371398463190840
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'transparent',
              borderBottomWidth: 1,
              width: '60%',
            }}
          />
          <View style={styles.ticketModalWrapperBottom}>
            <View style={{width: '70%'}}>
              <Text style={styles.ticketModalHeading}>
                {modalValue.ticket}
              </Text>
              <View style={styles.ticketModalDates}>
                <View style={styles.ticketModalDatesWrapper}>
                  <Text style={styles.ticketModalDatesHeading}>
                    Created at
                  </Text>
                  <Text style={styles.ticketModalDatesDate}>
                    12-10-2021
                  </Text>
                </View>
                <View style={styles.ticketModalDatesWrapper}>
                  <Text style={styles.ticketModalDatesHeading}>
                    Valid till
                  </Text>
                  <Text style={styles.ticketModalDatesDate}>
                    12-11-2021
                  </Text>
                </View>
              </View>
            </View>
            <Image source={IMAGES.barcode} style={styles.barcodeBottom}/>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image source={ICONS.close} style={styles.closeButton}/>
          </TouchableOpacity>
        </BlurView>
      </Modal>

      <FlatList data={pending} renderItem={renderItem} keyExtractor={item => item.ticketId} style={styles.flatList} numColumns={2}/>
      {createTicket()}
      <TouchableOpacity style={styles.button} onPress={() => setCreate(!create)}>
        <Text style={styles.buttonText}>
          Create a new Marker
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  flatList: {
    width: '100%',
    paddingTop: 10,
  },
  ticketWrapper: {
    width: windowWidth * .5 - 15,
    height: windowWidth * .5 - 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: COLORS.primary
  },
  ticketHeadingDark: {
    color: COLORS.textPrimary,
  },
  ticketHeadingLight: {
    color: COLORS.textSecondary,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    height: 40,
    width: 40,
    marginTop: 30,
  },
  ticketModalWrapper: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  ticketModalTheme: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary
  },
  ticketModalHeading: {
    textAlign: 'center',
    fontSize: 20, 
    lineHeight: 30,
    padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  ticketModalDetails: {
    margin: 20,
    width: '70%',
    textAlign: 'center',
  },
  ticketModalDates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: 10,
    paddingBottom: 10,
  },
  ticketModalDatesWrapper: {
    alignItems: 'center',
  },
  ticketModalDatesHeading: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  ticketModalDatesDate: {
    fontSize: 20,
    lineHeight: 30,
  },
  barcode: {
    width: '80%',
  },
  ticketModalWrapperBottom: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  barcodeBottom: {
    width: '30%',
    transform: [{rotate : '90deg'}],
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '20%',
    marginRight: '20%',
  },
  buttonText: {
    color: COLORS.textPrimary
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: windowWidth - 54,
    borderColor: COLORS.primary,
  },
  heading: {
    fontSize: 45,
    lineHeight: 60,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  headingWrapper: {
    width: '80%',
    margin: 10,
  },
});
