import React, {Component} from 'react';
import { StyleSheet, Alert ,Image} from 'react-native';
import {Container,Header,Left,Body,Button,Icon,Title,
        Content,Text,Card,CardItem,Item,
        Input,Picker, View} from 'native-base';
import {store} from '../../config/store';
import {ADD_CARD,KNOW} from '../../config/actionTypes';
class addword extends Component{

  constructor(props){
    super(props);

    this.state = {
      selected2: 'I know it!',
      deutsch: '',
      english:'',
      remark:'',
    };

  };

  onValueChange2(value: string){
    this.setState({
      selected2:value
    })
  }

  addCard = ()=>{
      const newCard = {deutsch:this.state.deutsch,
                       english:this.state.english,
                       remark:this.state.remark,
                       category:this.state.selected2}

      
      store.dispatch({
        type:ADD_CARD,
        newCard: newCard,
      })

      if(this.state.selected2=='I know it!'){
        store.dispatch({
          type:KNOW,
          newCard:newCard
        })
      }

      Alert.alert('Success!','Card Added to your Review List.',
                  [{text:'Add another card'},{text:'Review Now!',
                  onPress:()=>this.props.navigation.navigate('cardview')}],
                  { cancelable: false }
                  )
  }

  render() {
    return (
      <Container>

        <Header transparent>
          <Left>
            <Button transparent
              onPress={()=>{this.props.navigation.navigate('welcome')}}
            >
              <Icon name='arrow-back' style={{color:'#666666'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#666666'}}> ADD NEW CARDS </Title>
          </Body>
        </Header>

        <Content padder>
           <Card>
              <CardItem header style={{color:'#999999'}}>
              <Icon active name='create'/>
               <Text>New Card</Text>
              </CardItem>
        
              <CardItem >
               <Body>
                <Item >
                  <Input placeholder='In Deutsch'
                         placeholderTextColor='#9d9d9d'
                         onChangeText={deutsch => this.setState({ deutsch })}
                         value={this.state.deutsch}
                  />
                </Item>

                <Item>
                   <Input placeholder='In English'
                          placeholderTextColor='#9d9d9d'
                          onChangeText={english => this.setState({ english })}
                          value={this.state.english}
                   />
                </Item>

                <Item>
                   <Input placeholder='Remark'
                          placeholderTextColor='#9d9d9d'
                          onChangeText={remark => this.setState({ remark })}
                          value={this.state.remark}
                   />
                </Item>

                <Item picker>
                   <Picker
                     mode="dropdown"
                     iosIcon={<Icon name="ios-arrow-down-outline" />}
                     style={{ width: '90%' }}
                     placeholder="Select Category"
                     placeholderStyle={{ color: "#bfc6ea" }}
                     placeholderIconColor="#007aff"
                     selectedValue={this.state.selected2}
                     onValueChange={this.onValueChange2.bind(this)}>

                       <Picker.Item label="I know it!" value="I know it!" />
                       <Picker.Item label="What's this..?" value="What's this..?" />
                       <Picker.Item label="No need for review anymore!" value="No need for review anymore!" />
                       <Picker.Item label="Definetely need to look again.." value="Definetely need to look again.." />


                   </Picker>
                </Item>

               </Body>
              </CardItem>

              <CardItem footer button onPress={()=>this.addCard()}>
                <Icon active name='add'/>
                <Text>Add This Card to Review List</Text>
              </CardItem>
          </Card>
          <View style={styles.container}>
            <Image source={require('../../Images/cat_main.png')}
                   style={styles.Image}/>
          </View>
        </Content>

      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  Image:{
    height: 60,
    width:60,
    marginRight: 20,
    marginTop: 60,
  }

});

export default addword;