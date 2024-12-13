import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CircleComponent from './CircleComponent';
import Feather from 'react-native-vector-icons/Feather';
import {data1} from './data1';
import {Property} from '../redux/actions/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ViewComponent from './ViewComponent';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  navigation: any;
}

const LandingPage: React.FC<Props> = ({navigation}) => {
  const [selectButton, setSelectButton] = useState(false);
  const [selectButton1, setSelectButton1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toogleButton = () => {
    setSelectButton(!selectButton);
    setSelectButton1(false);
    navigation.navigate('SignupPage');
  };

  const toogleButton1 = () => {
    setSelectButton1(!selectButton1);
    setSelectButton(false);
    navigation.navigate('SigninPage');
  };

  const renderItems = ({item}: {item: Property}) => {
    return (
      <View style={styles.itemView}>
        <View style={styles.imageView}>
          <Image source={item.image} />
          <View style={styles.descriptuonView}>
            <View style={styles.rentView}>
              <View style={styles.imageView}>
                <FontAwesome
                  name="rupee"
                  color="#073762"
                  size={18}
                  style={styles.icon}
                />
                <Text style={styles.rentText1}>
                  {item.rent}
                  <Text style={styles.monthText}>/month</Text>
                </Text>
              </View>
              <View style={styles.iconView}>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={16} color="#073762" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.buildingNameText}>{item.rooms} </Text>
            <Text style={styles.addressText}>{item.location} </Text>
            <View style={styles.iconsView}>
              <View style={styles.carIconView}>
                <AntDesign name="car" color="#073762" size={20} />
                <Text style={styles.numberText}>3Beds</Text>
              </View>
              <View style={styles.carIconView}>
                <FontAwesome name="bathtub" color="#073762" size={20} />
                <Text style={styles.numberText}>2Bathroms</Text>
              </View>
            </View>
            <View style={styles.carIconView1}>
              <Image source={require('../Images/SquareMeters.png')} />
              <Text style={styles.numberText}>5x7 m²</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector.png')} />
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={selectButton ? styles.activeButton : styles.loginButton}
                onPress={toogleButton}>
                <Text
                  style={
                    selectButton ? styles.activeButtonText : styles.buttonText
                  }>
                  Sign up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={selectButton1 ? styles.activeButton : styles.loginButton}
                onPress={toogleButton1}>
                <Text
                  style={
                    selectButton1 ? styles.activeButtonText : styles.buttonText
                  }>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.propertiesView}>
          <View style={styles.marketView}>
            <Text style={styles.marketText}>
              Easily purchase, lease, or markert your real estate.
            </Text>
          </View>
          <View style={styles.marketView1}>
            <Text style={styles.marketText1}>
              An excellent platform for purchasing, selling, or renting
              properties with zero commissions involved.
            </Text>
          </View>
          <TouchableOpacity style={styles.propertiesButton}>
            <Text style={[styles.buttonText, {color: 'white'}]}>
              Browse Properties
            </Text>
          </TouchableOpacity>
          <View style={styles.rentersView}>
            <View>
              <View style={styles.circle}>
                <FontAwesome6 name="users" color="white" size={16} />
                <View style={styles.keyView}>
                  <FontAwesome6 name="key" color="white" size={8} />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.rentersText}>50k+ renters</Text>
              <Text style={styles.believeText}>believe in our service</Text>
            </View>
          </View>
          <View style={styles.rentersView}>
            <View>
              <View style={styles.circle}>
                <FontAwesome6 name="users" color="white" size={16} />
                <View style={styles.keyView}>
                  <FontAwesome name="search" color="white" size={9} />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.rentersText1}>10k+ properties</Text>
              <Text style={styles.believeText1}>
                and house ready for occupancy
              </Text>
            </View>
          </View>
          <Image source={require('../Images/house.png')} style={styles.image} />
        </View>
        <View style={styles.newWayView}>
          <View style={styles.textView}>
            <Text style={styles.marketText}>
              The new way to find your new home
            </Text>
            <View style={styles.descriptionView}>
              <Text style={styles.marketText1}>
                Find your dream place to live in with more than 10k+ properties
                listed.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.propertiesButton, {backgroundColor: '#000929'}]}>
              <Text
                style={[
                  styles.marketText1,
                  {color: 'white', fontSize: responsiveFontSize(1.5)},
                ]}>
                Browse Properties
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../Images/smallhome.png')}
            style={styles.image1}
          />
        </View>

        <View>
          <CircleComponent
            icon="home"
            keyIcon="privacy-tip"
            propertyText="Property Insurance"
            descriptionText="We offer our customer property protection of liability coverage and insurance for their better life."
          />
          <CircleComponent
            icon="arrow-down"
            keyIcon="home"
            propertyText="Best Price"
            descriptionText="Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you."
          />
          <CircleComponent
            icon="arrow-down"
            keyIcon="home"
            propertyText="Lowest Commission"
            descriptionText="You no longer have to negotiate commissions and haggle with other agents it only cost 2%!"
          />
          <CircleComponent
            icon="arrow-down"
            keyIcon="home"
            propertyText="Overall Control"
            descriptionText="Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control."
          />
        </View>
        <View>
          <Text style={styles.locationText}>Based on your location </Text>
          <Text style={styles.nearLocationText}>
            some of our picked properties near your location.
          </Text>
          <View style={styles.inputDirectionView}>
            <View style={styles.inputView}>
              <View style={styles.input1}>
                <Text style={styles.rentText}>Rent</Text>
              </View>
            </View>
            <View style={styles.inputIconView}>
              <Feather name="search" color="#073762" size={28} />
              <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor="#000929"
              />
            </View>
          </View>
          <FlatList data={data1} renderItem={renderItems} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText1}>Browse more properties</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tenantsAndLandlordsView}>
          <Text style={styles.headerText}>
            Simplifying the process for both tenants and landlords
          </Text>
          <View style={styles.descriptionView1}>
            <Text style={styles.descriptionText}>
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </Text>
          </View>
          <ViewComponent
            icon="play-box-outline"
            headerText="Virtual home tour"
            backgroundColor="#403b77"
            descriptionText="You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property."
            textColor="#9b9b9b"
            headerTextColor="white"
            iconColor="white"
            onPress={() => setModalVisible(true)}
          />
          <ViewComponent
            icon="play-box-outline"
            headerText="Find the best deal"
            backgroundColor="#ffffff"
            descriptionText="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"
            textColor="#9b9b9b"
            headerTextColor="#000000"
            iconColor="black"
            onPress={() => setModalVisible(true)}
          />
          <ViewComponent
            icon="play-box-outline"
            headerText="Getready to apply"
            backgroundColor="#073762"
            descriptionText="Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!"
            textColor="#9b9b9b"
            headerTextColor="#ffffff"
            iconColor="black"
            onPress={() => setModalVisible(true)}
          />

          <View style={styles.percentageDirectionView}>
            <View>
              <Text style={styles.headerText}> 7.4%</Text>
              <Text style={styles.descriptionText}>Property Return Rate</Text>
            </View>
            <View>
              <Text style={styles.headerText}>3,856</Text>
              <Text style={styles.descriptionText}>Property in Sell&Rent</Text>
            </View>
            <View>
              <Text style={styles.headerText}>2,540</Text>
              <Text style={styles.descriptionText}>
                Daily Completed Transactions
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.noSpamText}>No Spam Promise</Text>
          <Text style={styles.landlordText}>Are you a landlord?</Text>
          <View style={styles.discoverView}>
            <Text style={styles.discoverText}>
              Discover ways to increase your home's value and get listed. No
              Spam.
            </Text>
          </View>
          <View style={styles.inputView1}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="#9b9b9b"
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.joinText}>
            Join <Text style={styles.text}>10,100+</Text>others landlords in our
            estatery community.
          </Text>
        </View>

        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalView}>
            <View style={styles.crossIconView}>
              <Text style={styles.verifyText}>Signup</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Entypo name="cross" color="black" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={styles.modalTextView}>
              <Text style={styles.modalText}>
                Please register to view more details
              </Text>
            </View>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={() => navigation.navigate('SignupPage')}>
              <Text style={styles.buttonText2}>Signup</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: responsiveHeight(10),
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(44),
    left: responsiveWidth(2),
  },
  activeButton: {
    height: responsiveHeight(4.6),
    width: responsiveWidth(20),
    backgroundColor: '#073762',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    height: responsiveHeight(4.6),
    width: responsiveWidth(20),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
  },
  buttonText: {
    fontFamily: 'PlusJakrtaSans a',
    color: 'black',
    fontSize: responsiveFontSize(1.4),
  },
  activeButtonText: {
    fontFamily: 'PlusJakrtaSans a',
    color: 'white',
    fontSize: responsiveFontSize(1.5),
  },
  propertiesView: {
    height: responsiveHeight(96),
    backgroundColor: '#9fc5e9',
  },
  marketView: {
    width: responsiveWidth(90),
    left: responsiveWidth(2.8),
    marginTop: responsiveHeight(2.8),
  },
  marketText: {
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.6),
    color: '#000929',
  },
  marketView1: {
    width: responsiveWidth(90),
    left: responsiveWidth(2.8),
    marginTop: responsiveHeight(1),
  },
  marketText1: {
    fontFamily: 'PlusJakartaSans l',
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    lineHeight: 22,
  },
  propertiesButton: {
    height: responsiveHeight(4.6),
    width: responsiveWidth(40),
    backgroundColor: '#073762',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    left: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fc5e9',
  },
  keyView: {
    backgroundColor: '#073762',
    height: responsiveHeight(2.4),
    width: responsiveWidth(4),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: -4,
  },
  rentersView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(44),
    left: responsiveWidth(2),
    marginTop: responsiveHeight(4),
  },
  rentersText: {
    color: '#073762',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
  },
  believeText: {
    fontFamily: 'PlusJakrtaSans a',
    color: 'black',
    fontSize: responsiveFontSize(1.5),
    lineHeight: 26,
  },
  rentersText1: {
    color: '#073762',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4.2),
  },
  believeText1: {
    fontFamily: 'PlusJakrtaSans a',
    color: 'black',
    fontSize: responsiveFontSize(1.5),
    lineHeight: 26,
    left: responsiveWidth(4.2),
  },
  image: {
    height: '70%',
    width: '96%',
    bottom: 136,
    alignSelf: 'flex-end',
    resizeMode: 'cover',
  },
  newWayView: {
    backgroundColor: '#9fc5e9',
    height: responsiveHeight(32),
    width: responsiveWidth(92),
    marginTop: responsiveHeight(4),
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: responsiveHeight(4),
  },
  textView: {
    left: responsiveWidth(8),
    width: responsiveWidth(76),
    marginTop: responsiveHeight(4),
  },
  descriptionView: {
    width: responsiveWidth(70),
    marginTop: responsiveHeight(1),
  },
  image1: {
    alignSelf: 'flex-end',
    bottom: 60,
  },
  locationText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.8),
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
  },
  nearLocationText: {
    color: '#4d5461',
    fontFamily: 'PlusJakartaSans j',
    textAlign: 'center',
  },
  inputView: {
    width: responsiveWidth(24),
    height: responsiveHeight(6.8),
    borderRadius: 4,
    backgroundColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: responsiveWidth(92),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  input: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(40),
    borderRadius: 4,
    backgroundColor: '#9fc5e9',
    fontFamily: 'PlusJakartaSans j',
  },
  input1: {
    width: responsiveWidth(20),
    height: responsiveHeight(5),
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rentText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
  },
  inputIconView: {
    flexDirection: 'row',
    height: responsiveHeight(6.8),
    width: responsiveWidth(66),
    borderRadius: 4,
    backgroundColor: '#9fc5e9',
    alignItems: 'center',
    padding: 10,
  },
  imageView: {
    flexDirection: 'row',
  },
  itemView: {
    flex: 1,
    margin: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  iconView: {
    height: 34,
    width: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(44),
    marginTop: responsiveHeight(1),
    alignItems: 'center',
    left: responsiveWidth(3.2),
  },
  descriptuonView: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#9fc5e9',
    width: responsiveWidth(50),
  },
  rentText1: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  icon: {
    marginTop: responsiveHeight(1),
  },
  monthText: {
    color: '#4d5461',
    fontSize: responsiveFontSize(1.4),
  },
  buildingNameText: {
    left: responsiveWidth(3.2),
    color: '#000929',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  addressText: {
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.3),
    left: responsiveWidth(3.2),
  },
  carIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.2),
    fontSize: responsiveFontSize(1.3),
    color: '#9b9b9b',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(40),
    left: responsiveWidth(3.2),
    marginTop: responsiveHeight(1),
  },
  carIconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(10),
    left: responsiveWidth(3.2),
    marginTop: responsiveHeight(1),
  },
  button: {
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    paddingVertical: 14,
    width: responsiveWidth(90),
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  tenantsAndLandlordsView: {
    height: responsiveHeight(126),
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(3.2),
  },
  headerText: {
    color: 'white',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(3.2),
  },
  descriptionText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.7),
    left: responsiveWidth(1),
    lineHeight: 21,
  },
  descriptionView1: {
    width: responsiveWidth(96),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
  },
  homeTourView: {
    backgroundColor: '#403b77',
    height: responsiveHeight(20),
    width: responsiveWidth(94),
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(3.2),
  },
  circleView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#100a55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(4),
    width: responsiveWidth(70),
  },
  homeTourText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(5.2),
  },
  detailsView: {
    left: responsiveWidth(5.2),
    width: responsiveWidth(70),
    marginTop: responsiveHeight(2),
  },
  detailsText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
    lineHeight: 18,
  },
  percentageDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(86),
    left: responsiveWidth(3.2),
    marginTop: responsiveHeight(2),
    flexWrap: 'wrap',
  },
  noSpamText: {
    color: '#073762',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
    textAlign: 'center',
    marginTop: responsiveHeight(2),
  },
  landlordText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    textAlign: 'center',
  },
  discoverView: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveFontSize(2),
  },
  discoverText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
  },
  inputView1: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(7.6),
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    padding: 10,
    elevation: 1,
  },
  submitButton: {
    backgroundColor: '#073762',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(26),
    height: responsiveHeight(5.6),
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  joinText: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.6),
    marginBottom: responsiveHeight(4.8),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    fontFamily: 'PlusJakartaSans j',
  },
  text: {
    color: '#073762',
    fontSize: responsiveFontSize(1.6),
    marginBottom: responsiveHeight(4.8),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    fontFamily: 'PlusJakartaSans j',
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 206,
    width: 343,
    alignSelf: 'center',
    marginTop: responsiveHeight(28),
  },
  verifyText: {
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    marginTop: responsiveHeight(1),
  },
  crossIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  line: {
    height: 0.2,
    backgroundColor: '#6c727f',
    width: responsiveWidth(87),
    marginTop: responsiveHeight(2.8),
  },
  verifyButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(80),
    height: responsiveHeight(4.8),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
  },
  buttonText2: {
    fontFamily: 'PlusJakartaSans j',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
  },
  modalTextView: {
    width: responsiveWidth(60),
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2.8),
  },
  modalText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    color: '#9b9b9b',
  },
});
