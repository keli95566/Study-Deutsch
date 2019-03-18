import React, {Component} from 'react';
import { StyleSheet,View,Image} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Container,Header,Left,Body,Button,Icon,Title,Content,Text} from 'native-base';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class cardView extends Component{
  
  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        deutsch: PropTypes.string,
        english: PropTypes.string,
        remark: PropTypes.string,
        category: PropTypes.string
      })
    )
  };

   state = {

    cardIndex:0,
    swipeDirection:'',
    swipeAllCards:false,
    isSwipingBack:false,
  }

    
  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}> {card.deutsch}  </Text>
        <Text style={styles.text}> {card.english}  </Text>
        <Text style={styles.text}> {card.remark}  </Text>
        <Text style={styles.text}> {card.category}  </Text>

        <View style={styles.ImageContainer}>
        <Image source={require('../../Images/cat_main.png')}
               style={styles.Image}/>
        </View>
        
      </View>
    )
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };


  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

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
            <Title style={{color:'#666666'}}> REVIEW </Title>
          </Body>
        </Header>

        <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={this.onSwiped}
          onTapCard={this.swipeLeft}
          cards={this.props.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={30}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={this.props.cards.length}
          stackSeparation={8}
          cardStyle={{
            height:'80%'
          }}
          overlayLabels={{
            bottom: {
              title: 'Definetely Need to Review..',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: '#999999',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'I know it!',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: '#ed845f',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: "What's this..?",
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: '#666666',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: "No need for review anymore!",
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: '#f8ba12',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
          <Button onPress={this.swipeLeft} title='Swipe Left' />
        </Swiper>
      </View>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  ImageContainer:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },

  Image:{
    height: 60,
    width:60,
    marginRight: 20,
    marginTop: 20,
  }

});

const mapStateToProps = state =>({
  cards: state.reviewList,
})

export default connect(mapStateToProps)(cardView)