import React from 'react';
import BaseProps from 'src/declare/baseProps';
import { Form, Input, Card, Alert } from 'antd';
import UploadImg from '../../UploadImg';
import { EditViewProps } from 'src/components/homeLib/Base';
import LinkGenerPro from 'src/components/LinkgenerPro';
import BaseHead from 'src/components/homeLib/BaseHead';
@(Form.create as any)()
export default class EditView extends React.Component<EditViewProps> {
  handleSave = () => {
    this.props.form.validateFields({ force: true }, async (err, values) => {
      if (!err) {
        this.props.onChange(values);
      }
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
  };
  handleRemove = () => {
    this.props.onRemove(this.props.index, this.props.id);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const headProps = {
      title: '导购栏样式1',
      onSave: this.handleSave,
      onReset: this.handleReset,
      onRemove: this.handleRemove
    };
    return (
      <div>
        <BaseHead {...headProps} />
        <Form>
          <Card title="位置1">
            <Form.Item label="图片">
              {getFieldDecorator('contentList[0].picUrl', {
                rules: [{ required: true, message: '必填项' }],
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[0].picUrl
                  : ''
              })(
                <UploadImg
                  width={312}
                  height={422}
                  style={{ width: '156px', height: '211px' }}
                />
              )}
              <Alert
                message="请上传格式为png或gif的图片，尺寸312px*422px"
                type="info"
                showIcon
              />
            </Form.Item>
            <Form.Item label="链接">
              {getFieldDecorator('contentList[0].actionUrl', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[0].actionUrl
                  : ''
              })(<LinkGenerPro isShowTrackValue={false} />)}
            </Form.Item>
            <Form.Item label="打点值">
              {getFieldDecorator('contentList[0].trackValue', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[0].trackValue
                  : ''
              })(<Input />)}
            </Form.Item>
          </Card>
          <Card title="位置2">
            <Form.Item label="图片">
              {getFieldDecorator('contentList[1].picUrl', {
                rules: [{ required: true, message: '必填项' }],
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[1].picUrl
                  : ''
              })(
                <UploadImg
                  width={368}
                  height={206}
                  style={{ width: '184px', height: '103px' }}
                />
              )}
              <Alert
                message="请上传格式为png或gif的图片，尺寸368px*206px"
                type="info"
                showIcon
              />
            </Form.Item>
            <Form.Item label="链接">
              {getFieldDecorator('contentList[1].actionUrl', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[1].actionUrl
                  : ''
              })(<LinkGenerPro />)}
            </Form.Item>
            <Form.Item label="打点值">
              {getFieldDecorator('contentList[1].trackValue', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[1].trackValue
                  : ''
              })(<Input />)}
            </Form.Item>
          </Card>
          <Card title="位置3">
            <Form.Item label="图片">
              {getFieldDecorator('contentList[2].picUrl', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[2].picUrl
                  : ''
              })(
                <UploadImg
                  width={368}
                  height={206}
                  style={{ width: '184px', height: '103px' }}
                />
              )}
              <Alert
                message="请上传格式为png或gif的图片，尺寸368px*206px"
                type="info"
                showIcon
              />
            </Form.Item>
            <Form.Item label="链接">
              {getFieldDecorator('contentList[2].actionUrl', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[2].actionUrl
                  : ''
              })(<LinkGenerPro />)}
            </Form.Item>
            <Form.Item label="打点值">
              {getFieldDecorator('contentList[2].trackValue', {
                initialValue: this.props.content.contentList
                  ? this.props.content.contentList[2].trackValue
                  : ''
              })(<Input />)}
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}
