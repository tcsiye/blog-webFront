import React from 'react';
import BaseProps from 'src/declare/baseProps';
import EditView from './EditView';
import View from './View';
import { BaseSelectViewface } from 'src/components/homeLib/Base';
export default class ReginClues extends React.Component < BaseProps >  {
  static EditView = EditView;
  static Preview = View;
  static type = 4;
  static title = '预约买车';
  static info = '预约买车';
  render() {
    return (
      <div>
        <img style={{ width: '100%' }} alt="" src={require('./ReginClues.png')}/>
      </div>
    );
  }
}
