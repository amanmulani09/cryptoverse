import React,{useState} from 'react'
import HMTLReactParser from 'html-react-parser';
import {useParams} from 'react-router-dom';
import millify from 'millify';
import LineChart from './LineChart';
import {Col,Row,Typography,Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';

const {Title,Text} = Typography; 
const {Option} = Select;
const Cryptodetails = () => {
  const [timePeriod,setTimePeriod] = useState('7d')
  const {coinId} = useParams();
  console.log(coinId)
  const {data} = useGetCryptoDetailsQuery(coinId)
  const {data:coinHistory} = useGetCryptoHistoryQuery({coinId: coinId,timePeriod})
  
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails)
  console.log(data);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  return (
  <Col className='coin-detail-container'>
    <Col className='colin-heading-container'>
    <Title level={2} className="coin-name">
      { cryptoDetails && cryptoDetails.name} ({cryptoDetails && `${cryptoDetails.name}-${cryptoDetails.symbol}`})Price
    </Title>
    <p>{ cryptoDetails && cryptoDetails.name} live Price in US Dollars,
    View values statistics, market Cap and supply.
    </p>
    </Col>
    <Select defaultValue="7d" className="select-timeperiod" placeholder="select-time-period" onChange={(value)=> setTimePeriod(value)}>

    {time.map((date)=> <Option key={date}>{date}</Option>)}
    </Select>

    {/* Render a line chart */}
    <LineChart coinName={cryptoDetails && cryptoDetails.name} coinHistory={coinHistory} currentPrice = { cryptoDetails && millify(cryptoDetails.price)}/>

    <Col className='stats-container'>
      <Col className='coin-value-statistics'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className="coin-details-heading">
            {cryptoDetails && cryptoDetails.name} value statistics
          </Title>
          <p>An overview showing the stats of {cryptoDetails && cryptoDetails.name} </p>
        </Col>
        {stats.map(({icon,title,value})=>{
          return <Col className='coin-stats'>
            <Col className='coin-stats-name'>
              <Text> {icon}</Text>
              <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
             </Col>
        })}
      </Col>
      <Col className='other-value-info'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className="coin-details-heading">
      Other statistics
          </Title>
          <p>An overview showing the stats of all Crytpo Currencies</p>
        </Col>
        {genericStats.map(({icon,title,value})=>{
          return <Col className='coin-stats'>
            <Col className='coin-stats-name'>
              <Text> {icon}</Text>
              <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
             </Col>
        })}
      </Col>

    
    </Col>

    <Col className='coin-desc-link'>
        <Row className='coin-desc'>
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails && cryptoDetails.name}
            {cryptoDetails &&  HMTLReactParser(cryptoDetails.description)}
             </Title>
        </Row>
        <Col className='coin-links'>
        <Title level={3} className="coin-details-heading">
          {cryptoDetails && cryptoDetails.name} Links
        </Title>
        {cryptoDetails && cryptoDetails.links.map((link)=>{
          return (<Row className='coin-link' key={link.name}>
            <Title className='link-name' level={5}>
              {link.type}
            </Title>
            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
          </Row> )
        })} 
        </Col>
      </Col>
      

  </Col>
  )
}

export default Cryptodetails