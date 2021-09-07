import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator
		screenOptions={{ headerShown: false, presentation: "modal" }}
	>
		<Stack.Screen name="Listings" component={ListingsScreen} />
		<Stack.Screen
			name="ListingDetails"
			component={ListingDetailsScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
