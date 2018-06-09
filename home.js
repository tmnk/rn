import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Icon, Body, Right, Title, Footer, FooterTab, List, ListItem, Fab } from 'native-base';
import EIcon  from 'react-native-vector-icons/Entypo';
import MIcon  from 'react-native-vector-icons/MaterialIcons';

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
            <Title>Home</Title>
          </Body>
        </Header>
<Content>
                      <Fab
            active={'true'}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight">
            <Icon name="add" />
    
          </Fab>

                      <List>
            <ListItem>
            <Button transparent>
              <MIcon name="pets" size={20} color="grey" />
            </Button>
              <Body>
                <Text>Выгулить Чипа</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>
            <ListItem>
            <Button transparent>
              <EIcon name='shopping-cart' size={20} color="grey" />
            </Button>
              <Body>
                <Text>Съездить за колодками</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>
            <ListItem>
            <Button transparent>
              <MIcon name='weekend' size={20} color="blue"/>
            </Button>
              <Body>
                <Text>Забрать почту</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>
                        <ListItem>
            <Button transparent>
              <EIcon name='shopping-cart' size={20} color="blue" />
            </Button>
              <Body>
                <Text>Купить вдшку</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>
                        <ListItem>
            <Button transparent>
              <MIcon name='assignment' size={20} color="blue" />
            </Button>
              <Body>
                <Text>Сдать отчёт за май</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>

                        <ListItem>
            <Button transparent>
              <MIcon name='assignment' size={20} color="blue" />
            </Button>
              <Body>
                <Text>Добавить Api яндекса</Text>
              </Body>
              <Right>
                <Icon name="globe" />
              </Right>
            </ListItem>
          </List> 
                  <View style={{ flex: 1 }}>

          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="person" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
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