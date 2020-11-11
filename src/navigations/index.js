import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AlbumScreen } from '_scenes/album'
import { HomeScreen } from '_scenes/home'
import { PhotoScreen } from '_scenes/photo'

import { Avatar } from '_components/Avatar'
import { Logo } from '_components/Logo'

const Stack = createStackNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: Logo,
            headerRight: Avatar
          }}
        />
        <Stack.Screen
          name='Album'
          component={AlbumScreen}
          options={({ route }) => ({
            title: `📕 ${route.params.title.toUpperCase()}`,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          })}
        />
        <Stack.Screen
          name='Photo'
          component={PhotoScreen}
          options={{ title: 'Photo details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
