import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vh;
  padding: 20px;
  box-sizing: content-box;
  border: 2px #ffffff solid;
  height: 150px;
  align-items: center;
  border-radius: 10px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.h1`
  color: #ffffff;
  font-family: 'roboto';
  margin: 3px;
`
export const Score = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-sizing: border-box;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 27px;
  height: fit-content;
  height: 138px;
`
export const ScoreHead = styled.p`
  font-family: 'roboto';
  color: #223a5f;
`
export const ScoreCount = styled.p`
  color: #223a5f;
  font-family: 'roboto';
`

export const PlayGameContainer = styled.ul`
  display: flex;
  justify-content: row;
  width: 35%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  list-style-type: none;
  margin-top: 70px;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
`
export const PopupBtn = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  text-align: right;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const RulesImgContainer = styled.div``

export const RulesImg = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`
