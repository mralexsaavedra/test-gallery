import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Item = styled.View`
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

export const List = styled.ScrollView`
  margin: 16px 0;
`

export const Grid = styled.View`
  ${Platform.OS !== 'web' && css`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `}
  ${Platform.OS === 'web' && css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}
`
