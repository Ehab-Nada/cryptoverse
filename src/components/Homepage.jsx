import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../App/Slices/coins";
import options from "./services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
const axios = require("axios");

const { Title } = Typography;
function Homepage() {
  const coin = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const stats = coin.data.stats;

  useEffect(() => {
    if (stats === undefined) {
      axios
        .request(options)
        .then(function (response) {
          dispatch(setData(response.data.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [dispatch, stats]);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={stats ? millify(stats.total) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={stats ? millify(stats.totalExchanges) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={stats ? millify(stats.totalMarketCap) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={stats ? millify(stats.total24hVolume) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={stats ? millify(stats.totalMarkets) : 0}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 cryptocurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
    </>
  );
}

export default Homepage;
