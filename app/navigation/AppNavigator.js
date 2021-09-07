import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name="Feed"
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons color={color} size={size} name="home" />
				),
			}}
		/>
		<Tab.Screen
			name="ListingEdit"
			component={ListingEditScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<NewListingButton
						onPress={() => navigation.navigate("ListingEdit")}
					/>
				),
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						color={color}
						size={size}
						name="plus-circle"
					/>
				),
			})}
		/>
		<Tab.Screen
			name="Account"
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons color={color} size={size} name="account" />
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
