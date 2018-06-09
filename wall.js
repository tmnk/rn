import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Footer, FooterTab, List, ListItem } from 'native-base';

import { AppRegistry, View} from 'react-native';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header>
                    <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Wall</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pp.userapi.com/c631624/v631624307/3b149/5BX1aC0tQnY.jpg?ava=1'}} />
                <Body>
                  <Text>Темников Игорь</Text>
                  <Text note>today</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody >
              <View style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
              <Image source={{uri: 'http://predprinimatel.club/uploads/posts/2015-04/1430379420_8.jpg'}} style={{height: 150, width: null, flex: 1, margin:'1%'}}/>
              <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                <Image source={{uri: 'http://3.bp.blogspot.com/-Gx_Wy03kqE4/UHoaIKsqyFI/AAAAAAAACZo/kJ-OJN5Pk-M/w1200-h630-p-k-nu/IMG_0822.JPG'}} style={{height: 100, width: '48%', margin: '1%'}} />
                <Image source={{uri: 'https://i.ytimg.com/vi/jVSHjoaSol0/maxresdefault.jpg'}} style={{height: 100, width: '48%', margin: '1%'}} />
              </View>
              </View>
            </CardItem>
            <List>
            <ListItem>
            <Button transparent>
              <Icon name='star' />
            </Button>
              <Body>
                <Text>Сделать 30 ударов ногой</Text>
              </Body>
              <Right>
                <Icon name="arrow-down" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>     
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
                <Thumbnail source={{uri: 'https://pp.userapi.com/c841638/v841638199/3076d/5FOAT648j-g.jpg?ava=1'}} />
                <Body>
                  <Text>Заболотников Антон</Text>
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
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="person" />
              <Text>Home</Text>
            </Button>
            <Button vertical active>
              <Icon name="grid" />
              <Text>Wall</Text>
            </Button>
            <Button vertical >
              <Icon active name="people" />
              <Text>Group</Text>
            </Button>
            <Button vertical>
              <Icon name="lock" />
              <Text>Exit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}