import React from "react";
import ReactDOM from "react-dom";

class ButtonPopUpSideMenu extends React.Component{
	constructor(){
		super();
		this.state={

			}
	}
	
	componentDidMount(){
		
	}

	render(){return(
		
					<div className="header__Left__Menu">
								<button onClick={this.props.toggleNav}></button>
					</div>		

		)}
}

export default ButtonPopUpSideMenu;