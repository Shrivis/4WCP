import { Table } from 'antd';
import React from 'react'
import AcceptRejctButton from '../Forms/ManagerForm';




function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ManagerTable({managerReq, managerId}) {
    const columns = [
        {
            title: 'Timesheet',
            dataIndex: 'timesheetNo',
            sorter: (a, b) => a.timesheetNo.localeCompare(b.timesheetNo),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Id',
            dataIndex:'userId',
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
            sorter:(a, b) => a.projectName.localeCompare(b.projectName),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'From Date',
            dataIndex:'periodStart',
            sorter:(a, b) => a.periodStart.localeCompare(b.periodStart),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Till Date',
            dataIndex:'periodEnd',
            sorter:(a, b) => a.periodEnd.localeCompare(b.periodEnd),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Expected Hours',
            dataIndex:'expectedHours',
            sorter:(a, b) => a.expectedHours - b.expectedHours,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Actual Hours',
            dataIndex:'hours',
            sorter:(a, b) => a.hours - b.hours,
            sortDirections: ['descend', 'ascend'],
        },  
        {
            title: 'Action',
            dataIndex: '',
            key: 'operation',
            render: (data) => <AcceptRejctButton timesheetId={data.id} managerId={managerId}/>,
        },
    ];
      
    return(
        <Table columns={columns} dataSource={managerReq} onChange={onChange}  scroll={{ y: 200 }} ></Table>
    );
}   