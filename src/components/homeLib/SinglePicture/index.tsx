import React from 'react';
import BaseProps from 'src/declare/baseProps';
import EditView from './EditView';
import View from './View';
import { BaseSelectViewface } from 'src/components/homeLib/Base';
export default class SinglePicture extends React.Component<BaseProps> {
  static EditView = EditView;
  static Preview = View;
  static type = 8;
  static title = '图片';
  static info = '图片';
  render() {
    return (
      <div>
        <img
          style={{ width: '100%' }}
          alt=""
          src={require('./SinglePicture.png')}
        />
      </div>
    );
  }
}
