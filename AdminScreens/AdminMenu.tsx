import {
  Image,
  SafeAreaView,
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
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  navigation: any;
}

const AdminMenu: React.FC<Props> = ({navigation}) => {
  const [selectButton, setSelectButton] = useState(0);

  const options = [
    {id: 1, optionText: 'Dashboard', navigationPage: 'DashBoard'},
    {id: 2, optionText: 'Properties', navigationPage: 'Properties'},
    {id: 3, optionText: 'Customer', navigationPage: 'Customer'},
    {id: 4, optionText: 'Analytics', navigationPage: 'Analytics'},
    {id: 5, optionText: 'Messages', navigationPage: 'Messages'},
    {id: 6, optionText: 'Profile', navigationPage: 'ProfileAdmin'},
    {id: 7, optionText: 'Settings', navigationPage: 'settingsAccount'},
    {
      id: 8,
      optionText: 'Terms & Conditions',
      navigationPage: 'TermsAndConditions',
    },
    {id: 9, optionText: 'Privacy Policy', navigationPage: 'PrivacyPolicy'},
  ];

  const handleSelectOption = (id: number, text: string) => {
    setSelectButton(id);
    navigation.navigate(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <Image source={require('../Images/Vector1.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
            <AntDesign name="close" size={22} color="#073762" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {options.map(item => (
          <View>
            <TouchableOpacity
              style={
                selectButton === item.id ? styles.activeButton : styles.button
              }
              onPress={() => handleSelectOption(item.id, item.navigationPage)}>
              <Text
                style={
                  selectButton === item.id
                    ? styles.activeButtonText
                    : styles.buttonText
                }>
                {item.optionText}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default AdminMenu;
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
    marginBottom: responsiveHeight(2.8),
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  buttonText: {
    color: '#737787',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  button: {
    borderRadius: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
  },
  activeButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  activeButton: {
    backgroundColor: '#073762',
    borderRadius: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    margin: 10,
  },
});
