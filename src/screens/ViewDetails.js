// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Textarea,
  Text,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {atnAddFurn, atnUpdateFurn} from '../redux/actions/furnActions';
import ImagePicker from 'react-native-image-crop-picker';

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      isEditable: false,
      title: '',
      count: '',
      price: '',
      note: '',
      imageUrl: '',
    };
  }

  componentDidMount() {
    // const {tempKey,index} = this.props.route.params
    // if(index !== undefined){
    //   const {title,count,price,note,imageUrl} = this.props.state[tempKey][index]
    //    this.setState({
    //      isEditable: true,
    //      title,
    //      count,
    //      price,
    //      note,
    //      imageUrl
    //    })
    // }
  }

  render() {
    console.log(this.props.route.params, 'params');
    const {data} = this.props.route.params;
    // const {isEditable} = this.state
    return (
      <ImageBackground
        source={require('../assets/images/frbk.jpeg')}
        style={{flex: 1}}>
        {/* <Container style={{ flex:1}} noheader> */}
        <Grid>
          <Row
            size={8}
            style={
              {
                // justifyContent: 'center',
                // alignSelf: 'center',
              }
            }>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#969696',
                  padding: 10,
                  width: this.width * 0.95,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderLeftWidth: 5,
                  borderRightWidth: 5,
                  borderRadius: 15,
                  shadowOffset: {width: 7, height: 7},
                  shadowColor: '#81C784',
                  shadowOpacity: 5,
                  elevation: 3,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginTop: -2,
                    width: this.width * 0.7,
                    height: this.height * 0.03,
                    borderLeftWidth: 7,
                    borderRightWidth: 7,
                    borderRadius: 10,
                    borderWidth: 2,
                    alignItems: 'center',
                    alignSelf: 'center',
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: '#81C784',
                    shadowOpacity: 5,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      // paddingLeft: 5,
                      // borderBottomWidth: 3,
                      // borderBottomColor: '#000',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Name of Furniture:-
                  </Text>
                </View>
                <TextInput
                  editable={false}
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 2,
                    borderTopRightRadius: 30,
                    height: 42,
                    borderColor: 'black',
                    color: 'white',
                  }}
                  placeholder="Enter Name of Furniture"
                  // onChangeText={(text) => this.setState({title: text})}
                  value={data.title}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#969696',
                  padding: 10,
                  width: this.width * 0.95,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderLeftWidth: 5,
                  borderRightWidth: 5,
                  borderRadius: 15,
                  shadowOffset: {width: 7, height: 7},
                  shadowColor: '#81C784',
                  shadowOpacity: 5,
                  elevation: 3,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginTop: -2,
                    width: this.width * 0.7,
                    height: this.height * 0.03,
                    borderLeftWidth: 7,
                    borderRightWidth: 7,
                    borderRadius: 10,
                    borderWidth: 2,
                    alignItems: 'center',
                    alignSelf: 'center',
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: '#81C784',
                    shadowOpacity: 5,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      // paddingLeft: 5,
                      // borderBottomWidth: 3,
                      // borderBottomColor: '#000',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Name of Items:-
                  </Text>
                </View>
                <TextInput
                  editable={false}
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 2,
                    borderTopRightRadius: 30,
                    height: 42,
                    borderColor: 'black',
                    color: 'white',
                  }}
                  placeholder="Number of Items"
                  // onChangeText={(text) => this.setState({count: text})}
                  value={data.count}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#969696',
                  padding: 10,
                  width: this.width * 0.95,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderLeftWidth: 5,
                  borderRightWidth: 5,
                  borderRadius: 15,
                  shadowOffset: {width: 7, height: 7},
                  shadowColor: '#81C784',
                  shadowOpacity: 5,
                  elevation: 3,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginTop: -2,
                    width: this.width * 0.7,
                    height: this.height * 0.03,
                    borderLeftWidth: 7,
                    borderRightWidth: 7,
                    borderRadius: 10,
                    borderWidth: 2,
                    alignItems: 'center',
                    alignSelf: 'center',
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: '#81C784',
                    shadowOpacity: 5,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      // paddingLeft: 5,
                      // borderBottomWidth: 3,
                      // borderBottomColor: '#000',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Price:-
                  </Text>
                </View>
                <TextInput
                  editable={false}
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 2,
                    borderTopRightRadius: 30,
                    height: 42,
                    borderColor: 'black',
                    color: 'white',
                  }}
                  placeholder="Price"
                  // onChangeText={(text) => this.setState({price: text})}
                  value={data.price}
                />
              </View>

              <View style={{marginTop: 20, alignItems: 'center'}}>
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 10,
                    textAlign: 'center',
                    width: this.width * 0.4,
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    backgroundColor: 'white',
                    // borderRadius: 10,
                    borderWidth: 5,
                  }}>
                  Note:-
                </Text>
                <View
                  style={{
                    backgroundColor: '#969696',
                      padding: 10,

                      alignSelf: 'center',
                      marginTop: 5,
                      borderLeftWidth: 5,
                      borderRightWidth: 5,
                      borderRadius: 15,
                      shadowOffset: {width: 7, height: 7},
                      shadowColor: '#81C784',
                      shadowOpacity: 5,
                      elevation: 3,
                      width: this.width * 0.9,
                  }}>
                  <Textarea
                    editable={false}
                    rowSpan={4}
                    placeholder="Enter here..."
                    value={data.note}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    borderRadius: 20,
                    borderWidth: 4,
                    backgroundColor: '#D9D9D9',
                    // borderTopStartRadius: 60,
                    margin: 5,
                    padding: 20,
                    // borderBottomEndRadius: 60,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {data.imageUrl.length === 0 ? (
                    <View
                      style={{
                        padding: 4,
                        width: this.width * 0.16,
                        borderWidth: 1,
                      }}>
                      <Ionicons
                        name="md-images-outline"
                        size={50}
                        onPress={this.pickImage}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        padding: 0,
                        width: this.width * 0.2,
                        height: this.height * 0.1,
                        borderWidth: 1,
                      }}>
                      {data.imageUrl ? (
                        // <TouchableOpacity onPress={this.pickImage} >
                        <Image
                          source={{uri: data.imageUrl}}
                          style={{
                            height: this.height * 0.1,
                            width: this.width * 0.2,
                          }}
                          resizeMode="stretch"
                        />
                      ) : // </TouchableOpacity>
                      null}
                    </View>
                  )}
                </View>
              </View>
            </ScrollView>
          </Row>
          {/* <Row size={3} style={{borderBottomWidth: 8, borderBottomRightRadius: 70, borderRightWidth:10, borderBottomColor:'#000'}}> 
            <ImageBackground
              style={{
                width: this.width,
                height: 'auto',
              }}
              imageStyle={{borderBottomRightRadius: 70}}
              resizeMode={'cover'}
              source={require('../assets/images/LivingRoomFurn.jpg')}></ImageBackground>
          </Row> */}
          {/* <Row
            size={8}
            style={{
              // justifyContent: 'center',
              // alignSelf: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderTopWidth: 4,
                  borderLeftWidth:2,
                  padding: 10,
                  // borderRadius: 10,
                  borderTopLeftRadius: 30,
                  width: this.width * 0.9,

                  borderBottomWidth: 3,
                  borderLeftWidth: 10,
                  borderBottomColor:'red',
                  alignSelf:'flex-end',
                  // justifyContent:'flex-end',
                  borderWidth: 1,
                  marginTop: 20,
                }}>
                  <Text style={{paddingLeft: 10,borderBottomWidth:3, borderBottomColor:'#000',fontSize: 18, fontWeight: 'bold'}}>
                  Enter Name of Furniture:-
                </Text>
                <TextInput
                  style={{
                    borderTopWidth: 1,
                    borderTopRightRadius: 30,
                    height: 40,
                    borderColor: 'gray',
                  }}

                  placeholder="Enter Name of Furniture"
                  onChangeText={(text) => this.setState({title: text})}
                  value={this.state.title}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderTopWidth: 4,
                  borderLeftWidth:2,
                  borderRightWidth: 10,
                  borderBottomWidth: 3,
                  borderBottomColor:'red',
                  padding: 10,
                  width: this.width * 0.9,
                  justifyContent:'flex-start',
                  alignSelf:'flex-start',
                  borderTopRightRadius: 30,
                  borderWidth: 1,
                  marginTop: 20,
                }}>
                   <Text style={{paddingLeft: 10,borderBottomWidth:3, borderBottomColor:'#000',fontSize: 18, fontWeight: 'bold'}}>
                   Number of Items:-
                </Text>
                <TextInput
                  style={{
                    borderTopWidth:1,
                    borderTopRightRadius: 30,
                    height: 40,
                    borderColor: 'gray',
                  }}
                  placeholder="Number of Items"
                  onChangeText={(text) => this.setState({count: text})}
                  value={this.state.count}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderTopWidth: 4,
                  borderLeftWidth:2,
                  borderLeftWidth: 10,
                  borderBottomColor:'red',
                  borderBottomWidth:3,
                  padding: 10,
                  // borderRadius: 10,
                  borderTopLeftRadius: 30,
                  marginTop: 20,
                  width: this.width * 0.9,
                  alignSelf:'flex-end',
                  borderWidth: 1,
                  // margin: 10,
                }}>
                    <Text style={{paddingLeft: 10,borderBottomWidth:3, borderBottomColor:'#000',fontSize: 18, fontWeight: 'bold'}}>
                   Price:-
                </Text>
                  
                <TextInput
                  style={{
                    borderTopRightRadius: 30,
                    borderTopWidth: 1,
                    height: 40,
                    borderColor: 'gray',
                  }}
                  placeholder="Price"
                  onChangeText={(text) => this.setState({price: text})}
                  value={this.state.price}
                />
              </View>

              <View style={{marginTop: 20}}>
                <Text style={{ backgroundColor:'#445',padding: 5,width: this.width * 0.2,color:'#fff',paddingLeft: 10,fontSize: 18, fontWeight: 'bold'}}>
                  Note:-
                </Text>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderLeftColor:'#a165c2',
                    borderRightColor:'#a165c2',
                    borderTopWidth: 6,
                    borderLeftWidth:2,
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 10,
                  }}>
                  <Textarea
                    rowSpan={4}
                    placeholder="Enter here..."
                    onChangeText={(text) => this.setState({note: text})}
                    value={this.state.note}
                  />
                </View>
                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                    borderTopWidth: 2,
                    borderBottomWidth: 6,
                    borderRightWidth: 3,
                    backgroundColor: '#fff',
                   // borderTopStartRadius: 60, 
                    margin: 20,
                    padding: 20,
                    borderBottomEndRadius: 60,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {this.state.imageUrl.length === 0 ? (
                    <View
                      style={{
                        padding: 4,
                        width: this.width * 0.16,
                        borderWidth: 1,
                      }}>
                      <Ionicons
                        name="md-images-outline"
                        size={50}
                        onPress={this.pickImage}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        padding: 0,
                        width: this.width * 0.2,
                        height: this.height * 0.1,
                        borderWidth: 1,
                      }}>
                      {this.state.imageUrl.length ? (
                        <TouchableOpacity onPress={this.pickImage} >
                        <Image
                          source={{uri: this.state.imageUrl}}
                          style={{
                            height: this.height * 0.1,
                            width: this.width * 0.2,
                          }}
                          resizeMode="stretch"
                        />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  )}
                  <View>
                    <AntDesign name="arrowleft" size={30} />
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      Tap to add Image
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Row>
          <Row
            size={2}
            style={{
              backgroundColor: '#32698a',
              borderTopWidth: 6,
              borderStartWidth: 3,
              borderColor:'#000',
              borderTopLeftRadius: 50,
            }}>
            <Content
              contentContainerStyle={{
                justifyContent: 'center',
              }}
              style={{
                width: this.width * 0.7,
                alignSelf: 'center',
                marginTop: this.height * 0.03,
              }}>
              <Button
                block
                rounded
                light
                onPress={this.handleOk}
                style={{margin: 10,height: this.height * 0.07,backgroundColor: '#eee', borderStartWidth: 8,borderBottomWidth: 4, borderColor:'#000'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#d99841',
                    fontSize: 25,
                  }}>
                 {isEditable? <Text>Update</Text> : <Text>Save</Text>} 
                </Text>
              </Button>
            </Content>
          </Row> */}
        </Grid>
        {/* </Container> */}
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    atnAddFurn: (e, tempKey) => dispatch(atnAddFurn(e, tempKey)),
    atnUpdateFurn: (data, tempKey, index) =>
      dispatch(atnUpdateFurn(data, tempKey, index)),
  };
};

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'yellow',
    height: 200,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);
