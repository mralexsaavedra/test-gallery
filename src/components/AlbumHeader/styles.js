import styled from 'styled-components/native'
import { Colors, Typography } from '_styles'

export const DetailsButton = styled.TouchableOpacity`
  elevation: 8;
  background-color: ${Colors.SECONDARY};
  border-radius: 10;
  padding-vertical: 10;
  padding-horizontal: 12;
`

export const Header = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const PressableTitle = styled.Pressable`
  width: 70%;
`

export const Text = styled.Text`
  color: ${Colors.WHITE};
  font-size: ${Typography.FONT_SIZE_SMALL};
  font-weight: ${Typography.FONT_WEIGHT_BOLD};
`

export const Title = styled.Text`
  font-size: ${Typography.FONT_SIZE_SMALL};
  font-weight: ${Typography.FONT_WEIGHT_BOLD};
  text-transform: uppercase;
`
