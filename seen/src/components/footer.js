import React from "react";
import { Container, Footer } from "mdbreact";

export default () => (
  <Footer>
    <div className="kicsiFooter">
      <Container className="footerText" fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="/"> Seen</a>
      </Container>
    </div>
  </Footer>
);
