import React from 'react';
import {render} from '@testing-library/react-native';
import PropertyDetails from '../Screens/PropertyDeatils';
import {useDispatch} from 'react-redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

jest.mock('@react-native-community/geolocation', () => {
  return {
    Geolocation: jest.fn(),
  };
});

jest.mock('react-native-maps', () => {
  return {
    MapView: jest.fn(),
    LatLng: jest.fn(),
    Marker: jest.fn(),
  };
});

jest.mock('react-native-image-viewing', () => {
  return {
    ImageView: jest.fn(),
  };
});

const mockNavigation = {
  navigate: jest.fn(),
};

describe('Property Details', () => {
  const mockedDispatch = jest.fn();
  (useDispatch as unknown as jest.Mock).mockReturnValue(mockedDispatch);

  beforeEach(() => {
    (jest.requireMock('react-redux') as any).useSelector.mockImplementation(
      (selector: any) =>
        selector({
          favorites: {favorites: []},
          properties: {properties: []},
        }),
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly in Property Details', () => {
    const {getByText} = render(
      <PropertyDetails navigation={mockNavigation} route={jest.fn()} />,
    );
  });
});
