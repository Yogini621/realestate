/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'

jest.mock('react-native-gesture-handler', () => {});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
  };
});

jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);
jest.mock('react-native-vector-icons/FontAwesome6', () => 'FontAwesome6');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');
jest.mock('react-native-vector-icons/Foundation', () => 'Foundation');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');

jest.mock('react-native-dropdown-select-list',() =>{
  return {
    SelectList:jest.fn()
  }
});

jest.mock('react-native-ui-datepicker',() => {
return{
  DateTimePicker:jest.fn(),
  DateType:jest.fn()
}
});

jest.mock('@react-native-community/geolocation',() => {
  return {
    Geolocation:jest.fn()
  }
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

jest.mock('rn-range-slider', () => {
  return {
    RangeSlider: jest.fn(),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    AsyncStorage: jest.fn(),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn(),
  };
});

jest.mock('@react-navigation/drawer', () => {
  return {
    createDrawerNavigator: jest.fn(),
  };
});

jest.mock('react-native-image-picker', () => {
  return {
    launchImageLibrary: jest.fn(),
    launchCamera: jest.fn(),
  };
});

jest.mock('react-native-maps', () => {
  return {
    MapView: jest.fn(),
    LatLng: jest.fn(),
    Marker: jest.fn(),
  };
});

jest.mock('react-native-image-viewing',() => {
  return {
    ImageView:jest.fn()
  }
});

jest.mock('react-native-gifted-charts',() => {
  return {
    BarChart:jest.fn()
  }
});

jest.mock('react-native-gifted-charts', () => {
  return {
    PieChart: jest.fn(),
  };
});

jest.mock('react-native-circular-progress-indicator',() => {
  return {
    CircularProgress:jest.fn()
  }
});

it('renders correctly', () => {
  render(<App />);
});
