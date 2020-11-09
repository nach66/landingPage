import React, { Component } from 'react'
import styled from "styled-components";

export default class Footer extends Component {    
    render() {
        return (
            <>
                {/* <div ref={el => (this.instance = el)} />; */}

                <FooterWrapper>
                    <div className="container py-3">
                        <p style={{
                            textTransform: 'capitalize',
                            direction:'ltr'}}>
                            {new Date().getFullYear()} &copy; by nachala vinograd
                        </p>
                    </div>
                </FooterWrapper>
            </>
        );
    }
}

const FooterWrapper = styled.footer`
    background: var(--lightblue);
    color: var(--mainRed);
    height: 20px;
    padding: 15px;
    text-align:center;
    font-weight:bold;
    `;
