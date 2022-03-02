import {LiContainer, Button, ButtonImage} from './styledComponents'

const ButtonCard = props => {
  const {buttonItems, onPlayGame} = props
  const {id, imageUrl} = buttonItems
  const test = id.toLowerCase()

  const onclickGame = () => {
    onPlayGame(id, imageUrl)
  }

  return (
    <LiContainer>
      <Button onClick={onclickGame} type="button">
        <ButtonImage src={imageUrl} alt={id} data-testid={`${test}Button`} />
      </Button>
    </LiContainer>
  )
}
export default ButtonCard
