import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import {MaterialCommunityIcons,Entypo } from "@expo/vector-icons";

const Tabslayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="NatureMeditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flower" size={24} color="color" />
          ),
        }}
      />
      <Tabs.Screen 
        name="affirmations"
        options={{
            tabBarLabel:"Affirmation",
            tabBarIcon:({color}) => (
                <Entypo name="open-book" size={24} color="color" />
            )
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
