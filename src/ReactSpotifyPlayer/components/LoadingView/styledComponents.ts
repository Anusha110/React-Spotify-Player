import styled from 'styled-components'
import tw from 'twin.macro'
import colors from '../../../Common/themes/Colors'

export const LoadingContainer = styled.div`
   height: 100vh;
   background-color: ${colors.blackNine};
   ${tw`flex flex-col justify-center items-center`}
`

export const SpotifyImage = styled.img`
   height: 100px;
`

export const LoadingText = styled.p`
   font-size: 30px;
   font-weight: bold;
`
