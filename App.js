import React from "react";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
	const navigation = useNavigation();

	return (
		<Button
			title="Click"
			onPress={() =>
				navigation.navigate("TweetDetails", {
					id: 1,
					title: "My Tweet Details",
				})
			}
		/>
	);
};

const Tweets = () => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet Details {route.params.id}</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen
			name="TweetDetails"
			options={({ route }) => ({ title: route.params.title })}
			component={TweetDetails}
		/>
	</Stack.Navigator>
);

const Account = () => (
	<Screen>
		<Text>Account</Text>
	</Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Feed" component={Tweets} />
		<Tab.Screen name="Account" component={Account} />
	</Tab.Navigator>
);
export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
