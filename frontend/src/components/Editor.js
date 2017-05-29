import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolsPan from './editor/ToolsPan';
import ImagesPan from './editor/ImagesPan';
import EditorArea from './editor/EditorArea';

class Editor extends Component {
  render() {
    return (
      <div className="level">
        <ToolsPan />
        <EditorArea />
        <ImagesPan />
      </div>
    );
  }
}

export default connect()(Editor);
