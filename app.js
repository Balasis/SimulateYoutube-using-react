import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Header from './comp/header';
import PopUpSideNav from "./comp/popUpSideNav";
import Home from './comp/home';



class App extends React.Component{
	constructor(){
		super();
		this.state={
			togglePopUpSideNav:true,
			PopNav:false,
			PagehasOnlyPopNav:false,
			UserRequestGoogleLogin:false

		}
		
	}

	TriggerSideMenu=(data)=>{
		this.setState({
			togglePopUpSideNav:data
		})
	}

	TriggerSmallScreenNav=(data)=>{
				this.setState({
			PopNav:data,
		})
	}










createLogin=()=>{gapi.load('auth2',()=>{
		gapi.auth2.init({
		   
		   client_id: '178162283929-6mlrvp7umfsalqsbqe0vjr7dk56937k9.apps.googleusercontent.com',
		   ux_mode:'redirect',
		   
		   
	   
		}).then(() => {
			
		   // DO NOT ATTEMPT TO RENDER BUTTON UNTIL THE 'Init' PROMISE RETURNS
		   gapi.signin2.render('doomed',
			   {
				   
				   'scope': 'https://www.googleapis.com/auth/userinfo.profile',		
				   'onsuccess':this.handleSuccess,
				   'onfailure':this.handleFailure
			   });

	   });
   

   })

}

handleSuccess=user=> {
	
	
	var id_token = user.getAuthResponse().id_token;
	var profile = user.getBasicProfile();
	console.log('here is Id before authentication' + profile.getId());
	const sBackend= new XMLHttpRequest();
	
	sBackend.open('POST','./ajax/authToken');
	
	sBackend.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	sBackend.onload=()=>{		
		/*Getting response into div turning it into html divs with id's to take value */	
	const userInfo=document.createElement('div');
	userInfo.insertAdjacentHTML("afterbegin",sBackend.responseText);
	const id  =userInfo.querySelector("#id").innerHTML;
	console.log('and authenticated id is :'+id);
	const name  =userInfo.querySelector("#name").innerHTML;
	const email   =userInfo.querySelector('#email').innerHTML ;
	const emailVerified  =userInfo.querySelector('#email_verified').innerHTML;
	const locale   =userInfo.querySelector('#locale').innerHTML ;
	const picture   =userInfo.querySelector('#picture').innerHTML  ;	
	
	}	
	
	sBackend.send('idtoken=' + id_token);	
	
	}	
	
	
	handleFailure=()=>{
			
		}


	callMeBack=(here)=>{
		
	}


	componentDidMount(){
		
	const bankai=document.createElement('script');
	
	bankai.src = "https://apis.google.com/js/platform.js";
	bankai.setAttribute("async","");
	document.getElementsByTagName('body')[0].appendChild(bankai);
  
	bankai.onload=this.createLogin;


	}
	render(){
		
		return(
			 
			<BrowserRouter>
			<Header Nav={this.state.togglePopUpSideNav} onChangeNav={this.TriggerSideMenu}  PopNav={this.state.PopNav}  onChangePopNav={this.TriggerSmallScreenNav} PagehasOnlyPopNav={this.state.PagehasOnlyPopNav}/>
			<PopUpSideNav Nav={this.state.togglePopUpSideNav}   PopNav={this.state.PopNav}  onChangePopNav={this.TriggerSmallScreenNav} PagehasOnlyPopNav={this.state.PagehasOnlyPopNav}/>
			<Switch>
			<Route exact path='/'  render={(props)=> <Home {...props} togglePopUpSideNav={this.state.togglePopUpSideNav} />} />
			</Switch>
			
			</BrowserRouter>
	)}
}
ReactDOM.render(<App/>,document.getElementById('app'));

