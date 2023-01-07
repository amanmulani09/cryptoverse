import React from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment/moment';
const {Text,Title} = Typography;
const {Option} = Select;
const News = ({simplified}) => {
 console.log(simplified)
 const countValue = simplified ? 6: 12;
const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrencies',count: countValue})
 console.log(cryptoNews)
  return (
    <div>
<h1> Hello Cryptoverse  </h1>  </div>
  )
}

export default News