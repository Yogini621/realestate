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
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {RadioButton} from 'react-native-paper';
import OptionSelect from '../SellerScreens/OptionSelect';

interface Props {
  navigation: any;
}

const Sell: React.FC<Props> = ({navigation}) => {
  const [sellPropertyState, setSellPropertyState] = useState(false);
  const [rentPropertyState, setRentPropertyState] = useState(false);
  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
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
        <View style={styles.stepView}>
          <Text style={styles.lookIntoText}>You are look into</Text>
          <Text style={styles.stepText}>STEP 0 OF 4</Text>
        </View>
        <View style={styles.homeIconDirectionView}>
          <View style={styles.homeIconView}>
            <Entypo name="home" size={24} color="#073762" />
          </View>
          <View style={styles.sellTextView}>
            <TouchableOpacity onPress={() => setSellPropertyState(true)}>
              <Text style={styles.sellText}>Sell</Text>
              <Text style={styles.lookStraightText}>
                Look Straight in Your Cam For 30 Seconds
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.homeIconDirectionView}>
          <View style={styles.homeIconView}>
            <Entypo name="home" size={24} color="#073762" />
          </View>
          <View style={styles.sellTextView}>
            <TouchableOpacity>
              <Text style={styles.sellText}>Rent</Text>
              <Text style={styles.lookStraightText}>
                Proof Of Your Residaency Via Passport / ID Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.getHelpTextView}>
          <Text style={styles.lostText}>Lost or have trouble?</Text>
          <TouchableOpacity style={styles.getHelpView}>
            <Text style={styles.getHelpText}>{"     "}Get help</Text>
            <MaterialIcons name="arrow-right-alt" size={26} color="#073762" />
          </TouchableOpacity>
        </View>
        {sellPropertyState ? (
          <View style={styles.sellProprtyOptionsView}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSellPropertyState(false)}>
              <Fontisto name="arrow-left-l" size={16} color="#073762" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.postingPropertyText}>
              Start Posting your property,it's free
            </Text>
            <Text style={styles.basicDetailsText}>Add Basic details</Text>
            <Text style={styles.andItsText}>And it's a...</Text>
            <View style={styles.residentialAndCommercialButtonView}>
              <View style={styles.residentialButtonView}>
                <RadioButton
                  status={residential ? 'checked' : 'unchecked'}
                  value="residential"
                  color="#073762"
                />
                <Text style={styles.residentialText}>Residential</Text>
              </View>
              <View style={styles.residentialButtonView}>
                <RadioButton
                  status={commercial ? 'checked' : 'unchecked'}
                  value="commercial"
                  color="#073762"
                />
                <Text style={styles.residentialText}>Commercial</Text>
              </View>
            </View>
            <View style={styles.optionsView}>
              <OptionSelect
                optionText="Flat/Apartment"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Independent House/Villa"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Plot/Land"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Independent.Builder Floor"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Plot/Land"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Farmhouse"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="1 RK/Studio Apartment"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Serviced Apartment"
                onPress={() => console.log('hello')}
              />
              <OptionSelect
                optionText="Other"
                onPress={() => console.log('hello')}
              />
            </View>
            <View style={styles.residentialAndCommercialButtonView}>
              <TouchableOpacity style={styles.saveAsDraftButton}>
                <Text style={styles.saveAsDraftsText}>Save as drafts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextStepButton}
                onPress={() => navigation.navigate('AddProperty')}>
                <Text style={styles.nextStepText}>Next step</Text>
                <MaterialIcons name="arrow-right-alt" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.rentPropertyView}>
              <View style={styles.sellTextView1}>
                <Text style={styles.sellText1}>
                  Sell or Rent Your Property{' '}
                  <Text style={styles.fasterText}>Faster </Text>with
                  E-Property.com
                </Text>
              </View>
              <View style={styles.advertiseView}>
                <AntDesign name="checkcircleo" color="#003fc3" size={18} />
                <Text style={styles.advertiseText}>Advertise for FREE</Text>
              </View>
              <View style={styles.advertiseView}>
                <AntDesign name="checkcircleo" color="#003fc3" size={18} />
                <Text style={styles.advertiseText}>Get unlimited enquires</Text>
              </View>
              <View style={styles.advertiseView}>
                <AntDesign name="checkcircleo" color="#003fc3" size={18} />
                <Text style={styles.advertiseText}>
                  Get shortlisted buyers and tenants*
                </Text>
              </View>
              <View style={styles.advertiseView}>
                <AntDesign name="checkcircleo" color="#003fc3" size={18} />
                <Text style={styles.advertiseText}>
                  Assistance in coordinating site visits*
                </Text>
              </View>
              <Image
                source={require('../Images/home.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.footerView}>
              <Text style={styles.privacyText}>Privacy Policy</Text>
              <Text style={styles.privacyText}>Copyright 2023</Text>
            </View>
          </View>
        )}

        {/* <View style={styles.rentPropertyView}>
          <View style={styles.sellTextView1}>
            <Text style={styles.sellText1}>
              Sell or Rent Your Property{' '}
              <Text style={styles.fasterText}>Faster </Text>with E-Property.com
            </Text>
          </View>
          <View style={styles.advertiseView}>
            <AntDesign name="checkcircleo" color="#003fc3" size={18} />
            <Text style={styles.advertiseText}>Advertise for FREE</Text>
          </View>
          <View style={styles.advertiseView}>
            <AntDesign name="checkcircleo" color="#003fc3" size={18} />
            <Text style={styles.advertiseText}>Get unlimited enquires</Text>
          </View>
          <View style={styles.advertiseView}>
            <AntDesign name="checkcircleo" color="#003fc3" size={18} />
            <Text style={styles.advertiseText}>
              Get shortlisted buyers and tenants*
            </Text>
          </View>
          <View style={styles.advertiseView}>
            <AntDesign name="checkcircleo" color="#003fc3" size={18} />
            <Text style={styles.advertiseText}>
              Assistance in coordinating site visits*
            </Text>
          </View>
          <Image source={require('../Images/home.png')} style={styles.image} />
        </View>
        <View style={styles.footerView}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
          <Text style={styles.privacyText}>Copyright 2023</Text>
        </View>  */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Sell;

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
  stepView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    alignItems: 'center',
  },
  lookIntoText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2.4),
  },
  stepText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
  },
  homeIconView: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: 34,
    backgroundColor: '#f4faff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  homeIconDirectionView: {
    width: responsiveWidth(60),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellText: {
    color: '#323142',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans m',
  },
  lookStraightText: {
    color: '#a8a8a8',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 24,
  },
  sellTextView: {
    width: responsiveWidth(50),
    left: responsiveWidth(6),
  },
  getHelpText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  getHelpTextView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    right: responsiveWidth(4.8),
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  getHelpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lostText: {
    color: '#a8a8a8',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 24,
  },
  rentPropertyView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(60),
    elevation: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 6,
    marginBottom: responsiveHeight(2),
  },
  sellText1: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  sellTextView1: {
    width: responsiveWidth(76),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
  fasterText: {
    color: '#56a9f8',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  advertiseView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    left: responsiveWidth(7),
    alignItems: 'center',
    margin: 5,
  },
  advertiseText: {
    color: '#5b6b82',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 24,
    left: responsiveWidth(1.2),
  },
  image: {
    marginTop: responsiveHeight(6.2),
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  privacyText: {
    color: '#718096',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  // ===================================================================================
  sellProprtyOptionsView: {
    height: responsiveHeight(72),
    width: responsiveWidth(90),
    borderRadius: 6,
    backgroundColor: '#ffffff',
    elevation: 3,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(4),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2.8),
  },
  backText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  postingPropertyText: {
    color: '#0b1d2e',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4.8),
  },
  basicDetailsText: {
    color: '#a4aeb4',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(0.6),
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  andItsText: {
    color: '#0b1d2e',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  residentialButtonView: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#9fc5e9',
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(40),
    height: responsiveHeight(7.4),
    paddingHorizontal: 10,
    marginBottom: responsiveHeight(2),
  },
  residentialAndCommercialButtonView: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    width: responsiveWidth(84),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  residentialText: {
    color: '#0b1d2e',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  optionsView: {
    flexDirection: 'row',
    margin: 5,
    flexWrap: 'wrap',
    left: responsiveWidth(2),
  },
  nextStepButton: {
    flexDirection: 'row',
    backgroundColor: '#073762',
    height: responsiveHeight(6.8),
    width: responsiveWidth(40),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextStepText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  saveAsDraftButton: {
    backgroundColor: '#0737621a',
    height: responsiveHeight(6.8),
    width: responsiveWidth(40),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveAsDraftsText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
});
