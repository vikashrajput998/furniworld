import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {ShowCardCategory} from '../components/ListCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {atnRemoveFurn} from '../redux/actions/furnActions';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {cleanSingle} from 'react-native-image-crop-picker';

class CategoriesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      categoryDetails: {},
      change: false,
      rightButtonWidth: 100,
      dataArray: [],
    };
  }

  rightButtons = (index) => {
    return [
      <TouchableHighlight
        onPress={() => {
          this.setState({change: !this.state.change});
          this.props.atnRemoveFurn(this.props.route.params.tempKey, index);
          this.setState({rightButtonWidth: 0});
        }}
        style={{
          backgroundColor: 'red',
          borderTopLeftRadius: 30,
          justifyContent: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'right',
            color: '#fff',
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Delete
        </Text>
      </TouchableHighlight>,
    ];
  };

  renderItem = (data, rowMap) => {
    let {item} = data;
    return (
      <ShowCardCategory
        name={item.title}
        navigation={this.props.navigation}
        index={data.index}
        tempKey={this.props.route.params.tempKey}
        imageProp={{uri: item.imageUrl}}
        data={{
          count: item.count,
          price: item.price,
          note: item.note,
        }}
      />
    );
  };

  componentDidMount() {
    this.setState({
      dataArray: this.props.state[this.props.route.params.tempKey],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const {tempKey} = this.props.route.params;
      this.setState({
        dataArray: this.props.state[tempKey],
      });
    }
  }

  renderHiddenItem = (data, rowMap) => {
    return (
      <TouchableHighlight
        onPress={async () => {
          await this.props.atnRemoveFurn(
            this.props.route.params.tempKey,
            data.index,
          );
          rowMap[data.index] && rowMap[data.index].closeRow();
        }}
        style={{
          // backgroundColor: 'red',
          borderTopLeftRadius: 50,
          height: this.height * 0.33,
          justifyContent: 'center',
          margin: 5,
          flex: 1,
        }}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 24,
            color: '#fff',
            fontWeight: 'bold',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Delete
        </Text>
      </TouchableHighlight>
    );
  };

  render() {
    const {tempKey} = this.props.route.params;
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/frbk.jpeg')}>
        {/**<Container style={{flex:1}} noheader> */}
        <Grid>
          {/* <Row size={2}>
            <ImageBackground
              style={{
                width: this.width,
                height: 250,
              }}
              imageStyle={{borderBottomRightRadius: 30}}
              resizeMode={'stretch'}
              source={require('../assets/images/furniture.jpeg')}></ImageBackground>
          </Row> */}
          <Row size={7} style={{justifyContent: 'center'}}>
            {this.state.dataArray !== undefined &&
            this.state.dataArray.length ? (
              <SwipeListView
                data={this.state.dataArray}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderHiddenItem={this.renderHiddenItem}
                disableRightSwipe={true}
                rightOpenValue={-90}
                leftOpenValue={0}
              />
            ) : (
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 40,

                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Nothing to show, Please Check on "+" to Add Item
                </Text>
              </View>
            )}
          </Row>
          <Row
            size={1.5}
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 30,
              borderColor: 'black',
              borderWidth: 7,
              justifyContent: 'center',
              marginBottom: 30,
              alignSelf:'center',
              width: this.width * 0.95
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    paddingRight: this.width * 0.2,
                    fontSize: 20,
                    borderBottomColor: '#053a5b',
                  }}>
                  Add Furniture
                </Text>
              </View>

              <AntDesign
                name="arrowright"
                size={30}
                style={{paddingRight: this.width * 0.2}}
                color={'black'}
              />
              <AntDesign
                name="plussquareo"
                size={40}
                color={'black'}
                onPress={() =>
                  this.props.navigation.navigate('AddDetails', {
                    tempKey: tempKey,
                  })
                }
              />
            </View>
          </Row>
        </Grid>
        {/**</Container> */}
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
    atnRemoveFurn: (tempKey, index) => dispatch(atnRemoveFurn(tempKey, index)),
  };
};

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'yellow',
    height: 200,
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDetails);
