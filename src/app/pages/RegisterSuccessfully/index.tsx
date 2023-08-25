import React from 'react';
import HeaderBar from '../../elements/HeaderBar';
import { Button, Form, Input, Result, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const RegisterSuccessfully = () => {
  const navigate = useNavigate();
  return (
    <div className="ww-page-container register-result-page">
      <HeaderBar text="Register successfully" />
      <Result
        status="success"
        title={<h2>Register successfully</h2>}
        subTitle={(
          <div className="subtitle">
            <strong> 2 of 3 login keys are required to login:</strong> <br/>
            <strong> 1st login key:</strong>  Yourself <br/>
            <strong>2nd login key: </strong>Wallet server <br/>
              <strong>3rd login key: </strong>IPFS
          </div>
        )}
        extra={[
          <Button
            key="console"
            onClick={() => {
              navigate('/')
            }}
          >
            Done
          </Button>,
          <Button
            key="buy"
            onClick={() => {
              navigate('/login')
            }}
          >Login</Button>,
        ]}
      />
    </div>
  );
};

export default RegisterSuccessfully;