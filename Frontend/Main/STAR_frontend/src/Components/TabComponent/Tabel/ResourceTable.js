import { Table } from 'antd';
import React from 'react'
import StatusButton from '../Forms/StatusButton';

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ManagerTable({ReqData}) {
    const columns = [
        {
            title: 'Timesheet',
            dataIndex: 'timesheetNo',
            sorter: (a, b) => a.timesheetNo.localeCompare(b.timesheetNo),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Project',
            dataIndex:'projectName',
            sorter:(a, b) => a.projectName.localeCompare(b.projectName),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Hours',
            dataIndex:'extraHours',
            sorter:(a, b) => a.extraHours - b.extraHours,
            sortDirections: ['descend', 'ascend'],
        },  
        {
            title:'From Date',
            dataIndex:'startTime',
            sorter:(a, b) => a.startTime.localeCompare(b.startTime),
            sortDirections: ['descend', 'ascend'],
        },        {
            title:'Till Date',
            dataIndex:'endTime',
            sorter:(a, b) => a.endTime.localeCompare(b.endTime),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Manager Name',
            dataIndex:'managerName',
            sorter:(a, b) => a.managerName.localeCompare(b.managerName),
            sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Status',
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
          render: (data) => <StatusButton status={data}/>,
        },
    ];
    return(
        <Table columns={columns} dataSource={ReqData} onChange={onChange}  scroll={{ y: 200 }} ></Table>
    );
}   