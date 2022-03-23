import styled from 'styled-components'
import tw from 'twin.macro'
import colors from '../../../Common/themes/Colors'

export const TableContainer = styled.div``

export const Table = styled.table`
   margin-top: 30px;
`

export const TableHeader = styled.thead``

export const TableRow = styled.tr<{ bgColor: boolean }>`
   width: 200px;
   cursor: pointer;
`

// background-color: ${props => {
//    props.bgColor ? 'yellow' : colors.blackEight
// }};

export const TableCell = styled.td`
   padding: 10px;
   padding-left: 20px;
   text-align: left;
`

export const ColumHeader = styled.th`
   border-bottom: solid 1px ${colors.blackSix};
   text-align: left;
   padding-bottom: 10px;
   padding-left: 20px;
`
export const TableBody = styled.tbody``
