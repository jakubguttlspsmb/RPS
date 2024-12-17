import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'RPS',
          tabBarIcon: ({ color, focused }) => (
           
            <Ionicons name="game-controller" size={24} color="black" />
            
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color, focused }) => (
              <Ionicons name="archive" size={24} color="black" />          ),
        }}
      />
    </Tabs>
  );
}
