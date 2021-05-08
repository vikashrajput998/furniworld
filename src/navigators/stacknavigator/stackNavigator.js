import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../../screens/CategoriesScreen';
import AddDetails from '../../screens/AddDetails';
import CategoriesDetails from '../../screens/CategoriesDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import ShowAll from '../../screens/ShowAll';
import ShowDetails from '../../screens/ShowDetails';
import {Provider} from 'react-redux';
import {store} from '../../redux/store/store';
import ViewDetails from '../../screens/ViewDetails';

export default function stackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddDetails"
            component={AddDetails}
            options={{
              headerTitle: 'Add/Update Details',
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="CategoriesDetails"
            component={CategoriesDetails}
            options={{
              headerTintColor: '#000',
              headerTitle: 'Furniture',
            }}
          />
          <Stack.Screen
            name="ShowAll"
            component={ShowAll}
            options={{headerTitle: 'All Details', headerTintColor: '#000'}}
          />
          <Stack.Screen
            name="ShowDetails"
            component={ShowDetails}
            options={{headerTitle: 'Details', headerTintColor: '#000'}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{headerTitleAlign: 'center', headerTintColor: '#000'}}
          />
          <Stack.Screen
            name="ViewDetails"
            component={ViewDetails}
            options={{headerTitleAlign: 'center', headerTintColor: '#000'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
