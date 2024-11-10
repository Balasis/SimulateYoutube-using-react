import React from "react";
import ReactDOM from "react-dom";

class ArrowBackFromSearch extends React.Component{
	constructor(){
		super();
		this.state={

			}
	}
	
	
	toggleGoBackFromSmallScreenSearch=()=>{
		
		if (window.matchMedia("screen and (max-width:640px)").matches){		
			/*	this.setState({
							SearchBarAndEnter:false,
							ArrowGoBackFromSearch:false,
							LeftMenuAndLogo:true,
							RightMenu:true,
			})*/
		}
	}



	componentDidMount(){
		
	}

	render(){return(
		<div className="header__Left__SmallscreenButton showMe" aria-label="Πίσω">
		<button onClick={this.toggleGoBackFromSmallScreenSearch}>
		<svg mirror-in-rtl="" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" ></path></svg>
		</button>
	</div>
				

		)}
}

export default ArrowBackFromSearch;