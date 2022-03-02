import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import ButtonCard from '../ButtonCard'
import ResultItem from '../ResultCard'

import {
  AppContainer,
  ScoreContainer,
  NameContainer,
  Name,
  Score,
  ScoreHead,
  ScoreCount,
  PlayGameContainer,
  PopupContainer,
  PopupBtn,
  RulesImgContainer,
  RulesImg,
  CloseBtnContainer,
  CloseBtn,
} from './styledComponets'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {score: 0, playing: false}

  onClickPlayAgain = () => {
    this.setState({playing: false})
  }

  renderResultsView = () => {
    const {myChoice, systemChoice, result} = this.state

    return (
      <ResultItem
        myChoice={myChoice}
        systemChoice={systemChoice}
        result={result}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onPlayGame = (id, image) => {
    const randomSelection = Math.floor(Math.random() * choicesList.length)

    if (choicesList[randomSelection].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'PAPER'
    ) {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[randomSelection].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'PAPER' &&
      id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (
      choicesList[randomSelection].id === 'SCISSORS' &&
      id === 'ROCK'
    ) {
      this.setState(prevState => ({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState({
        playing: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomSelection],
        result: 'IT IS DRAW',
      })
    }
  }

  renderButton = () => (
    <PlayGameContainer>
      {choicesList.map(each => (
        <ButtonCard
          key={each.id}
          buttonItems={each}
          onPlayGame={this.onPlayGame}
        />
      ))}
    </PlayGameContainer>
  )

  render() {
    const {score, playing} = this.state
    return (
      <AppContainer>
        <ScoreContainer>
          <NameContainer>
            <Name>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Name>
          </NameContainer>
          <Score>
            <ScoreHead>Score</ScoreHead>
            <ScoreCount>{score}</ScoreCount>
          </Score>
        </ScoreContainer>
        {playing ? this.renderResultsView() : this.renderButton()}
        <PopupContainer>
          <Popup
            modal
            trigger={
              <PopupBtn type="button" position="right center">
                RULES
              </PopupBtn>
            }
          >
            {close => (
              <RulesImgContainer>
                <CloseBtnContainer onClick={() => close()} type="button">
                  <CloseBtn>
                    <RiCloseLine />
                  </CloseBtn>
                </CloseBtnContainer>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default Home
