// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const MainHeader = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
`
export const CardContainer = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const NotesCard = styled.div`
  height: 100%;
  width: 90%;
  box-shadow: 5px 5px 5px 5px #aab8c8;
  padding: 10px;
`
export const Form = styled.form``
export const Note = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  width: 90%;
  border: none;
  outline: none;
  margin-bottom: 1rem;
`
export const NoteDescription = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  width: 90%;
  border: none;
  outline: none;
  margin-bottom: 2rem;
`
export const BtnContainer = styled.div`
  text-align: end;
`
export const AddBtn = styled.button`
  height: 40px;
  width: 80px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  background-color: #4c63b6;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 30px;
`

export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 0px;
`

export const EmptyNotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
`
export const EmptyImage = styled.img`
  height: 100px;
  width: 100px;
`
export const EmptyHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
`
export const EmptyDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
