import {
  Alert,
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
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropertyDetails from './PropertyDetails';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {addCustomer, removeCustomer} from '../redux/actions/actionTypes';
import {RootState} from '../redux/reducers';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';

interface Props {
  navigation: any;
}

const Customer: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisble] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customers.customers,
  );

  const [menuVisible, setMenuVisible] = React.useState<{
    [key: number]: boolean;
  }>({});

  const openMenu = (id: number) => {
    setMenuVisible({...menuVisible, [id]: true});
  };

  const closeMenu = (id: number) => {
    setMenuVisible({...menuVisible, [id]: false});
  };

  const handleAddCustomer = () => {
    if (name === '') {
      Alert.alert('Enter Name');
    } else if (contact === '') {
      Alert.alert('Enter Phone Number');
    }
    // else if (status === '') {
    //   Alert.alert('Select Status');
    // }
    else {
      dispatch(
        addCustomer({
          name,
          contact,
          status,
          id: Date.now(),
          image,
        }),
      );
      setModalVisble(false);
    }
  };

  const deleteCustomer = (id: number) => {
    dispatch(removeCustomer(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#073762"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <FontAwesome5 name="grip-lines" size={20} color="#073762" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addCustomerButton}
          onPress={() => setModalVisble(true)}>
          <AntDesign name="plus" color="white" size={20} />
          <Text style={styles.addCustomerText}>Add New Customer</Text>
        </TouchableOpacity>
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#073762" size={26} />
            <TextInput
              placeholder="Search for Customers"
              placeholderTextColor="#00092999"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name="sort-descending"
              color="white"
              size={20}
            />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        {customers.map(item => {
          return (
            <View key={item.id}>
              <View style={styles.propertyDataView}>
                <View style={styles.imageView}>
                  <Image source={require('../Images/LetterA.png')} />
                  <View style={styles.buldingDataView}>
                    <Text style={styles.bhkText}>{item.name} </Text>
                  </View>
                </View>
                <View>
                  <Menu
                    visible={menuVisible[item.id] || false}
                    anchor={
                      <TouchableOpacity onPress={() => openMenu(item.id)}>
                        <Entypo
                          name="dots-three-vertical"
                          size={18}
                          color="gray"
                          testID="menu"
                        />
                      </TouchableOpacity>
                    }
                    onRequestClose={() => closeMenu(item.id)}>
                    <MenuItem onPress={() => deleteCustomer(item.id)}>
                      Delete{' '}
                    </MenuItem>
                    <MenuDivider />
                  </Menu>
                </View>
              </View>
              <PropertyDetails
                label="Phone Number"
                labelText={item.contact}
                labelTextColor="#111827"
              />
              <PropertyDetails
                label="Status"
                labelText={item.status}
                labelTextColor="#3c8500"
              />
              <PropertyDetails
                label="Recent Activity"
                labelText="Sell"
                labelTextColor="#111827"
              />
              <View style={styles.seperator} />
            </View>
          );
        })}
      </ScrollView>
      {modalVisible && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View>
            <View style={styles.addCustomerModalView}>
              <Text style={styles.addNewCustomerText}>Add New Customer</Text>
              <View style={styles.line} />
              <View style={styles.iamgeUploadView}>
                <Image source={require('../Images/Background.png')} />
                <Image
                  source={require('../Images/photo.png')}
                  style={styles.cameraImage}
                />
                <View>
                  <Text style={styles.dropText}>Drop your image here,</Text>
                  <Text style={styles.orText}>or</Text>
                  <Text style={styles.selectText}>
                    select{' '}
                    <Text style={styles.clickToBrowseText}>
                      Click to browse
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={styles.labelText}>Name</Text>
              <TextInput
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
                style={styles.modalInput}
              />
              <Text style={styles.labelText}>Phone Number</Text>
              <TextInput
                placeholder="Enter Phone Number"
                value={contact}
                onChangeText={setContact}
                style={styles.modalInput}
              />
              <Text style={styles.labelText}>Status</Text>
              <View style={styles.modalInputView}>
                <TextInput
                  placeholder="Select Status"
                  style={styles.modalInput1}
                  value={status}
                  onChangeText={setStatus}
                />
                <TouchableOpacity>
                  <Feather name="chevron-down" color="#718096" size={18} />
                </TouchableOpacity>
              </View>
              <View style={styles.cancelAndSaveButtonView}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisble(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButon}
                  onPress={handleAddCustomer}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Customer;

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
  iconView: {
    width: responsiveWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addCustomerButton: {
    backgroundColor: '#073762',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    width: responsiveWidth(58),
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(2.8),
    right: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCustomerText: {
    color: 'white',
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: responsiveWidth(66),
    backgroundColor: '#f7f7fd',
    paddingHorizontal: 16,
  },
  input: {
    fontSize: responsiveFontSize(1.6),
    left: responsiveWidth(2),
    width: responsiveWidth(56),
  },
  filterButton: {
    backgroundColor: '#073762',
    paddingHorizontal: 16,
    height: responsiveHeight(6.8),
    borderRadius: 10,
    width: responsiveWidth(22),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filterText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
    marginLeft: responsiveWidth(2),
  },
  propertyDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    marginBottom: responsiveHeight(2.8),
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bhkText: {
    color: '#111827',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
  },
  prestigeText: {
    color: '#5a5b78',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  buldingDataView: {
    left: responsiveWidth(2),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  addCustomerModalView: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 10,
    marginTop: responsiveHeight(10),
  },
  addNewCustomerText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.4),
    left: responsiveWidth(2),
  },
  line: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(80),
    backgroundColor: '#dbdbdb',
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  iamgeUploadView: {
    borderWidth: 2,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(78),
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  cameraImage: {
    position: 'absolute',
    left: responsiveWidth(10),
    top: responsiveHeight(5),
  },
  dropText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
  },
  orText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    textAlign: 'center',
  },
  selectText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
  },
  clickToBrowseText: {
    color: '#37d159',
    fontFamily: 'PlusJakartaSans j',
  },
  labelText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(4),
    fontSize: responsiveFontSize(1.8),
  },
  modalInput: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 10,
    marginTop: responsiveHeight(1),
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans j',
    color: '#718096',
    marginBottom: responsiveHeight(2.8),
    fontSize: responsiveFontSize(2),
    paddingHorizontal: 20,
  },
  modalInputView: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 10,
    marginTop: responsiveHeight(1),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2.8),
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalInput1: {
    fontFamily: 'PlusJakartaSans j',
    color: '#718096',
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(70),
  },
  cancelAndSaveButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(46),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(10),
    left: responsiveWidth(4),
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: '#073762',
    padding: 10,
    borderRadius: 10,
  },
  cancelText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    paddingHorizontal: 10,
  },
  saveButon: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    fontFamily: 'PlusJakartaSans j',
    paddingHorizontal: 10,
    color: 'white',
  },
});
