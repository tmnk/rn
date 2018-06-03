import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { AppRegistry, View} from 'react-native';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pp.userapi.com/c631624/v631624307/3b149/5BX1aC0tQnY.jpg?ava=1'}} />
                <Body>
                  <Text>Макороны с Мясом</Text>
                  <Text note>КееееК</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody >
              <View style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
              <Image source={{uri: 'https://cs8.pikabu.ru/post_img/2017/02/08/6/og_og_1486543438281321934.jpg'}} style={{height: 150, width: null, flex: 1, margin:'1%'}}/>
              <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                <Image source={{uri: 'https://cs8.pikabu.ru/post_img/2017/02/08/6/og_og_1486543438281321934.jpg'}} style={{height: 100, width: '48%', margin: '1%'}} />
                <Image source={{uri: 'https://cs8.pikabu.ru/post_img/2017/02/08/6/og_og_1486543438281321934.jpg'}} style={{height: 100, width: '48%', margin: '1%'}} />
              </View>
              </View>
            </CardItem>     
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pp.userapi.com/c631624/v631624307/3b149/5BX1aC0tQnY.jpg?ava=1'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.setwalls.ru/pic/201305/1024x600/setwalls.ru-44001.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}