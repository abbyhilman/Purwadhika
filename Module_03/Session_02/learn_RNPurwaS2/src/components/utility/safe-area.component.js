import {StatusBar, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${colors.bg.primary};
`;
