import React, { Component } from 'react'
import styled from "styled-components";

export default class Footer extends Component {    
    render() {
        return (
            <>
                <FooterWrapper>
                    <div className="container py-3">
                    <a className="footer"
                            rel="noopener noreferrer" target={"_blank"} 
                            href='https://portfolyoni.com/'
                        >
                            {new Date().getFullYear()} &copy; by nachala vinograd
                        </a>
                    </div>
                </FooterWrapper>
            </>
        );
    }
}

const FooterWrapper = styled.footer`
    background: var(--secblue);
    height: 30px;
    padding-top: 10px;
    font-weight:bold;
    text-align:center;
    `;
