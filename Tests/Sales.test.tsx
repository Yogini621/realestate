import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Sales from '../SellerScreens/Sales';
import {useDispatch} from 'react-redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
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

jest.mock('react-native-dropdown-select-list', () => {
  return {
    SelectList: jest.fn(),
  };
});

const mockNavigation = {
  navigate: jest.fn(),
};

describe('Sales Page', () => {
  const mockedDispatch = jest.fn();
  (useDispatch as unknown as jest.Mock).mockReturnValue(mockedDispatch);
  beforeEach(() => {
    (jest.requireMock('react-redux') as any).useSelector.mockImplementation(
      (selector: any) =>
        selector({
          properties: {properties: []},
        }),
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly in Sales Page', () => {
    const {getByTestId} = render(<Sales navigation={mockNavigation} />);
    const menuBtn = getByTestId('menu');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('MenuPageSeller'));
  });
});
