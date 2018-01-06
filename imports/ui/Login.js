import React from 'react';
import { Meteor } from 'meteor/meteor';
import FontAwesome from 'react-fontawesome';

import './Login.scss';


const Login = () => (
  <div className="login">
    <div className="content">
      Bienvenido a <span className="tittle">Deep politics</span>
      <button className="facebook-btt" onClick={Meteor.loginWithFacebook}>
        <FontAwesome
          className="icon-fb"
          name="facebook-official"
          style={{
            display: 'block',
            float: 'left',
            marginLeft: '6px',
            marginButton: '5px',
          }}
        />
         Continuar con facebook
      </button>
      or <a href="/"><i>skip</i></a>
    </div>
    <div className="donate" >
      <b>Donar</b> <FontAwesome name="btc" />
    </div>
  </div>
);


export default Login;
