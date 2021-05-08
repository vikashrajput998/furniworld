import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
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
    const {tempKey, index} = this.props.route.params;

    if (index !== undefined) {
      const {title, count, price, note, imageUrl} = this.props.state[tempKey][
        index
      ];
      this.setState({
        isEditable: true,
        title,
        count,
        price,
        note,
        imageUrl,
      });
    }
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        this.setState({
          imageUrl: image.path,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleOk = () => {
    let tempKey = this.props.route.params.tempKey;
    if (this.state.isEditable) {
      let index = this.props.route.params.index;
      this.props.atnUpdateFurn(this.state, tempKey, index);
    } else {
      this.props.atnAddFurn(this.state, tempKey);
    }

    this.setState({title: '', count: '', price: '', note: '', imageUrl: ''});
    this.props.navigation.goBack();
  };

  render() {
    const {isEditable} = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/images/frbk.jpeg')}
          style={{flex: 1}}>
          {/* <Container style={{ flex:1}} noheader> */}
          <Grid>
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
            <Row
              size={8}
              style={
                {
                  // justifyContent: 'center',
                  // alignSelf: 'center',
                }
              }>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1}}>
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
                        // color:'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Enter Name of Furniture:-
                    </Text>
                  </View>
                  <TextInput
                    style={{
                      marginTop: 5,
                      borderBottomWidth: 2,
                      borderTopRightRadius: 30,
                      height: 42,
                      borderColor: 'black',
                      color: 'white',
                    }}
                    placeholder="Enter Name of Furniture"
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
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
                        // paddingLeft: 10,
                        // borderBottomWidth: 3,
                        // borderBottomColor: '#000',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Number of Items:-
                    </Text>
                  </View>
                  <TextInput
                    style={{
                      marginTop: 5,
                      borderBottomWidth: 2,
                      borderTopRightRadius: 30,
                      height: 42,
                      borderColor: 'black',
                      color: 'white',
                    }}
                    placeholder="Number of Items"
                    onChangeText={(text) => this.setState({count: text})}
                    value={this.state.count}
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
                        // paddingLeft: 10,
                        // borderBottomWidth: 3,
                        // borderBottomColor: '#000',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Price:-
                    </Text>
                  </View>
                  <TextInput
                    style={{
                      marginTop: 5,
                      borderBottomWidth: 2,
                      borderTopRightRadius: 30,
                      height: 42,
                      borderColor: 'black',
                      color: 'white',
                    }}
                    placeholder="Price"
                    onChangeText={(text) => this.setState({price: text})}
                    value={this.state.price}
                  />
                </View>

                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    // backgroundColor: 'pink',
                  }}>
                  <Text
                    style={{
                      // backgroundColor: '#445',
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
                      rowSpan={4}
                      placeholder="Enter here..."
                      onChangeText={(text) => this.setState({note: text})}
                      value={this.state.note}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRadius: 20,
                      borderWidth: 4,
                      backgroundColor: '#D9D9D9',
                      margin: 20,
                      padding: 20,
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
                          <TouchableOpacity onPress={this.pickImage}>
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
              size={1.5}
              style={{
                //  backgroundColor: '#81C784',
                // borderTopWidth: 10,
                // borderStartWidth: 5,
                // borderRightWidth: 5,
                // borderColor: '#000',
                // borderTopLeftRadius: 35,
                // borderTopEndRadius: 35,
              }}>
              <Content
                contentContainerStyle={{
                  justifyContent: 'center',
                }}
                style={{
                  width: this.width * 0.7,
                  alignSelf: 'center',
                  marginTop: this.height * 0.01,
                }}>
                <Button
                  block
                  // rounded
                  light
                  onPress={this.handleOk}
                  style={{
                    margin: 10,
                    height: this.height * 0.07,
                    backgroundColor: '#eee',
                    borderWidth: 5,
                    borderRadius: 20,
                    borderColor: '#000',
                    shadowOffset: {width: 7, height: 7},
                    shadowColor: 'black',
                    shadowOpacity: 5,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#d99841',
                      fontSize: 25,
                    }}>
                    {isEditable ? <Text>Update</Text> : <Text>Save</Text>}
                  </Text>
                </Button>
              </Content>
            </Row>
          </Grid>
          {/* </Container> */}
        </ImageBackground>
      </KeyboardAvoidingView>
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
