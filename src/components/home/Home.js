import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

function Home() {
    const [productList, dataSet] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    let [count, setCount] = useState(1);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('http://www.mocky.io/v2/5ed68221340000480106dae9')
          response = await response.json()
          dataSet(response)
        }
    
        fetchMyAPI();
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && count < 3){
            console.log('If');
            setIsFetching(true);
            setCount(count++);
        } else {
            return;
        }
        
    }

    function fetchMoreListItems() {
        async function fetchMyAPI() {
            let response = await fetch('http://www.mocky.io/v2/5ed68221340000480106dae9')
            response = await response.json()
            dataSet(prevState => ([...prevState, ...response]));
        }
      
        fetchMyAPI();
        setIsFetching(false);
    }      

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    let [isFav, setFav ] = useState(false);

    const Icon = styled.div`
        float:right;
        display:inline-block;
        cursor:pointer;
    `;

    const BestSellerBadge = styled.div`
        float:left;
        display:inline-block;
        padding-left:10px;
        padding-right:10px;
        background-color:#00994f;
        color:#fff;
    `;

    const Product = styled.div`
        text-align:center;
        padding-top:20px;
        padding-bottom:20px;
    `;

    const ProductImage = styled.img`
        width:100%;
    `;

    const Discount = styled.span`
        color: green;
    `;

    const Rating = styled.span`
        color: #e0e013;
        font-weight:bold;
    `;

    return (
        <div className="" id="home">
            <div className="row">
                {
                    productList && productList.map((product, index)=>{
                        return (
                            <Product className="cakeDetails col-md-4">
                                <div className="cakeImage">
                                    <div>
                                        <BestSellerBadge>BEST SELLER</BestSellerBadge>
                                        <Icon>
                                            <div onClick={()=>setFav(!isFav)}>
                                                {isFav ? 
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                :
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                }
                                            </div>
                                        </Icon>
                                    </div>
                                    <ProductImage src={product.imgSrc}/>
                                </div>
                                <div>{product.title}</div>
                                <div>&#8377; {product.sellingPrice}</div>
                                <div><Discount>15% off </Discount>&#8377; {product.sellingPrice}</div>
                                <div><Rating>{product.ratingCount} *****</Rating> {product.reviewCount} Reviews</div>
                            </Product>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;