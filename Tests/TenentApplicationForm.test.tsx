// import React from "react";
// import { fireEvent, render } from "@testing-library/react-native";
// import TenantApplicationForm from "../Screens/TenentApplicationForm";

// jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
// jest.mock('react-native-vector-icons/Feather', () => 'Feather');
// jest.mock('react-native-vector-icons/Foundation', () => 'Foundation');
// jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
// jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
// jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
// jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');

// jest.mock('react-native-ui-datepicker', () => {
//   return {
//     DateTimePicker: jest.fn(),
//     DateType: jest.fn(),
//   };
// });

// jest.mock('react-native-dropdown-select-list', () => {
//   return {
//     SelectList: jest.fn(),
//   };
// });

// const mockNavigation = {
//  navigate:jest.fn()
// }
//   const back = {
//     goBack: jest.fn(),
//   };

// describe("Tenent Application Form",() => {
//  it("renders correctly in Tenent Application Form",() => {
//   const {getByTestId} = render(<TenantApplicationForm navigation={mockNavigation} route={{params:{item:[]}}} />)

//    const notificationBtn = getByTestId('notification')
//    fireEvent.press(notificationBtn)
//    expect(mockNavigation.navigate('NotificationList'))

//  })
//   it('Checks navigation for menuPage', () => {
//     const {getByTestId} = render(
//       <TenantApplicationForm
//         navigation={mockNavigation}
//         route={{params: {item: []}}}
//       />,
//     );

//     const menuBtn = getByTestId('menu');
//     fireEvent.press(menuBtn);
//     expect(mockNavigation.navigate('MenuPage'));
//   });
//     it('Checks navigates to goBack Page', () => {
//       const {getByTestId} = render(
//         <TenantApplicationForm
//           navigation={mockNavigation}
//           route={{params: {item: {}}}}
//         />,
//       );

//       const backBtn = getByTestId('back');
//       fireEvent.press(backBtn);
//     });
//     it('Validates Inputs',() => {
//      const {getByTestId,getByPlaceholderText} = render(
//        <TenantApplicationForm
//          navigation={mockNavigation}
//          route={{params: {item: {}}}}
//        />,
//      );
//      const nameInput = getByPlaceholderText("Enter full name")
//      expect(nameInput).toBeTruthy()
//      const dobInput = getByPlaceholderText("DD/MM/YYY")
//      expect(dobInput).toBeTruthy()
//      const emailInput = getByPlaceholderText("hi@example.com")
//      expect(emailInput).toBeTruthy()
//      const contactInput = getByPlaceholderText("+91 XXXX XXX XXX")
//      expect(contactInput).toBeTruthy()
//      const incomeInput = getByPlaceholderText("e.g.50000")
//      expect(incomeInput).toBeTruthy()
//      const occupantInput = getByPlaceholderText('Enter Occupants')
//      expect(occupantInput).toBeTruthy()
//      const moveInDate = getByPlaceholderText("DD/MM/YYYY")
//      expect(moveInDate).toBeTruthy()
//     })
// })

import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import TenantApplicationForm from '../Screens/TenentApplicationForm';

jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Foundation', () => 'Foundation');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');

jest.mock('react-native-ui-datepicker', () => {
  return {
    DateTimePicker: jest.fn(),
    DateType: jest.fn(),
  };
});

jest.mock('react-native-dropdown-select-list', () => {
  return {
    SelectList: jest.fn(),
  };
});

describe('TenantApplicationForm', () => {
  const navigation = {navigate: jest.fn(), goBack: jest.fn()};
  const route = {
    params: {
      item: {image: '', rent: '1000', rooms: '2', location: 'Test Location'},
    },
  };
  test('renders correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <TenantApplicationForm navigation={navigation} route={route} />,
    );
    expect(getByText('Tenant Application Form')).toBeTruthy();
    expect(getByPlaceholderText('Enter full name')).toBeTruthy();
  });
  test('navigates back when back button is pressed', () => {
    const {getByTestId} = render(
      <TenantApplicationForm navigation={navigation} route={route} />,
    );
    const backButton = getByTestId('back');
    fireEvent.press(backButton);
    expect(navigation.goBack).toHaveBeenCalled();
  });
  // test('shows validation alert if step 1 fields are empty and continue is pressed', async () => {
  //   const {getByText, getByTestId} = render(
  //     <TenantApplicationForm navigation={navigation} route={route} />,
  //   );
  //   const continueButton = getByText('Continue');
  //   fireEvent.press(continueButton);
  //   await waitFor(() => {
  //     expect(getByText('Enter Name')).toBeTruthy();
  //     expect(getByText('Enter Date of Birth')).toBeTruthy();
  //   });
  // });
  // test('navigates to step 2 after step 1 is validated', async () => {
  //   const {getByText, getByPlaceholderText} = render(
  //     <TenantApplicationForm navigation={navigation} route={route} />,
  //   );
  //   fireEvent.changeText(getByPlaceholderText('Enter full name'), 'John Doe');
  //   fireEvent.changeText(getByPlaceholderText('DD/MM/YYYY'), '01/01/2000');
  //   fireEvent.changeText(
  //     getByPlaceholderText('hi@example.com'),
  //     'john.doe@example.com',
  //   );
  //   fireEvent.changeText(
  //     getByPlaceholderText('+91 XXXX XXX XXX'),
  //     '1234567890',
  //   );
  //   fireEvent.changeText(getByPlaceholderText('e.g.50000'), '50000');
  //   fireEvent.changeText(getByPlaceholderText('Enter Occupants'), '2');
  //   fireEvent.changeText(getByPlaceholderText('DD/MM/YYYY'), '01/01/2024');
  //   fireEvent.press(getByText('Continue'));
  //   await waitFor(() => {
  //     expect(getByText('STEP 2 OF 4')).toBeTruthy();
  //   });
  // });
  // test('displays modal after step 4 is validated', async () => {
  //   const {getByText, getByPlaceholderText, getByTestId} = render(
  //     <TenantApplicationForm navigation={navigation} route={route} />,
  //   );
  //   fireEvent.changeText(getByPlaceholderText('Enter full name'), 'John Doe');  
  //   fireEvent.changeText(getByPlaceholderText('DD/MM/YYYY'), '01/01/2000');  
  //   fireEvent.changeText(getByPlaceholderText('hi@example.com'), 'john.doe@example.com');  
  //   fireEvent.changeText(getByPlaceholderText('+91 XXXX XXX XXX'), '1234567890');  
  //   fireEvent.changeText(getByPlaceholderText('e.g.50000'), '50000');  
  //   fireEvent.changeText(getByPlaceholderText('Enter Occupants'), '2');  
  //   fireEvent.changeText(getByPlaceholderText('DD/MM/YYYY'), '01/01/2024');  
  //   fireEvent.press(getByText('Continue'));
  //   fireEvent.changeText(
  //     getByPlaceholderText('e.g. 142 Risse Street'),
  //     '123 Main St',
  //   );
  //   fireEvent.changeText(getByPlaceholderText('Enter City'), 'Test City');
  //   fireEvent.changeText(getByPlaceholderText('Enter Pin Code'), '123456');
  //   fireEvent.press(getByText('Continue'));
  //   fireEvent.changeText(
  //     getByPlaceholderText('e.g. benz Car,Kawaski Bike'),
  //     'Toyota Camry',
  //   );
  //   fireEvent.press(getByText('Continue'));
  //   fireEvent.changeText(
  //     getByPlaceholderText('e.g. 6308513255'),
  //     '123456789012',
  //   );
  //   fireEvent.press(getByText('Apply and Submit'));
  //   await waitFor(() => {
  //     expect(getByText('Applied Successfully')).toBeTruthy();
  //   });
  // });
  // test('closes modal when OK button is pressed', async () => {
  //   const {getByText, getByTestId} = render(
  //     <TenantApplicationForm navigation={navigation} route={route} />,
  //   ); 
  //   fireEvent.press(getByText('Apply and Submit'));  
  //    await waitFor(() => {   
  //     expect(getByText('Applied Successfully')).toBeTruthy(); 
  //    });
  //   const okButton = getByText('Ok');
  //   fireEvent.press(okButton);
  //   await waitFor(() => {
  //     expect(navigation.navigate).toHaveBeenCalledWith('PropertyDetails');
  //   });
  // });
});
