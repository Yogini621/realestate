import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
  navigation: any;
}

const TenancyApplicationDetails: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.applicationText}>Application Summary</Text>
        <View style={styles.incomeView}>
          <View style={styles.incomeDirectionView}>
            <View>
              <Text style={styles.incomeText}>Total Income</Text>
              <Text style={styles.rentText}>$4,500/mo</Text>
            </View>
            <View>
              <Text style={styles.incomeText}>Income to Rent</Text>
              <Text style={styles.rentText}>2.3X</Text>
            </View>
          </View>
          <View style={styles.incomeDirectionView}>
            <View>
              <Text style={styles.incomeText}>Occupants</Text>
              <Text style={styles.rentText}>1 person</Text>
            </View>
            <View>
              <Text style={styles.incomeText}>Move-in-Date</Text>
              <Text style={styles.rentText}>Dec 18,2021</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <Text style={styles.incomeText}>Vehicles</Text>
          <Text style={styles.rentText}>Porsche 718 Cayman</Text>
        </View>
        <View style={styles.userDetailsView}>
          <View style={styles.profileView}>
            <Image source={require('../Images/Avatar.png')} />
            <Text style={styles.manuelText}>Manuel Villa</Text>
            <Text style={styles.addressText}>Miyapur,Hyd</Text>
          </View>
          <View style={styles.pinView}>
            <View style={styles.pinDirectionView}>
              <Text style={styles.pinText}>3465</Text>
              <Text style={styles.dotText}>........</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.dateDirectionView}>
            <Text style={styles.dateOfBirthText}>Date of Birth</Text>
            <Text style={styles.dateText}>09-05-1985</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.dateDirectionView}>
            <Text style={styles.dateOfBirthText}>Age</Text>
            <Text style={styles.dateText}>36 years old</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.dateDirectionView}>
            <Text style={styles.dateOfBirthText}>Email</Text>
            <Text style={styles.dateText}>manuelvilla@gmail.com</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.dateDirectionView}>
            <Text style={styles.dateOfBirthText}>Phone Number</Text>
            <Text style={styles.dateText}>+91 972 355 3554</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.chatButtonView}>
            <TouchableOpacity style={styles.chatButton}>
              <MaterialCommunityIcons
                name="message-text-outline"
                color="white"
                size={20}
              />
              <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.acceptButton}>
            <AntDesign name="check" color="white" size={18} />
            <Text style={styles.accpetText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectButton}>
            <AntDesign name="close" color="red" size={20} />
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TenancyApplicationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    elevation: 1,
    justifyContent: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  applicationText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(6),
  },
  incomeView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 10,
    //     padding: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  incomeText: {
    color: '#394150',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  rentText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  incomeDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(80),
    backgroundColor: '#e0def7',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2.8),
  },
  userDetailsView: {
    width: responsiveWidth(90),
    borderWidth: 1,
    borderColor: '#e0def7',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 10,
    marginBottom: responsiveHeight(4),
  },
  profileView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(4),
  },
  manuelText: {
    color: '#000929',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
  },
  addressText: {
    color: '#00092980',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  pinView: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    backgroundColor: '#e8e6f9',
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  pinDirectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotText: {
    fontSize: responsiveFontSize(4),
    // marginBottom:responsiveHeight(1)
    // color: '#073762',
  },
  line: {
    marginTop: responsiveHeight(2.8),
    height: responsiveHeight(0.1),
    backgroundColor: '#e8e6f9',
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  dateOfBirthText: {
    color: '#00092980',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  dateText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  dateDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  chatButtonView: {
    backgroundColor: '#f7f7fd',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(4),
    padding: 10,
  },
  chatButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 8,
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  chatText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2),
  },
  acceptButton: {
    flexDirection: 'row',
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: responsiveWidth(42),
    justifyContent: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom:responsiveHeight(4)
  },
  rejectButton: {
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    width: responsiveWidth(42),
    justifyContent: 'center',
    alignItems: 'center',
  },
  accpetText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2),
  },
  rejectText: {
    color: 'red',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2),
  },
});
