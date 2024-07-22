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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropertyDetailsComponent from './PropertyDetailsComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {SelectList} from 'react-native-dropdown-select-list';
import {addProperty, deleteProperty} from '../redux/actions/actionTypes';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  navigation: any;
}

const Sales: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const properties = useSelector((state: RootState) => state.property.property);
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const PropertyType = [
    {key: '3 Bhk', value: '3 Bhk'},
    {key: '2 Bhk', value: '2 Bhk'},
    {key: '1 Bhk', value: '1 Bhk'},
  ];

  const PaymentType = [
    {key: 'Online', value: 'Online'},
    {key: 'Cash', value: 'Cash'},
    {key: 'Check', value: 'Check'},
  ];

  const selectStatus = [
    {key: 'Active', value: 'Active'},
    {key: 'Sold', value: 'Sold'},
  ];

  const handleAddProperty = () => {
    if (property === '') {
      Alert.alert('Select Property');
    } else if (date === '') {
      Alert.alert('Select Date');
    } else if (paymentType === '') {
      Alert.alert('Select Payment Type');
    } else if (email === '') {
      Alert.alert('Enter Email');
    } else if (status === '') {
      Alert.alert('Select Status');
    } else {
      dispatch(
        addProperty({
          id: Date.now(),
          property,
          date,
          paymentType,
          amount,
          email,
          status,
        }),
      );
      setModalVisible(false);
    }
  };

  const handleDeleteProperty = (id: number) => {
    dispatch(deleteProperty(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MenuPageSeller')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Images/user.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.salesText}>Sales</Text>
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#3a52aa59" size={22} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#3a52aa59"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons name="sort" color="#1a202c" size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons name="sort" color="#1a202c" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Entypo name="plus" color="white" size={16} />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <TouchableOpacity
              style={styles.buldingDataView}
              onPress={() => setViewModal(true)}>
              <Text style={styles.bhkText}>3BHK 3Baths</Text>
              <Text style={styles.prestigeText}>
                in Prestige High Fields,Gachibowli
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity>
              <AntDesign name="edit" color="#727272" size={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete-outline" color="#727272" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.propertyDetailsView}>
          <PropertyDetailsComponent
            label="Date"
            labelText="JUL 29,2023"
            optionText="At 8:00"
          />
          <PropertyDetailsComponent label="Payment" labelText="Check" />
          <PropertyDetailsComponent
            label="Amount"
            labelText="$30K"
            labelTextColor="#9ca8d4"
          />
          <PropertyDetailsComponent
            label="Status"
            labelText="Pending"
            labelTextColor="#9ca8d4"
          />
        </View>
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>3BHK 3Baths</Text>
              <Text style={styles.prestigeText}>
                in Prestige High Fields,Gachibowli
              </Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity>
              <AntDesign name="edit" color="#727272" size={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete-outline" color="#727272" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.propertyDetailsView}>
          <PropertyDetailsComponent
            label="Date"
            labelText="JUL 29,2023"
            optionText="At 8:00"
          />
          <PropertyDetailsComponent label="Payment" labelText="Check" />
          <PropertyDetailsComponent
            label="Amount"
            labelText="$30K"
            labelTextColor="#9ca8d4"
          />
          <PropertyDetailsComponent
            label="Status"
            labelText="Pending"
            labelTextColor="#9ca8d4"
          />
        </View>
        <View style={styles.seperator} />
        {properties.map(item => (
          <View key={item.id}>
            <View style={styles.propertyDataView}>
              <View style={styles.imageView}>
                <Image source={require('../Images/Rectangl.png')} />
                <TouchableOpacity
                  style={styles.buldingDataView}
                  onPress={() => setViewModal(true)}>
                  <Text style={styles.bhkText}>{item.property}</Text>
                  <Text style={styles.prestigeText}>
                    in Prestige High Fields,Gachibowli
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setEditModalVisible(true)}>
                  <AntDesign name="edit" color="#727272" size={28} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteModal(true)}>
                  <MaterialIcons
                    name="delete-outline"
                    color="#727272"
                    size={28}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.propertyDetailsView}>
              <PropertyDetailsComponent
                label="Date"
                labelText={item.date}
                optionText="At 8:00"
              />
              <PropertyDetailsComponent
                label="Payment"
                labelText={item.paymentType}
              />
              <PropertyDetailsComponent
                label="Amount"
                labelText={item.amount}
                labelTextColor="#9ca8d4"
              />
              <PropertyDetailsComponent
                label="Status"
                labelText={item.status}
                labelTextColor="#9ca8d4"
              />
            </View>
            <View style={styles.seperator} />
            <Modal visible={viewModal} animationType="slide" transparent={true}>
              <ScrollView>
                <View style={styles.modalView}>
                  <View style={styles.centerdModal}>
                    <Text style={styles.addNewAddressText}>
                      {item.property}
                    </Text>
                    <View style={styles.seperator1} />
                    <Text style={styles.labelText}>Property</Text>
                    <SelectList
                      setSelected={setProperty}
                      data={PropertyType}
                      boxStyles={styles.input1}
                      placeholder="Select Property"
                      fontFamily="PlusJakartaSans j"
                      save="value"
                    />
                    <Text style={styles.labelText}>Date</Text>
                    <TextInput
                      placeholder="DD/MM/YYYY"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setDate}
                      value={item.date}
                    />
                    <Text style={styles.labelText}>Payment Type</Text>
                    <SelectList
                      setSelected={setPaymentType}
                      data={PaymentType}
                      boxStyles={styles.input1}
                      placeholder="Select Payment Type"
                      fontFamily="PlusJakartaSans j"
                    />
                    <Text style={styles.labelText}>Amount</Text>
                    <TextInput
                      placeholder="Enter Amount"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setAmount}
                      value={item.amount}
                    />
                    <Text style={styles.labelText}>Customer Email</Text>
                    <TextInput
                      placeholder="Enter Customer Email"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setEmail}
                      value={item.email}
                    />
                    <Text style={styles.labelText}>Status</Text>
                    <SelectList
                      setSelected={setStatus}
                      data={selectStatus}
                      boxStyles={styles.input1}
                      placeholder="Select Status"
                      fontFamily="PlusJakartaSans j"
                    />
                    <View style={styles.buttonView}>
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => setViewModal(false)}>
                        <Text style={styles.cancelText}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={handleAddProperty}>
                        <Text style={styles.saveText}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </Modal>

            <Modal
              visible={deleteModal}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.logoutMdal}>
                  <View style={styles.crossIconView}>
                    <Text style={styles.verifyText}>Delete</Text>
                  </View>
                  <View style={styles.seperator1} />
                  <Text style={styles.logoutText}>
                    Are you sure you want to Delete?
                  </Text>
                  <View style={styles.buttonDirectionView}>
                    <TouchableOpacity
                      style={styles.logOutButton1}
                      onPress={() => handleDeleteProperty(item.id)}>
                      <Text style={styles.activeButtonText}>Yes,I want to</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.inActiveLogoutBtn}
                      onPress={() => setDeleteModal(false)}>
                      <Text style={styles.inActiveButtonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            <Modal
              visible={editModalVisible}
              animationType="slide"
              transparent={true}>
              <ScrollView>
                <View style={styles.modalView}>
                  <View style={styles.centerdModal}>
                    <Text style={styles.addNewAddressText}>
                      {item.property}
                    </Text>
                    <View style={styles.seperator1} />
                    <Text style={styles.labelText}>Property</Text>
                    <SelectList
                      setSelected={setProperty}
                      data={PropertyType}
                      boxStyles={styles.input1}
                      placeholder="Select Property"
                      fontFamily="PlusJakartaSans j"
                      save="value"
                    />
                    <Text style={styles.labelText}>Date</Text>
                    <TextInput
                      placeholder="DD/MM/YYYY"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setDate}
                      value={item.date}
                    />
                    <Text style={styles.labelText}>Payment Type</Text>
                    <SelectList
                      setSelected={setPaymentType}
                      data={PaymentType}
                      boxStyles={styles.input1}
                      placeholder="Select Payment Type"
                      fontFamily="PlusJakartaSans j"
                    />
                    <Text style={styles.labelText}>Amount</Text>
                    <TextInput
                      placeholder="Enter Amount"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setAmount}
                      value={item.amount}
                    />
                    <Text style={styles.labelText}>Customer Email</Text>
                    <TextInput
                      placeholder="Enter Customer Email"
                      style={styles.input1}
                      placeholderTextColor="#9ea3ae"
                      onChangeText={setEmail}
                      value={item.email}
                    />
                    <Text style={styles.labelText}>Status</Text>
                    <SelectList
                      setSelected={setStatus}
                      data={selectStatus}
                      boxStyles={styles.input1}
                      placeholder="Select Status"
                      fontFamily="PlusJakartaSans j"
                    />
                    <View style={styles.buttonView}>
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => setEditModalVisible(false)}>
                        <Text style={styles.cancelText}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={handleAddProperty}>
                        <Text style={styles.saveText}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </Modal>
          </View>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ScrollView>
          <View style={styles.modalView}>
            <View style={styles.centerdModal}>
              <Text style={styles.addNewAddressText}>
                Add Property Sales Details
              </Text>
              <View style={styles.seperator1} />
              <Text style={styles.labelText}>Property</Text>
              <SelectList
                setSelected={setProperty}
                data={PropertyType}
                boxStyles={styles.input1}
                placeholder="Select Property"
                fontFamily="PlusJakartaSans j"
                save="value"
              />
              <Text style={styles.labelText}>Date</Text>
              <TextInput
                placeholder="DD/MM/YYYY"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setDate}
                value={date}
              />
              <Text style={styles.labelText}>Payment Type</Text>
              <SelectList
                setSelected={setPaymentType}
                data={PaymentType}
                boxStyles={styles.input1}
                placeholder="Select Payment Type"
                fontFamily="PlusJakartaSans j"
              />
              <Text style={styles.labelText}>Amount</Text>
              <TextInput
                placeholder="Enter Amount"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setAmount}
                value={amount}
              />
              <Text style={styles.labelText}>Customer Email</Text>
              <TextInput
                placeholder="Enter Customer Email"
                style={styles.input1}
                placeholderTextColor="#9ea3ae"
                onChangeText={setEmail}
                value={email}
              />
              <Text style={styles.labelText}>Status</Text>
              <SelectList
                setSelected={setStatus}
                data={selectStatus}
                boxStyles={styles.input1}
                placeholder="Select Status"
                fontFamily="PlusJakartaSans j"
              />
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleAddProperty}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default Sales;

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
  salesText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  inputView: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(50),
    borderWidth: 2,
    borderColor: '#073762',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  input: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
  },
  sortIconButton: {
    width: responsiveWidth(11.4),
    borderWidth: 2,
    borderColor: '#073762',
    borderRadius: 10,
    alignItems: 'center',
    height: responsiveHeight(7.2),
    justifyContent: 'center',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#073762',
    borderRadius: 8,
    height: responsiveHeight(7.2),
    width: responsiveWidth(14.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans j',
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
  },
  bhkText: {
    color: '#111827',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  prestigeText: {
    color: '#5a5b78',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  buldingDataView: {
    left: responsiveWidth(2),
  },
  iconView: {
    flexDirection: 'row',
    width: responsiveWidth(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyDetailsView: {},
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
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
    height: responsiveHeight(100),
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
  input1: {
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
  inputView1: {
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
  input2: {
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
  seperator1: {
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
  logoutMdal: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  logoutText: {
    color: '#333333',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    marginBottom: responsiveHeight(3.6),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(6),
  },
  logOutButton1: {
    backgroundColor: '#073762',
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveLogoutBtn: {
    borderRadius: 8,
    height: responsiveHeight(7.2),
    width: responsiveWidth(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#9fc5e9',
  },
  activeButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  inActiveButtonText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  crossIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
  },
  verifyText: {
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3.8),
    color: '#f14231',
  },
  buttonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: responsiveWidth(8),
  },
});
