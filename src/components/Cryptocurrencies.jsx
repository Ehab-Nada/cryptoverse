import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Card, Row, Col, Input } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "../App/Slices/coins";
import options from "./services/cryptoApi";
const Cryptocurrencies = (simplified) => {
  const coin = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [coinsRender, setCoinsRender] = useState([]);
  const coins = coin.coins.data.coins;

  //fetch data from API
  useEffect(() => {
    if (coins === undefined) {
      axios
        .request(options)
        .then(function (response) {
          dispatch(setData(response.data.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [dispatch, coins]);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (coins !== undefined && simplified.simplified === true) {
      const filterdData = coins
        .slice(0, 10)
        .filter((coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setCoinsRender(filterdData);
    } else if (coins !== undefined && simplified.simplified !== true) {
      const filterdData = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCoinsRender(filterdData);
    }
  }, [searchTerm, coins, simplified]);

  return (
    <>
      {simplified.simplified !== true && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={searchHandler} />
        </div>
      )}
      <Typography.Title
        level={4}
        style={{ textAlign: "center" }}
        className="heading"
      >
        Click the currency to show more informations!
      </Typography.Title>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coinsRender.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="currency icon"
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
