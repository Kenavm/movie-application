import Container from "../Container/Container";
import './Footer.css'

function Footer(props: { text: string }) {
  return (
    <Container className="footerContainer">
      <p>{props.text}</p>
      <p>{"Legal Notice"}</p>
      <p>{"Privacy Policy"}</p>
    </Container>
  );
}

export { Footer };
