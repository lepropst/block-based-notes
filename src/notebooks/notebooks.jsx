import React, {useContext} from 'react';
import {Row, Col} from 'antd';
import {GlobalContext} from './notebook_controller';

export default function NoteBookViewer() {
  const [count] = useContext(GlobalContext);
  return (
    <Row>
      <Col xs={24}>{count}</Col>
      <Col xs={24}>
        <h1 contentEditable={true}>editable h1 heading</h1>
      </Col>
    </Row>
  );
}
