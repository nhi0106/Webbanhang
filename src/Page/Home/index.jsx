import React, { useEffect, useState } from 'react'
import { getBestSeller } from "../../api/ApiResult"
import Anhdep from '../../components/AnhDep'
import BeautyClub from '../../components/BeautyClub'
import BestSeller from '../../components/BestSeller'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
import Viewport from '../../components/Viewport'


    const List_Img = [
        { 
          id: "1",
          img: "https://imagizer.imageshack.com/img922/2549/B2zMSB.jpg",
          subtitle: "Pure, Natural Ingredients",
          title: "Relax and unwick" 
        },
        { 
          id: "2",
          img: "https://imagizer.imageshack.com/img923/9061/9ZFZH7.jpg",
          subtitle: "Free shipping on youth to the people",
          title: "Discover new arrivals"  
        },
        { 
          id: "3",
          img: "https://imagizer.imageshack.com/img924/6814/H2oqYZ.jpg",
          subtitle: "Sale up to 50%",
          title: "Black Friday" 
        },
        
    ];
    const Img_Viewport = "https://imagizer.imageshack.com/img922/3648/9js3Jx.jpg"; //img viewport
    
    const beautyClubBlog = [
      {
        "id": 1,
        "srcimg": "https://imagizer.imageshack.com/img924/1816/XfWXNS.jpg",
        "name": "FALLING FOR YOU — BEAUTY TRENDS WE'RE OBSESSING OVER", 
        "date": "SEPTEMBER 12, 2021"
      },
      {
        "id": 2,
        "srcimg": "https://imagizer.imageshack.com/img923/8461/FR3zOB.jpg",
        "name": "ROUTINE REBEL — BEAUTY TIPS", 
        "date": "MAY 29, 2021"
      },
      {
        "id": 3,
        "srcimg": "https://imagizer.imageshack.com/img924/1816/XfWXNS.jpg",
        "name": "BEAUTY BUYS — MUST-HAVES IN YOUR BAG THIS FALL", 
        "date": "APRIL 19, 2021"
      },
    ];

function Home() {
  const [listBestSeller,setListBestSeller] =useState([])
  useEffect( () => {
    async function Fetch(){
      const res = await getBestSeller();
      if(res)
      setListBestSeller(res)
  }
  Fetch();
 
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <div className="latest">
                     <h2 className="title_pro ">LATEST PRODUCT</h2>
                        <ProductSlider />
                 </div>

                 <Viewport Img_Viewport={Img_Viewport}/>
                 
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={listBestSeller}/>
                 <Anhdep/>
                 <h2 className="title_pro">BEAUTY CLUB BLOG</h2>
                 <BeautyClub beautyClubBlog={beautyClubBlog}/>
            </div>
            
           <Footer/>
        </div>
    )
}

export default Home
