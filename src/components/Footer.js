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
                            href='https://portifolti.netlify.app/'
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
    height: 40px;
    padding-top: 20px;
    font-weight:bold;
    text-align:center;
    `;
