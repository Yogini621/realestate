import {
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
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SelectList} from 'react-native-dropdown-select-list';
import {data} from '../Screens/data';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: any;
}

interface Tenant {
  id: number;
  image: any;
  date: string;
  rent: string;
  status: string;
  name: string;
}

const Tenants: React.FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [tenants, setTenants] = useState<Tenant[]>([]);

  const TenantsData: Tenant[] = [
    {
      id: 1,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Accepted',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 2,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Rejected',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 3,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Accepted',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 4,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Rejected',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 5,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Accepted',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 6,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Rejected',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 7,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Accepted',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 8,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Rejected',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 9,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Accepted',
      image: require('../Images/valentinoParker.png'),
    },
    {
      id: 10,
      name: 'Valentino Parker',
      date: 'Dec 9, 11:00AM',
      rent: '5,0000',
      status: 'Rejected',
      image: require('../Images/valentinoParker.png'),
    },
  ];

  const data = [
    {key: 'All tenants', value: 'All tenants'},
    {key: 'Accepted', value: 'Accepted'},
    {key: 'Rejected', value: 'Rejected'},
  ];

  const [menuVisible, setMenuVisible] = React.useState<{
    [key: number]: boolean;
  }>({});

  const openMenu = (id: number) => {
    setMenuVisible({...menuVisible, [id]: true});
  };

  const closeMenu = (id: number) => {
    setMenuVisible({...menuVisible, [id]: false});
  };

  const handleRemoveTenants = (id: number) => {
    const updatedTenats = TenantsData.filter(item => item.id !== id);
    setTenants(updatedTenats);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CustomerStackScreen', {
                  screen: 'MenuPageSeller',
                })
              }>
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
              <TouchableOpacity>
                <Image source={require('../Images/user.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.tenancyApplicationText}>Tenancy Application</Text>
        <View style={styles.inputAndAllTenantsButtonView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#6c727f" size={18} />
            <TextInput
              placeholder="Search tenant by name..."
              placeholderTextColor="#6c727f"
              style={styles.input}
            />
          </View>
          <View>
            <SelectList
              setSelected={setSelected}
              data={data}
              boxStyles={styles.allTenantsButton}
              placeholder="All tenants"
              fontFamily="PlusJakartaSans j"
            />
          </View>
        </View>
        {TenantsData.map(item => (
          <View style={styles.tenantView} key={item.id}>
            <View style={styles.iconAndImageView}>
              <Image source={item.image} />
              <View style={styles.userView}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
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
                <View style={styles.viewView}>
                  <Feather name="eye" size={18} color="#414141" />
                  <MenuItem
                    onPress={() =>
                      navigation.navigate('TenancyApplicationDetails')
                    }
                    textStyle={styles.viewText}>
                    View
                  </MenuItem>
                </View>
                <View style={styles.viewView}>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={18}
                    color="#414141"
                  />
                  <MenuItem
                    onPress={() => handleRemoveTenants(item.id)}
                    textStyle={styles.viewText}>
                    Delete
                  </MenuItem>
                </View>
                <MenuDivider />
              </Menu>
            </View>
            <View style={styles.rentAndStatusView}>
              <Text style={styles.rentText}>${item.rent}/mo</Text>
              <Text
                style={
                  item.status === 'Accepted'
                    ? styles.acceptText
                    : styles.rejectText
                }>
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {visible && (
        <View>
          <Modal visible={visible} animationType="slide" transparent={true}>
            <View>
              <View style={styles.modalView}>
                <TouchableOpacity>
                  <Text style={styles.tenantsText}>All tenants</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.tenantsText}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.tenantsText}>Rejected</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Tenants;
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
  iconView: {
    width: responsiveWidth(22),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  tenancyApplicationText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.4),
    marginTop: responsiveHeight(4),
    left: responsiveWidth(4.8),
  },
  inputAndAllTenantsButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(50),
  },
  allTenantsButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // paddingHorizontal: 14,
    // paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allTenantsText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  tenantView: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    margin: 5,
  },
  iconAndImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  userView: {
    marginRight: responsiveWidth(18),
  },
  userName: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  dateText: {
    color: '#6c727f',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.5),
  },
  rentAndStatusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  rentText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
  },
  acceptText: {
    color: '#23c449',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
  },
  rejectText: {
    color: '#f14231',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
  },
  tenantsText: {
    color: '#111827',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
    lineHeight: 32,
  },
  modalView: {
    backgroundColor: 'white',
    elevation: 1,
    padding: 10,
    width: responsiveWidth(30),
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 180,
  },
  viewView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: responsiveWidth(40),
    justifyContent: 'space-between',
    // left:responsiveWidth(4)
  },
  viewText: {
    color: '#414141',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
  },
});
