import styled from 'styled-components/native'

export const Item = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const List = styled.ScrollView`
  margin: 1rem 0;
`

export const Grid = styled.View`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`
