import React from 'react';
import { Link } from "react-router-dom";
import { UncontrolledCollapse } from 'reactstrap';
import '../common/Sidebar.css';

function Sidebar() {
    function closeNav() {
        document.getElementById("home").style.marginLeft= "0";
        document.getElementById("header").style.marginLeft= "0";
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
      }
    return (
        <div className="">
            <div id="mySidenav" className="sidenav">
                <a href="#!" className="closebtn" onClick={closeNav}>&times;</a>
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="" id="togglerCategroy" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Cakes</a>
                            <UncontrolledCollapse toggler="#togglerCategroy">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Chocolate Cakes</a>
                                    </li>
                                    <li>
                                        <a href="#">Vanilla Cakes</a>
                                    </li>
                                </ul>
                            </UncontrolledCollapse>
                        </li>
                        <li>
                            <a href="" id="togglerMedia" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Flowers</a>
                            <UncontrolledCollapse toggler="#togglerMedia">
                                <ul className="collapse list-unstyled" id="pageSubmenu"  style={{'display':'block'}}>
                                    <li>
                                        <a href="#">Roses</a>
                                    </li>
                                    <li>
                                        <a href="#">Lilies</a>
                                    </li>
                                </ul>
                            </UncontrolledCollapse>
                        </li>
                        <li>
                            <a href="#">Conact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;