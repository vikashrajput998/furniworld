import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import s from '../assets/images/fur'
import {ListCategory, CardCategory} from '../components/ListCategory';
const {height, width} = Dimensions.get('window');
export default function Categories(props) {
  const data = [
    {name: 'category1', imagePath: require('../assets/images/BedRoomFurn.jpg')},
    {
      name: 'category2',
      imagePath: require('../assets/images/DinningRoomFurn.jpg'),
    },
    {name: 'category2', imagePath: require('../assets/images/furniture.jpeg')},
    {name: 'category2', imagePath: require('../assets/images/furniture.png')},
    {name: 'category2', imagePath: require('../assets/images/furniture1.png')},
    {name: 'category2', imagePath: require('../assets/images/furniture3.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
    {name: 'category2', imagePath: require('../assets/images/furniture6.jpg')},
  ];
  const categoryPressed = (imageProp, name, tempKey) => {
    props.navigation.navigate('CategoriesDetails', {tempKey: tempKey});
  };
  return (
    <ImageBackground
      source={require('../assets/images/frbk.jpeg')}
      style={{flex: 1, opacity: 1}}>
      <View
        style={{
          flex: 1,
          width: width ,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: '#fce6e6',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            // borderLeftWidth: 5,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 7,
                borderColor: '#000000',
                padding: 20,
                borderTopLeftRadius: height * 0.3,
                borderBottomLeftRadius: height * 0.3,
                marginTop: height * 0.04,
                marginLeft: 45,
                marginRight: -10
              }}>
              <Text
                style={{
                  fontSize: 30,
                }}>
                Choose Category
              </Text>
            </View>
            <ScrollView
             // horizontal
               vertical
              showsVerticalScrollIndicator={false}
              // showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginTop: height * 0.04}}>
                <View style={{flexDirection:'row'}}>

              <ListCategory
                categoryPressed={categoryPressed}
                name="Living Room Furniture"
                tempKey="livingRoomFurn"
                imageProp={require('../assets/images/LivingRoomFurn.jpg')}
              />

              <ListCategory
                categoryPressed={categoryPressed}
                name="Dinning Room Furniture"
                tempKey="dinningRoomFurn"
                imageProp={require('../assets/images/DinningRoomFurn.jpg')}
              />
                </View>

                <View style={{flexDirection:'row'}}>

              <ListCategory
                categoryPressed={categoryPressed}
                name="BedRoom Furniture"
                tempKey="bedRoomFurn"
                imageProp={require('../assets/images/BedRoomFurn.jpg')}
              />
              <ListCategory
                categoryPressed={categoryPressed}
                name="Office Furniture"
                tempKey="officeFurn"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />
              </View>

              <View style={{flexDirection:'row'}}>

              <ListCategory
                categoryPressed={categoryPressed}
                name="Sofas and Armchairs"
                tempKey="sofasAndArmchairs"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />
              <ListCategory
                categoryPressed={categoryPressed}
                name="Tables and Chairs"
                tempKey="tablesAndChairs"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />

              </View>

              <View style={{flexDirection:'row'}}>

              <ListCategory
                categoryPressed={categoryPressed}
                name="Storage, Systems and Units"
                tempKey="storageSystemUnits"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />
              <ListCategory
                categoryPressed={categoryPressed}
                name="Sleeping area and Children Bedrooms"
                tempKey="sleepingChildrenBedrooms"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />

              </View>

              <View style={{flexDirection:'row'}}>

              <ListCategory
                categoryPressed={categoryPressed}
                name="Kids Furniture"
                tempKey="kidsFurn"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />
              <ListCategory
                categoryPressed={categoryPressed}
                name="Furniture components and hardware"
                tempKey="furnComponentsHardware"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />

              </View>
              
              <ListCategory
                categoryPressed={categoryPressed}
                name="Others"
                tempKey="others"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
