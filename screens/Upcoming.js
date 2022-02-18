import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import COLORS from '../assets/colors'
import IMAGES from '../assets/images/images'
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import ICONS from '../assets/icons/icons'

const windowWidth = Dimensions.get('window').width

export default function Upcoming({navigation, route, upcoming}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState({ticket: 'Select a Ticket'});

  const tearTicket = (item) => {
    setModalValue(item);
    setModalVisible(true);
  }

  const renderModal = () => {
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <BlurView intensity={300} style={styles.centeredView}>
          <View  style={styles.ticketModalWrapperBottom}>
            <ImageBackground source={IMAGES.upcomingBlue} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20}} resizeMode="cover" style={styles.ticketModalTheme} >
              <Text style={{color: '#fff'}}>
                # Ticket
              </Text>
            </ImageBackground>
            <View style={styles.ticketModalRow}>
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
                      Redemed on
                    </Text>
                    <Text style={styles.ticketModalDatesDate}>
                      12-11-2021
                    </Text>
                  </View>
                </View>
              </View>
              <Image source={IMAGES.barcode} style={styles.barcodeBottom}/>
            </View>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image source={ICONS.close} style={styles.closeButton}/>
          </TouchableOpacity>
        </BlurView>
      </Modal>
    )
  }

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={styles.ticketWrapper} onPress={() => tearTicket(item)}>
        <ImageBackground source={item.used === 0 ? IMAGES.upcomingBlue : IMAGES.upcomingCompleted} imageStyle={{ borderRadius: 5}} resizeMode="contain" style={styles.ticket}>
          <Text style={item.used === 0 ? styles.ticketHeadingLight : styles.ticketHeadingDark}>
            {item.ticket}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {renderModal()}
      <FlatList data={upcoming} renderItem={renderItem} keyExtractor={item => item.ticketId} style={styles.flatList} numColumns={2}/>
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
  ticketModalWrapperBottom: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    // alignItems: 'center',
    // display: 'flex',
    // flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketModalHeading: {
    textAlign: 'center',
    fontSize: 20, 
    lineHeight: 30,
    padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
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
  barcodeBottom: {
    width: '30%',
    transform: [{rotate : '90deg'}],
  },
  closeButton: {
    height: 40,
    width: 40,
    marginTop: 30,
  },
  ticketModalTheme: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary
  },
  ticketModalRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  }
});