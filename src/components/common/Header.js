import React from 'react';
import styled, { css } from 'styled-components'

function Header() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "20%";
        document.getElementById("home").style.marginLeft = "20%";
        document.getElementById("header").style.marginLeft = "20%";
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
      }

    const Header = styled.div`
        background-color:#00994f; 
        height: 60px;
    `;

    const Icon = styled.div`
        padding-left:20px; 
        font-size:30px;
        cursor:pointer;
        color:white;
        transform: translateY(18%);
        display: inline-block;
    `;

    const Logo = styled.img`
      height:40px;
      padding-left:20px;
    `;
    return (
        <Header id="header">
            <Icon id="openNav" onClick={openNav}>&#9776;</Icon>
            <Logo src="https://m-i7.fnp.com/assets/images/logo-bb.png" alt="Ferns N Petals"/>
        </Header>
    );
}

export default Header;