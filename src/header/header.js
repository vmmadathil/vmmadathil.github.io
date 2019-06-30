import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const textArray = ['avidly listen to music', 'am trying to make a sustainable society', 'enjoy political drama films','use technology, data, and social science to understand the world', 'love sports', 'explore how technology affects economics and society', 'drink a lot of tea', 'apply machine learning to social and economic problems' , 'enjoy Tex-Mex', 'build and design with others', 'enjoy reading']
const headerArray = ["I'm Visakh Madathil."];

export default class Header extends Component {

    constructor() {
        super();
        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1 });
        }, 2500);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }



    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
        let header = headerArray[this.state.textIdx % headerArray.length];
        return (
            <React.Fragment>


                <header id="home">
                    
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="https://medium.com/@madathilvisakh">Blog</a></li>
                        </ul> 
                     </nav> 
                

                    <div className="row banner">

                    
                            <div className="banner-text">
                                <Typing>
                                    <h1 className="responsive-headline"> {header}</h1>
                                </Typing>

                                <h3>I use data and build technology to create economic and business impact. I'm a budding writer (of words and code), economist, and machine learning engineer.
                                </h3>


                                <ul className="social">
                                    <li><a href="https://twitter.com/MadathilVisakh"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/visakh-madathil"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="https://github.com/vmmadathil"><i className="fa fa-github" /></a></li>
                                    <li><a href="mailto:madathilvisakh@gmail.com"><i class="fa fa-envelope"/></a></li>
                                </ul>



                                <p> I {textThatChanges} </p>
                            </div>
                    </div> 
                </header> {/* Header End */}

            </React.Fragment>
                    );
                }
            }

