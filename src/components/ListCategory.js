import {
  ListItem,
  Left,
  Right,
  Card,
  CardItem,
  Body,
  Icon,
  Text,
  Thumbnail,
} from 'native-base';
import React from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {cleanSingle} from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

function ListCategory({imageProp, name, categoryPressed, tempKey}) {
  return (
    <TouchableOpacity
      onPress={() => categoryPressed(imageProp, name, tempKey)}
      key={name}
      style={{
        height: height * 0.18,
        marginBottom: height * 0.08,
        backgroundColor: 'black',
        width: width * 0.4,
        borderRadius: 20,
        borderWidth: 5,
        marginRight: 30,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
      }}>
      <Image
        source={imageProp}
        resizeMode="stretch"
        style={{
          width: width * 0.37,
          borderRadius: 20,
          height: height * 0.17,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          width: width * 0.38,
          height: height * 0.06,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          // backgroundColor: '#fff',
          borderRadius: 10,
          borderWidth: 3,
          borderBottomRightRadius: 18,
          marginTop: 1,
        }}>
        {name.slice(0, 20)}...
      </Text>
    </TouchableOpacity>
  );
}

function CardCategory() {
  return (
    <CardItem style={{marginBottom: 30}}>
      <Left></Left>
      <Body>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#eeb65e',
          }}>
          Living Room Furniture
        </Text>
      </Body>
      <Right>
        <Image
          source={require('../assets/images/furniture.jpeg')}
          style={{height: 50, width: 50}}
        />
      </Right>
    </CardItem>
  );
}

function ShowAllCategories({data, navigation}) {
  console.log('datafrom ', data, data.imageUrl);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ViewDetails', {data: data})}>
      <Card
        style={{
          backgroundColor: '#A1887F',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderTopWidth: 5,
          borderTopColor: 'black',
          borderLeftWidth: 10,
          borderRightWidth: 10,
          borderColor: 'black',
          height: height * 0.3,
          overflow: 'scroll',
        }}>
          
        <CardItem Header style={{justifyContent: 'center'}}>
          {data.imageUrl.length ? (
            
            <Image
              resizeMode="stretch"
              style={{height: height * 0.1, width: height * 0.11}}
              source={{uri: data.imageUrl}}
            />
          ) : (
            
              <View
                style={{
                  width: width * 0.24,
                  justifyContent: 'center',
                  borderWidth: 3,
                  borderRadius: 5,
                  height: height * 0.09,
                }}>
                <Text>No Image</Text>
              </View>
            
          )}
        </CardItem>
        <CardItem>
          <Body>
            <View
              style={{
                marginTop: -10,
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                <Text style={{fontSize: 18, paddingLeft: 5}}>Name: </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {data.title}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                <Text style={{fontSize: 18, paddingLeft: 5}}>Count: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.count}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                <Text style={{fontSize: 18, paddingLeft: 5}}>Price: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.price}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                <Text style={{fontSize: 18, paddingLeft: 5}}>Note: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.note}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

function ShowCardCategory({name, imageProp, data, navigation, tempKey, index}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{}}
      onPress={() => navigation.navigate('AddDetails', {tempKey, index})}>
      <Card
        style={{
          backgroundColor: '#A1887F',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderTopWidth: 5,
          borderTopColor: 'black',
          borderLeftWidth: 10,
          borderRightWidth: 10,
          borderColor: 'black',
          height: height * 0.3,
          overflow: 'scroll'
        }}>
        <CardItem Header style={{justifyContent: 'center'}}>
          {imageProp.uri.length ? (
            <Image
              resizeMode="stretch"
              style={{height: height * 0.1, width: height * 0.11}}
              source={imageProp}
            />
          ) : (
            <View
              style={{
                width: width * 0.2,
                justifyContent: 'center',
                borderWidth: 1,
                height: height * 0.1,
              }}>
              <Text>No Image</Text>
            </View>
          )}
        </CardItem>
        <CardItem>
          <Body>
            <View
              style={{
                marginTop: -10,
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                
                <Text style={{fontSize: 18, paddingLeft: 5}}>Name: </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                
                <Text style={{fontSize: 18, paddingLeft: 5}}>Count: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.count}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                
                <Text style={{fontSize: 18, paddingLeft: 5}}>Price: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.price}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#A1887F',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: width * 0.9,
                height: height * 0.042,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: width * 0.3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                  borderWidth: 3,
                }}>
                
                <Text style={{fontSize: 18, paddingLeft: 5}}>Note: </Text>
              </View>
              <View>
                <Text style={{fontSize: 18}}>{data.note.slice(0, 8)}...</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

export {ListCategory, CardCategory, ShowAllCategories, ShowCardCategory};
