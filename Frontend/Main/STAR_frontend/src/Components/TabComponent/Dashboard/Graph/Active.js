import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
export default function Active({hData}) {
    const over = hData.overUtilizedHours.reduce((acc, curr) => acc + curr, 0);
    const under = hData.underUtilizedHours.reduce((acc, curr) => acc + curr, 0);
    return (
    <><Row className='' gutter={16}>
        <Col span={12}>
        <Card bordered={false}>
            <Statistic
            
            title="Extra"
            value={over}
            valueStyle={{
                color: '#cf1322',
                fontSize: '13px',
            }}
            prefix={<ArrowUpOutlined />}
            suffix='hr'
            />
        </Card>
        </Col>
        <Col span={12}>
        <Card bordered={false}>
            <Statistic
            title="Idle"
            value={under}
            valueStyle={{
                color: '#cf1322',
                fontSize: '13px',
            }}
            prefix={<ArrowDownOutlined />}
            suffix='hr'
            />
        </Card>
        </Col>
    </Row>
        <Row className='mt-1' gutter={16}>
        <Col span={12}>
        <Card bordered={false}>
            <Statistic
            
            title="Ideal Extra"
            value={over-under}
            valueStyle={{
                color: 'green',
                fontSize: '12px',
            }}
            prefix={<ArrowUpOutlined />}
            suffix='hr'
            />
        </Card>
        </Col>
        <Col span={12}>
        <Card bordered={false}>
            <Statistic
            title="Ideal Idle"
            value={0}
            valueStyle={{
                color: 'green',
                fontSize: '12px',
            }}
            prefix={<ArrowDownOutlined />}
            suffix='hr'
            />
        </Card>
        </Col>
    </Row></>
    );
}