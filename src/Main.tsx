import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {AssetTable} from './assets/styles'

const columns = [
  {field: 'id', headerName: 'ID'},
  {field: 'title', headerName: 'Title', width: 500},
  {field: 'body', headerName: 'Body', width: 600}
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <AssetTable>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={6}
      />
    </AssetTable>
    )
}

export default DataTable
