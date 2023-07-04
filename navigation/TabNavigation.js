import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Feed') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Crear Post') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'purple',
                    borderRadius: 30 ,
                    margin: 15
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Feed"  component={Feed}/>
            <Tab.Screen name="Crear Post" component={CreatePost}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    morado: { 
        backgroundColor: 'purple',
        borderRadius: 30
    }
})
export default TabNavigator;