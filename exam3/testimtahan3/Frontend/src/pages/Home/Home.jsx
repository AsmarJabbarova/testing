import React, { useContext, useState } from 'react'
import './../Home/Home.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";


import Carousel from 'react-bootstrap/Carousel';
import { Context } from '../../context/wishContext';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';





function Home() {
  const [product, setProduct] = useState([])
  const [defproduct, setDefproduct] = useState([])
  const {fav, setFav}=useContext(Context)


  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get("http://localhost:4040/products")
      .then((res) => {
        setProduct(res.data);
        setDefproduct(res.data);
        console.log(res.data); 
      })
   
  }, []);

  const handleWish = (elem) => {
    if (fav.find((x) => x._id === elem._id)) {
      alert("Already added to favorites");
    } else {
      setFav((prevFav) => {
        const newFav = [...prevFav, elem];
        localStorage.setItem("wishList", JSON.stringify(newFav));
        return newFav;
      });
    }
  };
  





  const handleDetail = (productId) => {
    navigate(`/detail/${productId}`)
  }

const handleUcuz=()=>{
  const filter2=[...product].sort((a,b)=>a.price-b.price
  
  )
  setProduct(filter2)
}

const handleAandZ=()=>{
  const filter3=[...product].sort((a,b)=>b.name.localeCompare(a.name));
  setProduct(filter3)
}

const handleZandA=()=>{
  const filter4=[...product].sort((a,b)=>a.name.localeCompare(b.name))
  setProduct(filter4)
}


  const handlBaha=()=>{
    const filter=[...product].sort((a,b)=>b.price-a.price)
    setProduct(filter)
    console.log("gh");
    
    }
   const handleDefault=()=>{
    setProduct(defproduct)
   }



  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="containerr">

        <div className="books">
          <div className="title">
            Tasty and Delition Foods
          </div>
          <div className="but">
            <button className='button1'>Book a Table</button>
          </div>
        

        </div>
     
      
        <div className="section2">
          <div className="about">
            <div className="left">
              <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" />
            </div>
            <div className="right">
              <div className="ab">ABOUT TASTY</div>
              <div className="our">
                Our chef cooks the most delicious food for you
              </div>
              <div className="lorem">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </div>

            </div>
          </div>
        </div>

        <div className="secMenu">
          <div className="title">
            Discover Our Exclusive Menu
          </div>
          <div className="buttonss">
            <button className='main'>Main</button>
            <button className="dessert">Dessert</button>
            <button className='drinks'>Drinks</button>
          </div>
          <div className="menu">
            <input type="text" placeholder='search' onChange={(e) => { setSearch(e.target.value) }} />
            <button onClick={handlBaha}>Bahadan</button>
            <button onClick={handleDefault}>Default</button>
            <button onClick={handleUcuz}>Ucuzdan</button>
            <button onClick={handleAandZ}>AandZ</button>
            <button onClick={handleZandA}>ZandA</button>


            <Grid container spacing={2}>
              {
                product.filter(elem => elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((elem, i) => (
                  <Grid item xs={6} key={i} >
                    <div className="card"  >
                      <Card sx={{ display: 'flex' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }} className='asd'>
                            <CardMedia
                              component="img"
                              sx={{ width: "100px", height:"100px", borderRadius:"50%" }}
                              image={elem.img}
                              alt="Live from space album cover"
                            />
                            <div className='meals'> <Typography component="div" variant="h5">
                              {elem.name}
                            </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                Meat, Potatoes, Rice, Tomatoe
                              </Typography></div>
                            <Typography>
                              {elem.price}
                            </Typography>
                            <Typography>
                              <button onClick={()=>handleWish(elem)
                              
                              }>Wish</button>
                              <button onClick={()=>handleDetail(elem._id)}>Detail</button>
                            </Typography>

                          </CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                          </Box>
                        </Box>

                      </Card>
                    </div>
                  </Grid>
                ))
              }
            </Grid>


          </div>



        </div>
      <div className="slider">

      <Carousel>
      <Carousel.Item>
     
      <div className="books">
          <div className="title">
            Tasty and Delition Foods
          </div>
          <div className="but">
            <button className='button1'>Book a Table</button>
          </div>
        

        </div>
      </Carousel.Item>
      <Carousel.Item>
        
      <div className="books">
          <div className="title">
            Tasty and Delition Foods
          </div>
          <div className="but">
            <button className='button1'>Book a Table</button>
          </div>
        

        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="" alt="" />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>


      </div>
    </>
  )
}

export default Home

