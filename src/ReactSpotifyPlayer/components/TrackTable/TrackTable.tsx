import { observer } from 'mobx-react'
import React from 'react'
import { useTable } from 'react-table'
import {
   FormattedAlbumTrackType,
   FormattedTrackItemType
} from '../../stores/types'
import {
   ColumHeader,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHeader,
   TableRow
} from './styledComponents'

export interface ColumnInfoType {
   Header: string
   id?: string
   accessor: string | ((_row: any, index: number) => string)
   width?: string
}

export interface TrackTableType {
   tracks: FormattedTrackItemType[] | FormattedAlbumTrackType[]
   columnInfo: ColumnInfoType[]
   playTrack: (FormattedTrackItemType) => void
   getTrackBgColor: (FormattedTrackItemType) => string
}

const TrackTable = observer((props: TrackTableType) => {
   const { tracks, columnInfo, playTrack, getTrackBgColor } = props

   const data = React.useMemo(() => tracks, [tracks])

   const columns = React.useMemo(() => columnInfo, [columnInfo])

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
   } = useTable({ columns, data })

   const renderTableHeader = () => (
      <TableHeader>
         {/* eslint-disable react/jsx-key */}
         {headerGroups.map(headerGroup => (
            <TableRow>
               {headerGroup.headers.map(column => (
                  <ColumHeader
                     width={column.width}
                     {...column.getHeaderProps()}
                  >
                     {column.render('Header')}
                  </ColumHeader>
               ))}
            </TableRow>
         ))}
      </TableHeader>
   )

   return (
      <>
         {/* eslint-disable react/jsx-key */}
         <TableContainer>
            <Table {...getTableProps()}>
               {renderTableHeader()}
               <TableBody {...getTableBodyProps()}>
                  {rows.map(row => {
                     prepareRow(row)
                     const trackInfo = row.original.track
                        ? row.original.track
                        : row.original
                     return (
                        <TableRow
                           {...row.getRowProps()}
                           onClick={() => playTrack(trackInfo)}
                        >
                           {row.cells.map(cell => (
                              <TableCell
                                 {...cell.getCellProps()}
                                 style={{
                                    backgroundColor: `${getTrackBgColor(
                                       trackInfo
                                    )}`
                                 }}
                              >
                                 {cell.render('Cell')}
                              </TableCell>
                           ))}
                        </TableRow>
                     )
                  })}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   )
})

export default TrackTable
