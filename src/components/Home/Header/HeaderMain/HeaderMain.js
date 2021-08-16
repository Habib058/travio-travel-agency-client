import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../button';
import video from '../../../../assets/videos/travel2.mp4'

const HeaderMain = () => {
    return (
        <HeaderMainContainer>
            <HeaderMainBg>
                <VideoBg src={video} type='video/mp4' autoPlay loop muted playsInline></VideoBg>
            </HeaderMainBg>
            <HeaderMainContent>
                <TravelMainItems>
                    <HeaderMainH1>Welcome To Our Page</HeaderMainH1>
                    <HeaderMainP>Lets build something</HeaderMainP>
                    <Button className='p-3'>Travel Now</Button>
                </TravelMainItems>

            </HeaderMainContent>
        </HeaderMainContainer>
    );
};

export default HeaderMain;

const HeaderMainContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1rem;
position: relative;
margin-top: -80px;
color: white;
:before {
    content: '';
    position: absolute;
    top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 2;
background: linear-gradient(
    180deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0, 0, 0, 0.4) 100%
),
linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%);

}
`
const HeaderMainBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit: cover;
`

const HeaderMainContent = styled.div`
z-index: 3;
height: calc(100vh - 80px);
max-height:100%;
padding: 0rem calc((100vw - 1300px) / 2);

`
const TravelMainItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
height: 100vh;
max-height: 100%;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`
const HeaderMainH1 = styled.h1`
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
`
const HeaderMainP = styled.p`
margin-bottom: 2rem;
font-weight: 400;
`