import React from 'react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'

import icon from './assets/cryptocurrency.png';
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo" >
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>

    </Button> */}
            </div>

            <Menu theme='dard'>

                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                
                  <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchange</Link>
                </Menu.Item>
                
                  <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item> 
            </Menu>
        </div>
    )
}

export default Navbar