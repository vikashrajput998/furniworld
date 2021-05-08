
import React from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import {Button} from 'native-base';
const {width, height} = Dimensions.get('window')
export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/images/frbk.jpeg')}
      style={{flex: 1, opacity: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 0.5}}>
        <View
          style={{
            backgroundColor: '#81c784',
            borderBottomColor:'black',
            borderBottomWidth: 10,
            borderLeftColor:'black',
            borderLeftWidth:10,
            borderTopColor:'white',
            borderTopWidth: 10,
            borderRightColor:'white',
            borderRightWidth:10,
            padding: 35,
          }}>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Furniworld
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: '#000000',
            }}>
            The Decorative Assets
          </Text>
        </View>
      </View>
      <View style={{flex: 0.1, borderTopColor:'black', borderTopWidth:8, borderBottomColor:'black', borderBottomWidth:8, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Button   onPress={() => props.navigation.navigate('Categories')} style={{backgroundColor: '#795548', borderWidth: 8, borderRadius:20, borderColor:'black', margin: 10,justifyContent:'center', padding: 10,height: height * 0.08, width: width * 0.7}}>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Add Furniture Details</Text>
          </Button>
          <Button  onPress={() => props.navigation.navigate('ShowAll')} style={{backgroundColor: '#795548',borderWidth: 8, borderRadius:20, borderColor:'black', margin: 10, justifyContent:'center', padding: 10, height: height * 0.08, width: width * 0.7}}>
            <Text style={{fontSize: 20,  color: '#fff', fontWeight:'bold'}}>View All Details</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
