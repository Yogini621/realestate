import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import HomePage from '../Screens/HomePage';
import {useDispatch} from 'react-redux';

jest.mock('react-native-gesture-handler', () => {});

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

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

const mockNavigation = {
  navigate: jest.fn(),
};

describe('HomePage', () => {
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
  it('renders correctly in HomePage', () => {
    const {getByTestId} = render(<HomePage navigation={mockNavigation} />);
    const menuBtn = getByTestId('menu');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('MenuPage'));
  });
  it('navigates Discover Page Correctly', () => {
    const {getByTestId} = render(<HomePage navigation={mockNavigation} />);

    const discoverBtn = getByTestId('discover');
    fireEvent.press(discoverBtn);
    expect(mockNavigation.navigate('DiscoverMore'));
  });
});
