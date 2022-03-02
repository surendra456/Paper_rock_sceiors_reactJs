import {
  AppContainer,
  OpponenetsContainer,
  ContainerCard,
  ResultText,
  ResultImgage,
  LoseOrWonHeading,
  PlayButton,
} from './styledComponents'

const ResultItem = props => {
  const {myChoice, systemChoice, result, playAgain} = props
  const {imageUrl} = systemChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <AppContainer>
      <OpponenetsContainer>
        <ContainerCard>
          <ResultText>YOU</ResultText>
          <ResultImgage src={myChoice[1]} alt="your choice" />
        </ContainerCard>
        <ContainerCard>
          <ResultText>OPPONENT</ResultText>
          <ResultImgage src={imageUrl} alt="opponent choice" />
        </ContainerCard>
      </OpponenetsContainer>
      <LoseOrWonHeading>{result}</LoseOrWonHeading>
      <PlayButton type="button" onClick={onClickPlayAgainButton}>
        PLAY AGAIN
      </PlayButton>
    </AppContainer>
  )
}
export default ResultItem
