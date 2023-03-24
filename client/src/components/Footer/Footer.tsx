import Container from "../Container/Container";
import './Footer.css'

function Footer() {
  return (
    <Container className="footerContainer">
      <p>{"© 2023 by Cinema"}</p>
      <p>{"Legal Notice"}</p>
      <p>{"Privacy Policy"}</p>
    </Container>
  );
}

export { Footer };
