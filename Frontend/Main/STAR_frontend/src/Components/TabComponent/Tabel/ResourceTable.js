import {React, useState, useRef} from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import HistoryTrail from './HistoryTrail';
import Accept from '../Card/StatisticsCardAccept'
import Pending from '../Card/StatisticsCardPending'
import Reject from '../Card/StatisticsCardReject'

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ManagerTable({reqData, status}) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
        style={{
            padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
        >
        <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
            marginBottom: 8,
            display: 'block',
            }}
        />
        <Space>
            <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
                width: 90,
            }}
            >
            Search
            </Button>
            <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
                width: 90,
            }}
            >
            Reset
            </Button>
        </Space>
        </div>
    ),
    filterIcon: (filtered) => (
        <SearchOutlined
        style={{
            color: filtered ? '#1890ff' : undefined,
        }}
        />
    ),
    onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
        if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
        }
    },
    render: (text) =>
        searchedColumn === dataIndex ? (
        <Highlighter
            highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
        />
        ) : (
        text
        ),
    });
    const columns = [
        {
            title: 'Timesheet',
            dataIndex: 'timesheetNo',
            width:140,
            sorter: (a, b) => a.timesheetNo.localeCompare(b.timesheetNo),
            sortDirections: ['descend', 'ascend'],    
            responsive: ['lg']
        },
        {
            title:'Project',
            dataIndex:'projectName',
            ellipsis:'true',
            ...getColumnSearchProps('projectName'),
            sorter:(a, b) => a.projectName.localeCompare(b.projectName),
            sortDirections: ['descend', 'ascend'],    
            responsive: ['sm']
        },
        {
            title:'Hours',
            dataIndex:'extraHours',
            width:110,
            sorter:(a, b) => a.extraHours - b.extraHours,
            sortDirections: ['descend', 'ascend'],
        },  
        {
            title:'From Date',
            dataIndex:'startTime',
            width:140,
            sorter:(a, b) => a.startTime.localeCompare(b.startTime),
            sortDirections: ['descend', 'ascend'],
            responsive: ['md']
        },        
        {
            title:'Till Date',
            dataIndex:'endTime',
            width:140,
            sorter:(a, b) => a.endTime.localeCompare(b.endTime),
            sortDirections: ['descend', 'ascend'],
            responsive: ['md']
        },
        {
            title:'Manager Name',
            dataIndex:'managerName',
            ...getColumnSearchProps('managerName'),
            sorter:(a, b) => a.managerName.localeCompare(b.managerName),
            sortDirections: ['descend', 'ascend'],
            responsive: ['lg']
        },
        {
          title: 'Status',
          width:110,
          dataIndex: '',
          key:'operation',    
          filters: [
            {
              text: 'Approved',
              value: 'Approved',
            },
            {
              text: 'Pending',
              value: 'Pending',
            },
            {
              text: 'Rejected',
              value: 'Rejected',
            },
          ],
          filterSearch: true,
          onFilter: (value, record) => record.status.startsWith(value),
          render: (data) =>       
          <Space>
            {(data.status === 'Approved') ? (<div className="text-success">{data.status}</div>):
            (data.status === 'Rejected') ? (<div className="text-danger">{data.status}</div>):
            (<div className="text-warning">{data.status}</div>)}
          </Space>,
        },
    ];
    return(
        <div>
            <div class="row justify-content-evenly">
                <Accept count={status.resourceApproved}/>
                <Pending count={reqData.length-status.resourceApproved-status.resourceRejected}/>
                <Reject count={status.resourceRejected}/>
            </div>
            <Table className='mt-3' columns={columns} expandable={{
                expandedRowRender: (record) => (
                    <HistoryTrail trail={record.requestLogs}/>
                    ),
                    rowExpandable: (record) => record.status !== 'Pending',
                }} dataSource={reqData} onChange={onChange}  scroll={{ y: '47vh' }} >
            </Table>
        </div>
    );
}   