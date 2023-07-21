import 'modern-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;

}

body {
  margin: 0;
  font-family: 'Sigmar', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  width: 100vw;
  height: 100vh;
  background-image: ${({ theme }) => theme.body};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; 
  color: ${({ theme }) => theme.text};
  transition: all 500ms linear;
}
h1, h2, h3, h4, h5, h6, p {
	margin: 0;
}


ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
	text-decoration: none;
}

 img {
	display: block;
max-width: 100%;
height: auto;
margin: 0;
 }


.link{
	  font-size: 24px;
  padding: 5px 0;
  color: ${({ theme }) => theme.text};
  text-shadow: none;
  position: relative;

}
.link::before {
    position: absolute;
    top: 6px;
    left: -2px;
    overflow: hidden;
    padding: 5px 0;
    max-width: 0;
    border-bottom: 2px solid ${({ theme }) => theme.hoverText};
    color: ${({ theme }) => theme.hoverText};
    content: attr(data-hover);
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }

.link:hover::before, .link.active::before {
	max-width: 100%;
}

`;

export const Section = styled(motion.section)`
  min-height: 90vh;
  padding: ${p => p.padding || '20px'};
  background-color: ${p => p.bgc || 'transparent'};
`;

export const Flex = styled.div`
  display: flex;
  flex: ${p => p.flex || 'auto'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || '0'};
`;
