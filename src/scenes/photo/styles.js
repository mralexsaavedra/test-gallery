import styled from 'styled-components/native'
import { Colors, Typography } from '_styles'

export const Container = styled.View`
  background: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`

export const Username = styled.Text`
  font-size: ${Typography.FONT_SIZE_MEDIUM};
  font-weight: ${Typography.FONT_WEIGHT_BOLD}
`

export const Image = styled.Image`
  height: 50%;
  object-fit: cover;
  width: 100%;
`

export const Title = styled.Text`
  font-size: ${Typography.FONT_SIZE_SMALL}
  padding: 1rem;
`
