import React from "react";
import ReactDOM from "react-dom";

/*Header                                         Left*/
import ButtonPopUpSideMenu from './headerComps/buttonSandwich.js';
import LogoYoutube from './headerComps/logoYoutube.js';

/*Header                                         Center*/
import ArrowBackFromSearch from "./headerComps/arrowBackFromSearch.js";
import Search from "./headerComps/search.js";
import Microphone from "./headerComps/microphone.js";

/*Header                                         Right*/
import SmallscreenSearch from "./headerComps/smallScreenSearch.js";
import Apps from './headerComps/apps.js';
import Settings from './headerComps/settings.js';
import Login from './headerComps/login.js';



class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={
				ArrowGoBackFromSearch:false,
				ButtonToGoToSearch:false,
				LeftMenuAndLogo:true,
				Microphone:true,
				RightMenu:true,
				SearchFocus:false,
				
				}

	
	


	if (window.matchMedia("screen and (max-width:640px)").matches){
		this.state.windowSizeSmall=true;
		this.state.SearchBarAndEnter=false;
		this.state.ButtonToGoToSearch=true;
	}else{
		this.state.windowSizeSmall=false;
	}


	if (window.matchMedia("screen and (min-width:640px) and (max-width:1330px)").matches){
		this.state.windowSizeMedium=true;
		this.state.SearchBarAndEnter=true;
		this.state.ButtonToGoToSearch=false;
	}else{
		this.state.windowSizeMedium=false;
	}


	if (window.matchMedia("screen and (min-width:1330px)").matches){
		this.state.windowSizeLarge=true;
		this.state.SearchBarAndEnter=true;
		this.state.ButtonToGoToSearch=false;
	}else{
		this.state.windowSizeLarge=false;
	}


	}

	



	toggleNav=()=>{

		if (this.props.PagehasOnlyPopNav){

					if ( this.props.PopNav==false){						
						this.props.onChangePopNav(true);
					}else if(this.props.PopNav==true){
						this.props.onChangePopNav(false);
					}


		}else{

		
					if ( window.matchMedia("screen and (max-width:1330px)").matches ){
								if ( this.props.PopNav==false){						
												this.props.onChangePopNav(true);
											}else if(this.props.PopNav==true){
												this.props.onChangePopNav(false);
											}	
										
					}else if( window.matchMedia("screen and (min-width:1330px)").matches ){
									if ( this.props.Nav==true){						
												this.props.onChangeNav(false);
											}else if(this.props.Nav==false){
												this.props.onChangeNav(true);
											}

		}


	}



	}














instaClick(){
	
}


	resized=()=>{
	




		if ( window.matchMedia("screen and (max-width:640px)").matches && this.state.windowSizeSmall!==true){
			this.setState({windowSizeSmall:true,})	;
			
						
		}else if (!window.matchMedia("screen and (max-width:640px)").matches && this.state.windowSizeSmall!==false){
			this.setState({windowSizeSmall:false,})	;
						
		}


		if ( window.matchMedia("screen and (min-width:640px) and (max-width:1330px)").matches && this.state.windowSizeMedium!==true){
			this.setState({	windowSizeMedium:true,});
			
		}else if (!window.matchMedia("screen and (min-width:640px) and (max-width:1330px)").matches && this.state.windowSizeMedium!==false){
			this.setState({windowSizeMedium:false,});	
			
		}	

		if ( window.matchMedia("screen and (min-width:1330px)").matches && this.state.windowSizeLarge!==true){
			this.setState({	windowSizeLarge:true,}); 	
		
		}else if (!window.matchMedia("screen and (min-width:1330px)").matches && this.state.windowSizeLarge!==false){
			this.setState({windowSizeLarge:false,});
			
		}

			

		if (window.matchMedia("screen and (min-width:1330px)").matches && (!this.props.PagehasOnlyPopNav) && (this.props.PopNav) ){
			this.props.onChangePopNav(false);	
			
		}






		if (  this.state.windowSizeSmall==true && this.state.SearchFocus!==true && this.state.SearchBarAndEnter!==false){
			
			this.setState({
							LeftMenuAndLogo:true,
							ArrowGoBackFromSearch:false,
							SearchBarAndEnter:false,
							Microphone:true,
							ButtonToGoToSearch:true,							
							RightMenu:true,
							
			})
			
		}else if( this.state.windowSizeSmall==true && this.state.SearchFocus==true && this.state.ArrowGoBackFromSearch!==true){
			this.setState({
							LeftMenuAndLogo:false,
							ArrowGoBackFromSearch:true,
							SearchBarAndEnter:true,
							Microphone:true,
							ButtonToGoToSearch:false,							
							RightMenu:false,
						})

						
		}


		if ( (this.state.windowSizeMedium==true || this.state.windowSizeLarge==true) && (this.state.ButtonToGoToSearch || this.state.ArrowGoBackFromSearch)){
			this.setState({
				LeftMenuAndLogo:true,
				ArrowGoBackFromSearch:false,
				SearchBarAndEnter:true,
				Microphone:true,
				ButtonToGoToSearch:false,							
				RightMenu:true,
				
					})
					

		}






	}


	componentDidMount(){
	
			

			window.addEventListener('resize',()=>{clearTimeout(this.clearMe);this.clearMe=setTimeout(this.resized,200);}   )


	 		

	

	}
	render(){
		
		return(
			
			<div className="header">
				<div className="header__Left">
					{this.state.LeftMenuAndLogo ?<React.Fragment>  <ButtonPopUpSideMenu toggleNav={this.toggleNav} />	<LogoYoutube/>	</React.Fragment>:	null }
					{this.state.ArrowGoBackFromSearch  ?	<ArrowBackFromSearch/>:  null }
				</div>

				<div className="header__Center" tabIndex="-1">
							{this.state.SearchBarAndEnter ? <Search/> :  null }	
							{this.state.Microphone  ?<Microphone/> :  null }			
				</div>



				{this.state.RightMenu  ? 	<React.Fragment>
				<div className="header__Right">
								{this.state.ButtonToGoToSearch  ?<SmallscreenSearch/>:  null }	
								<Apps/>
								<Settings/>
								<Login/>							
									
				</div>	
				</React.Fragment>:  null }	

																			

			</div>

	)}
}

export default Header;