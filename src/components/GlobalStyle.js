import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

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
.active{
	color: yellow;
}
`;
