import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Button({ type, text, icon }) {
  return (
    <>
      <AwesomeButton type={type} before={icon}>
        {text}
      </AwesomeButton>
    </>
  );
}

export default Button;
