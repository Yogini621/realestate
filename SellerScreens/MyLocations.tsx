import {
  Alert,
  Modal,
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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress} from '../redux/actions/actionTypes';
import {RootState} from '../redux/reducers';
import {RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyLocations = () => {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.address);
  const [modalVisible, setModalVisible] = useState(false);
  const [streetNo, setStreetNo] = useState('');
  const [flatNo, setFlatNo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectAddress, setSelectAddress] = useState(0);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleAddAddress = () => {
    const details = {streetNo, flatNo, city, state, pincode, id: Date.now()};
    if (streetNo === '') {
      Alert.alert('Enter Street No');
    } else if (flatNo === '') {
      Alert.alert('Enter Flat No');
    } else if (city === '') {
      Alert.alert('Enter City');
    } else if (state === '') {
      Alert.alert('Enter State');
    } else if (pincode === '') {
      Alert.alert('Enter Pincode');
    } else {
      dispatch(addAddress(details));
      setModalVisible(false);
      console.log(details);
    }
  };

  const handleAddressSelection = (id: number) => {
    setSelectAddress(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addAddressButton}
        onPress={() => setModalVisible(true)}>
        <AntDesign name="pluscircleo" color="#3d4254" size={20} />
        <Text style={styles.addAddressText}>Add New Address</Text>
      </TouchableOpacity>
      {address.map(item => (
        <View style={styles.addressView}>
          <View style={styles.addressDirectionView}>
            <RadioButton
              value=""
              status={selectAddress === item.id ? 'checked' : 'unchecked'}
              onPress={() => handleAddressSelection(item.id)}
              color="#073762"
            />
            <View>
              <View style={styles.addressTextView}>
                <Text style={styles.addressText}>
                  {item.streetNo},{item.flatNo},{item.city},{item.state},
                  {item.pincode}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.editIconButton}
                onPress={() => setEditModalVisible(true)}>
                <MaterialIcons name="edit" size={16} color="#9fc5e9" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteIconButton}>
                <AntDesign name="delete" size={14} color="#ff1c1c80" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.centerdModal}>
            <Text style={styles.addNewAddressText}>Add New Address</Text>
            <View style={styles.seperator} />
            <Text style={styles.labelText}>Street No</Text>
            <TextInput
              placeholder="Enter Street No"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setStreetNo}
              value={streetNo}
            />
            <Text style={styles.labelText}>House/Flat No*</Text>
            <TextInput
              placeholder="Enter House/Flat No"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setFlatNo}
              value={flatNo}
            />
            <Text style={styles.labelText}>City*</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Select City"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setCity}
                value={city}
              />
              <TouchableOpacity>
                <Entypo name="chevron-small-down" color="#9ea3ae" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.labelText}>State*</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Select State"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setState}
                value={state}
              />
              <TouchableOpacity>
                <Entypo name="chevron-small-down" color="#9ea3ae" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.labelText}>Pin Code*</Text>
            <TextInput
              placeholder="Enter Pin Code"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setPincode}
              value={pincode}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAddAddress}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.centerdModal}>
            <Text style={styles.addNewAddressText}>Edit Address</Text>
            <View style={styles.seperator} />
            <Text style={styles.labelText}>Street No</Text>
            <TextInput
              placeholder="Enter Street No"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setStreetNo}
              value={streetNo}
            />
            <Text style={styles.labelText}>House/Flat No*</Text>
            <TextInput
              placeholder="Enter House/Flat No"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setFlatNo}
              value={flatNo}
            />
            <Text style={styles.labelText}>City*</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Select City"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setCity}
                value={city}
              />
              <TouchableOpacity>
                <Entypo name="chevron-small-down" color="#9ea3ae" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.labelText}>State*</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Select State"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setState}
                value={state}
              />
              <TouchableOpacity>
                <Entypo name="chevron-small-down" color="#9ea3ae" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.labelText}>Pin Code*</Text>
            <TextInput
              placeholder="Enter Pin Code"
              style={styles.input}
              placeholderTextColor="#9ea3ae"
              onChangeText={setPincode}
              value={pincode}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setEditModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAddAddress}>
                <Text style={styles.saveText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default MyLocations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addAddressButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 10,
    right: responsiveWidth(4.8),
    alignItems: 'center',
    width: responsiveWidth(50),
    justifyContent: 'center',
    marginTop: responsiveHeight(2.8),
  },
  addAddressText: {
    color: '#3d4254',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2.8),
  },
  modalView: {
    margin: 34,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: responsiveHeight(90),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  addNewAddressText: {
    color: '#111827',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.2),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2.6),
  },
  centerdModal: {
    flex: 1,
    //     justifyContent: 'center',
  },
  labelText: {
    color: '#111827',
    left: responsiveWidth(6),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
  input: {
    borderWidth: 1,
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#9fc5e9',
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 6,
    height: responsiveHeight(7.4),
    color: '#acadb9',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
  },
  inputView: {
    borderWidth: 1,
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#9fc5e9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 10,
    height: responsiveHeight(7.4),
  },
  input1: {
    color: '#acadb9',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(68),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(36),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#073762',
    padding: 10,
    borderRadius: 10,
  },
  saveButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#073762',
    left: responsiveWidth(2),
  },
  cancelText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  saveText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  seperator: {
    height: responsiveHeight(0.2),
    backgroundColor: '#dbdbdb',
    width: responsiveWidth(78),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  addressDirectionView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: responsiveWidth(86),
    //     alignItems:'center'
    justifyContent: 'center',
  },
  addressView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    backgroundColor: 'white',
    padding: 10,
    height: responsiveHeight(16),
    borderRadius: 10,
  },
  addressTextView: {
    width: responsiveWidth(68),
  },
  editIconButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 10,
    height: responsiveHeight(3.4),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  deleteIconButton: {
    borderWidth: 1,
    borderColor: '#ff1c1c80',
    borderRadius: 10,
    backgroundColor: '#ffcdcd',
    height: responsiveHeight(3.4),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  addressText: {
    color: '#000000cc',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
});
