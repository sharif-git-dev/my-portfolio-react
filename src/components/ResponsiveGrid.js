
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ResponsiveGrid = () => {
  return (
    <Container>
      <Row className="my-5">
        {/* Column 1 */}
        <Col xs={12} md={6} lg={4}>
          <div className="p-3 bg-light border">Section 1</div>
        </Col>

        {/* Column 2 */}
        <Col xs={12} md={6} lg={4}>
          <div className="p-3 bg-light border">Section 2</div>
        </Col>

        {/* Column 3 */}
        <Col xs={12} md={6} lg={4}>
          <div className="p-3 bg-light border">Section 3</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResponsiveGrid;
