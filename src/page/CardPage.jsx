import styled, {keyframes} from 'styled-components'

import video from '../assets/video/video.mp4'
import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import phone from '../assets/icons/mobile-bouton.svg'
import mail from '../assets/icons/enveloppe.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import avatar from '../assets/images/avatar.jpeg'
import arrowRight from '../assets/icons/arrow-right.svg'

const fadAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const transition = keyframes`
  from {
    transform: translateX(8px) translatey(8px);
  }
  to {
    transform: translateX(0) translateY(0);
  }
`

const fadTransform = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
  
  @media(max-width: 600px) {
    align-items: start;
    height: auto;
  }
`

const Card = styled.div`
  width: 40em;
  border-radius: 2em;
  overflow-x: hidden;
  background-color: white;
  animation: ${fadAnimation} 1s linear running;

  @media(max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`
const HeaderPadding = styled.div`
  margin: 4em 2.5em 2.5em 2.5em;
  @media(max-width: 600px) {
    margin: 3em 1.5em 1.5em 1.5em;
  }
`
const CardHeader = styled.div`
  position: relative;
  height: 28em;
  width: 100%;

  @media(max-width: 600px) {
    height: 32.5em;
  }

  @media (max-width: 280px) {
    height: 36.5em;
  }
`
const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Barnner = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`
const CardBody = styled.div`
  display: flex;
  @media(max-width: 600px) {
    flex-direction: column;
  }
`
const TitleHeader = styled.h1`
  font-size: 2.4rem;
`
const HeaderContent = styled.div`
  flex: 1.5;
  color: white;
`

const TitleBody = styled.h2`
  margin-bottom: 1.5em;
`

const Content = styled.div`
  flex: 1;
  margin: 2.5em;
  @media (max-width: 600px) {
    margin: 1.5em;
  }
`

const Divider = styled.div`
  width: 0.05em;
  background-color: #afafaf;

  @media (max-width: 600px) {
    height: 0.05em;
    margin: 1.5em 0 1.5em 0;
    width: 100%;
  }
`
const Button = styled.button`
  padding: 0.7em 1.5em;
  width: 100%;
  background-color: white;
  border: 0.1em solid rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10em;
  transform: scale(1);
  display: flex;
  align-items: center;
  animation: ${transition} 1s ease-out running;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    border-color: black;
  }
  img {
    width: 1.4em;
    height: 1.4em;
  }
`
const SizedBox = styled.div`
  height: ${props => props.height != null ? props.height : 0};
  width: ${props => props.width != null ? props.width : 0};

  @media(max-width: 600px) {
    width: ${props => props.height != null ? props.height : 0};
    height: ${props => props.width != null ? props.width : 0};
  }
`

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-left: 1.5em;
  @media(max-width: 600px) {
    margin-left: 0;
  }
`

const IconButton = styled.a`
  border-radius: 100%;
  margin: 0 1em 1em 0;
  background-color: white;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  cursor: pointer;
  padding: 0.8em;
  border: none;
  transform: translateY(0);
  animation: ${fadTransform} ${props => props.duration} ease-in-out running;
  transition: transform  0.3s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: translateY(-4px);
  }
`

const FlexBox = styled.div`
  display: flex;
  align-items: start;
  
  @media(max-width: 600px) {
    flex-direction: column;
  }
`

const Avatar = styled.div`
  width: 6em;
  height: 6em;
  border-radius: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  } 
`
const Circle = styled.div`
  padding: .4em;
  width: 6em;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: .2em solid white;
  border-radius: 100%;
`
const ActivityName = styled.h2`
  font-size: 0.9rem;
  color: white;
`
function CardPage() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <Video autoPlay loop muted src={video}/>
                    <Barnner>
                        <HeaderPadding>
                            <Circle>
                                <Avatar>
                                    <img src={avatar} alt='avatar'/>
                                </Avatar>
                            </Circle>
                            <SizedBox height='2em' width='1.5em'/>
                            <ActivityName>SOFTWARE ENGINEER</ActivityName>
                            <SizedBox height='1.5em' width='1em'/>
                            <FlexBox>
                                <HeaderContent>
                                    <TitleHeader>Amouzou David</TitleHeader>
                                    <SizedBox height='1.5em' width='1em'/>
                                    <p>Etiam lorem ipsum, suspendisse faucibus sed interdum posuere lorem ipsum
                                        dolor.</p>
                                </HeaderContent>
                                <SizedBox width='2em'/>
                                <Wrap>
                                    <IconButton duration='200ms'>
                                        <img src={github} alt="github"/>
                                    </IconButton>
                                    <IconButton duration='400ms'>
                                        <img src={instagram} alt="instagram"/>
                                    </IconButton>
                                    <IconButton duration='600ms'>
                                        <img src={phone} alt="phone"/>
                                    </IconButton>
                                    <IconButton duration='800ms'>
                                        <img src={twitter} alt="twitter"/>
                                    </IconButton>
                                    <IconButton duration='1000ms'>
                                        <img src={mail} alt="mail"/>
                                    </IconButton>
                                    <IconButton duration='1200ms'>
                                        <img src={linkedin} alt="linkedin"/>
                                    </IconButton>
                                </Wrap>
                            </FlexBox>
                        </HeaderPadding>
                    </Barnner>
                </CardHeader>
                <CardBody>
                    <Content>
                        <TitleBody>Massa vitae</TitleBody>
                        <p>Sed imperdiet dui amet nulla sed viverra tellus, lectus urna veroeros.</p>
                    </Content>
                    <Divider/>
                    <Content>
                        <Button>Etiam faucibus <img src={arrowRight} alt='arrow-right'/></Button>
                        <SizedBox height='1em' width='1em'/>
                        <Button>Sed interdum <img src={arrowRight} alt='arrow-right'/></Button>
                    </Content>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CardPage