import { Button, Table, Tooltip } from 'antd';
import React from 'react'
import {
    ClockCircleOutlined,
  } from '@ant-design/icons';
import AcceptRejctButton from '../Forms/ManagerForm';
import StatusButton from '../Forms/StatusButton';




function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ManagerTable({reqHistory, managerId}) {
    const columns = [
        {
            title: 'Timesheet',
            dataIndex: 'timesheetNo',
            width:140,
            sorter: (a, b) => a.timesheetNo.localeCompare(b.timesheetNo),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Id',
            dataIndex:'userId',
            width:110,
            sorter:(a, b) => a.userId - b.userId,
            sortDirections:['descend', 'ascend'],
        },
        {
            title:'Name',
            dataIndex:'name',
            sorter:(a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Project',
            dataIndex:'projectName',
            ellipsis:'true',
            tooltip:'projectName',
            sorter:(a, b) => a.projectName.localeCompare(b.projectName),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'From Date',
            dataIndex:'periodStart',
            width:140,
            sorter:(a, b) => a.periodStart.localeCompare(b.periodStart),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Till Date',
            dataIndex:'periodEnd',
            width:140,
            sorter:(a, b) => a.periodEnd.localeCompare(b.periodEnd),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Hours',
            dataIndex:'hours',
            width:110,
            sorter:(a, b) => a.hours - b.hours,
            sortDirections: ['descend', 'ascend'],
        },  
        {
            title: 'Action',
            dataIndex: '',
            key: 'operation',
            width:180,
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
            render: (data) => <span className='d-flex justify-content-evenly'><StatusButton status={data}/>
            {(data.canChange==true)?(<AcceptRejctButton timesheetId={data.id} userId={data.userId} managerId={managerId}/>):
            (<a color="text-action"  style={{'text-decoration':'none'}} title="older than 7 days, Can't modify" className='py-1' disabled>Action</a>)}</span>,
        },
    ];
    return(
        <Table columns={columns} dataSource={reqHistory} onChange={onChange}  scroll={{ y: 200 }}></Table>
    );
}   