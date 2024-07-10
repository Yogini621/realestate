import {
  Alert,
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialComminityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {addTermsAndConditions, addTermsDraft} from '../redux/actions/actionTypes';

interface Props {
  navigation: any;
}

const TermsAndConditionsAdmin: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const terms = useSelector((state: RootState) => state.terms.terms);

  const handleAddTerms = () => {
    if (title === '') {
      Alert.alert('Enter Title');
    } else if (description === '') {
      Alert.alert('Enter Description');
    } else {
      dispatch(addTermsAndConditions({id: Date.now(), title, description}));
    }
  };

  const handleAddDraft = () => {
     if (title === '') {
       Alert.alert('Enter Title');
     } else if (description === '') {
       Alert.alert('Enter Description');
     } else {
       dispatch(addTermsDraft({id: Date.now(), title, description}));
     }
  }

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
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificationList')}>
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
        <Text style={styles.privacyText}>Terms & Conditions</Text>
        <View style={styles.draftButtonView}>
          <TouchableOpacity
            style={styles.draftButton}
            onPress={() => navigation.navigate('TermsDraft')}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="#073762"
            />
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <View style={styles.addAndPublishButtonDirection}>
            <TouchableOpacity style={styles.addButton}>
              <FontAwesome name="plus" size={20} color="white" />
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.publishButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.publishText}>Publish</Text>
              <Feather name="chevron-down" size={22} color="#000000" />
            </TouchableOpacity>  
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Write Your Title|"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.countText}>200</Text>
        </View>
        <Text style={styles.termsAndConditionText}>
          Terms & Conditions Description
          <Text style={styles.requiredText}>*</Text>
        </Text>
        <TextInput
          style={styles.input1}
          placeholder="Add Your description"
          value={description}
          onChangeText={setDescription}
        />
        {terms.map(item => (
          <View style={styles.policyView} key={item.id}>
            <View style={styles.titleAndDateView}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </View>
        ))}
        <View style={styles.publishAndSaveAsDraftButtonView}>
          <TouchableOpacity
            style={
              title === ''
                ? styles.publishButtonFooter
                : styles.publishButtonFooterActive
            }
            disabled={title === '' ? true : false}
            onPress={handleAddTerms}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="white"
            />
            <Text style={styles.publishText1}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              title === ''
                ? styles.publishButtonFooter
                : styles.publishButtonFooterActive
            }
            onPress={handleAddDraft}
            disabled={title === '' ? true : false}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="white"
            />
            <Text style={styles.publishText1}>Save as Draft</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {modalVisible && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.modalPublishText}>Publish</Text>
              <Text style={styles.labelText}>
                Status<Text style={styles.requiredText}>*</Text>
              </Text>
              <View style={styles.inputView1}>
                <TextInput
                  placeholder="Status"
                  style={styles.modalInput}
                  placeholderTextColor="#c6c8cb"
                />
              </View>
              <Text style={styles.labelText}>
                Visibility<Text style={styles.requiredText}>*</Text>
              </Text>
              <View style={styles.inputView1}>
                <TextInput
                  placeholder="Visibility"
                  style={styles.modalInput}
                  placeholderTextColor="#c6c8cb"
                />
              </View>
              <Text style={styles.labelText}>
                Schedule Date & Time<Text style={styles.requiredText}>*</Text>
              </Text>
              <View style={styles.inputView1}>
                <TextInput
                  placeholder="DD MM YYYY"
                  style={styles.modalInput}
                  placeholderTextColor="#c6c8cb"
                />
              </View>
              <View style={styles.modalButtonView}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.publishButton1}>
                  <Text style={styles.publishTextModal}>Publish</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};
export default TermsAndConditionsAdmin;
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
  },
  privacyText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2.8),
  },
  draftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
  },
  addAndPublishButtonDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(42),
  },
  addButton: {
    backgroundColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draftsText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  addText: {
    color: 'white',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  publishButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  publishText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    right: responsiveWidth(1),
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#a4aeb4',
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 10,
    marginTop: responsiveHeight(4.8),
    height: responsiveHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans j',
    color: '#000000',
    width: responsiveWidth(76),
  },
  countText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
    color: '#a4aeb4',
  },
  termsAndConditionText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  requiredText: {
    color: 'red',
  },
  publishAndSaveAsDraftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(78),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(34),
  },
  publishButtonFooter: {
    backgroundColor: '#07376266',
    padding: 10,
    borderRadius: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishText1: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  input1: {
    borderWidth: 1,
    borderColor: '#a4aeb4',
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 10,
    marginTop: responsiveHeight(2),
    height: responsiveHeight(6),
    alignItems: 'center',
    padding: 10,
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    marginBottom: responsiveHeight(2),
  },
  modalPublishText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(3.2),
    marginBottom: responsiveHeight(1.8),
  },
  modal: {
    flex: 1,
    alignSelf: 'flex-end',
    right: responsiveWidth(4),
    top: responsiveHeight(28),
  },
  modalView: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: responsiveWidth(72),
    elevation: 5,
    borderRadius: 10,
  },
  labelText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(1),
    left: responsiveWidth(3.2),
  },
  modalInput: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
  },
  inputView1: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 10,
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: responsiveHeight(1),
  },
  modalButtonView: {
    left: responsiveWidth(3.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(52),
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    padding: 10,
    borderRadius: 10,
  },
  deleteText: {
    color: '#727880',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  publishButton1: {
    backgroundColor: '#073762',
    borderRadius: 10,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  publishTextModal: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  publishButtonFooterActive: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  policyView: {
    backgroundColor: '#ffffff',
    elevation: 3,
    width: responsiveWidth(90),
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10,
  },
  titleText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  titleAndDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  descriptionView: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2.8),
  },
  descriptionText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 21,
  },
});
