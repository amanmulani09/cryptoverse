import React from 'react'
import {Col,Row,Typography} from 'antd'
const {Title} = Typography
const LineChart = ({coinName,coinHistory,currentPrice}) => {
    console.log(coinHistory,coinName)
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
   
    // const data = {
    //   labels: coinTimestamp,
    //   datasets: [
    //     {
    //       label: 'Price In USD',
    //       data: coinPrice,
    //       fill: false,
    //       backgroundColor: '#0071bd',
    //       borderColor: '#0071bd',
    //     },
    //   ],
    // };
    // const options = {
    //     scales: {
    //       yAxes: [
    //         {
    //         type:"time",
    //           ticks: {

    //             beginAtZero: true,
    //           },
    //         },
    //       ],
    //     },
    //   };
    
  return (
    <>
    <Row className='chart-header'>
        <Title level={2} className="chart-title">
            {coinName && coinName} Price Chart
        </Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>
                {coinHistory && coinHistory.data.change} %
            </Title>
            <Title level={5} className='current-price'>
                Current {coinName && coinName} Price : ${currentPrice && currentPrice}
            </Title>
        </Col>
    </Row>
    {/* <Line data={data} options={options} /> */}
    </>
  )
}

export default LineChart