import { UncontrolledCarousel } from "reactstrap"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/Home.css"

function CarouselPage() {
  return (
    <div className="carouselPage"><UncontrolledCarousel
  items={[
    {

      caption: 'GÜNDEM',
      key: 1,
      src: 'https://ichef.bbci.co.uk/news/1024/branded_news/16069/production/_129371209_gettyimages-1251836910-1.jpg'
    },
    {
      
      caption: 'SPOR&SANAT',
      key: 2,
      src: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0411%2Fr1157274_1296x729_16%2D9.jpg'
    },
    {
      
      caption: 'BİLİM&KÜLTÜR',
      key: 3,
      src: 'https://scitechdaily.com/images/NASAs-Ingenuity-Mars-Helicopter-scaled.jpg'
    }
  ]}
 /></div>
  )
}

 export default CarouselPage;