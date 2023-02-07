import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.png';
import leetcode from '../assets/img/leetcode.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1>KSHEETIZ AGRAHARI</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ksheetiz-agrahari-8719b1145/"><img src={navIcon1} alt="" /></a>
                <a href="https://leetcode.com/Ksheetiz_24/"><img src={leetcode} alt="" /></a>
                <a href="https://github.com/ksheetiz"><img src={github} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}