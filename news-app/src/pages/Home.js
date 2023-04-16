import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import CarouselPage from "../components/CarouselPage";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubtitle,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2047b75c572f488e9bf928daf96345c2"
      )
      .then((response) => {
        console.log(response);
        setData(response.data.articles);
      });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col xs="9">
              <CarouselPage />
            </Col>
            <Col xs="3">
              <div className="card-Container">
                <Card
                  className="my-2"
                  style={{
                    width: "25rem",
                
                  }}
                >
                  <CardHeader className="header">GÜNCEL HABER</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5" className="cardTitle">
                      {user.email}
                      <button onClick={handleLogout}>ÇIKIŞ YAP</button>
                    </CardTitle>
                  </CardBody>
                  <CardFooter>
                    <b>...EN GÜNCEL HABERLERE ANINDA ULAŞIN...</b>{" "}
                  </CardFooter>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="fetch">
                <button className="btn btn-primary" onClick={getNews}>
                  GÜNÜN HABERLERİ İÇİN TIKLAYIN
                </button>
              </div>

              <div className="news">
                <div className="card-container">
                  {data.map((value) => {
                    return (
                      <Card
                        style={{
                          width: "18rem",
                        }}
                      >
                        <img alt="Sample" src={value.urlToImage} />
                        <CardBody>
                          <CardTitle tag="h5">{value.title}</CardTitle>
                          <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                          ></CardSubtitle>
                        </CardBody>
                        <CardBody>
                          <UncontrolledAccordion defaultOpen="0">
                            <AccordionItem>
                              <AccordionHeader targetId="1">
                                Daha Fazla...
                              </AccordionHeader>
                              <AccordionBody accordionId="1">
                                {value.content}
                              </AccordionBody>
                            </AccordionItem>
                          </UncontrolledAccordion>
                        </CardBody>
                        <div className="button">
                          <Link to={value.url}>Haberin Kaynağına Git</Link>
                        </div>
                        <CardFooter>{value.publishedAt}</CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return <div></div>;
}
