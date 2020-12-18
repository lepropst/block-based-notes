import React, {useContext} from 'react';
import {Row, Col, Button} from 'antd';
import {NoteBookViewer} from '../notebooks';
export default function Home() {
  return (
    <Row gutter={[8, 8]}>
      <Col>hello from home</Col>
    </Row>
  );
}
