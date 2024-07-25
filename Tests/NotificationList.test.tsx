import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import NotificatonList from "../Screens/NotificatonList";


jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

const mockNavigation = {
 navigate:jest.fn()
}

describe("Notification List",() => {
 it("renders correctly in Notification List",() => {
   const {getByText,getByTestId} = render(<NotificatonList navigation={mockNavigation} />)
   const menuBtn = getByTestId('menu')
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate("MenuPage"))


 })
 it("Checks Navigates correctly to notification Page",() => {
   const {getByTestId} = render(<NotificatonList navigation={mockNavigation} />)

   const notificationBtn = getByTestId('notification')
   fireEvent.press(notificationBtn)
   expect(mockNavigation.navigate("NotificationList"))
 })
})