import React, { useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = ({simplified}) => {
  console.log(simplified)
const count = simplified ? 10 : 100;
const {data:cryposList,isFetching} = useGetCryptosQuery(count);
const [cryptos,setCryptos] = useState(cryposList?.data?.coins);
console.log(cryptos)
  return (
    <>
    <Row gutter={[32,32]} className="crypto-card-container">
 { cryptos ?  cryptos.map((currency)=>(
  <Col xs={24} sm={12} ig={6} key={currency.uuid} className="crypto-card">
  <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
  <Card title={`${currency.rank}.${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable>

<p> Price : {millify(currency.price)}</p>
<p> Market Cap : {millify(currency.marketCap)}</p>
<p> Daily Change : {millify(currency.change)} %</p>
  </Card>
</Link> 
  </Col>
 )): 'loading...'}
    </Row>
    </>
  )
}

export default Cryptocurrencies