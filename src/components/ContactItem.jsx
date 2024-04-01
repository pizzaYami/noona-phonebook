import React from "react";
import { Col, Row } from "react-bootstrap";

function ContactItem() {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          alt="profile"
        />
      </Col>
      <Col lg={10}>
        <div>조용주</div>
        <div>010123456789</div>
      </Col>
    </Row>
  );
}

export default ContactItem;
