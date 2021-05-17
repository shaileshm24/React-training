import React, { Component} from 'react';
import { Card, Modal, Input, Button } from 'antd';
import { Icon, Form } from '@ant-design/compatible';
import './User.css'; 
import 'antd/dist/antd.css';
import '@ant-design/compatible/assets/index.css';


class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      like: false,
      modal: false,
    };
  }
 

  likeButton = () => {
    this.setState({like: !this.state.like});
  };

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        this.props.updateUserData(this.props.user.id, data);
        this.toggleModal();
      }
    });
  };

  

  toggleModal = () => {
    this.setState({ modal: !this.state.modal});
  };

  render() {
    const { user, deleteUser } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { like, modal } = this.state;

    return (
      <div>
     
        <Modal title="Edit Details" visible={modal} onOk={this.handleSubmit} onCancel={this.toggleModal}>
          <Form {...{labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          }}}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                initialValue: user.name,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                initialValue: user.email,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                  {
                    type: 'email',
                    message: 'Invalid email',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Phone">
              {getFieldDecorator('phone', {
                initialValue: user.phone,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Website">
              {getFieldDecorator('website', {
                initialValue: user.website,
                rules: [
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
       
        <Card
          style={{ margin: 15 }}
          cover={
            <div className="cardHeadImage" style={{display: "flex"}}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                alt="Avatar"
                style={{ width: 200, height: 200 }}
              />
            </div>
          }
          actions={[
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={this.likeButton}
            >
              <Icon type="heart" style={{ color: '#FF0000', fontSize: 20 }} theme={like ? 'filled' : 'outlined'} />
            </button>,
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={this.toggleModal}
            >
              <Icon type="edit" style={{ fontSize: 18 }} />
            </button>,
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              <Icon type="delete" theme="filled" style={{ fontSize: 18 }} />
            </button>,
          ]}
        >
          <h3>{user.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon type="mail" style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>{user.email}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon type="phone" style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>{user.phone}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon type="global" style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: 10 }}>http://{user.website}</p>
          </div>
        </Card>
        </div>
    );
  }
}

export default Form.create()(User);
