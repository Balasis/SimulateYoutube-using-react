import React from "react";
import ReactDOM from "react-dom";

import SmallSideNav from "./smallSideNav";
import VideoThumb from "./mainComps/videoThumb.js";

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
			items: []
		  };

	
	}






















AjaxVideoListStates=()=>{

	clearTimeout(this.timer);
	this.timer=setTimeout(()=>{

	
		


	/* scroll Max now  VideosPerCall=VideosPerCall+20; */
	 const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight,
	document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
	/* scroll now */
	 let scrollTop=window.scrollY;
	 let halfOfMax=limit * 0.85;	
	 	
	 
	if (   (scrollTop >= halfOfMax  ||  scrollTop==limit )  &&  (this.AjaxCalling==false)   ){
		this.AjaxCalling=true;
	
	let NextVideos=new XMLHttpRequest();			 
	NextVideos.onreadystatechange=()=>{
		if (NextVideos.readyState==4 && NextVideos.status == 200){
								/*Create Div to check returned number from Mysql and update VideosRightNow*/
								const checkReturnedDivs=document.createElement('div');
								checkReturnedDivs.insertAdjacentHTML("afterbegin",NextVideos.responseText);
								let CountChilds=checkReturnedDivs.childElementCount;
							

								if (CountChilds==0){
									this.AjaxCalling=false;
								}else{
									document.getElementsByClassName('homeMain__VideosFrame')[0].insertAdjacentHTML("beforeend",NextVideos.responseText);
									let newMax=this.VideosRightNow+CountChilds;
									let vid=document.getElementsByClassName('homeMain__VideosFrame__VideoFrame');
									for (let i=this.VideosRightNow;i<newMax;i++){
										vid[i].addEventListener('mouseenter',()=>this.mEnterVideoThumb(vid[i]));
										vid[i].addEventListener('mouseleave',()=>this.mLeaveVideoThumb(vid[i]));
									}
									this.VideosRightNow=this.VideosRightNow+CountChilds;
									this.AjaxCalling=false;	

									}
		
		}
	}
	
	NextVideos.open("GET","/ajax/homeLoad.php?VideosRightNow="+this.VideosRightNow+"&VideosPerCall="+this.VideosPerCall);		  
	NextVideos.send();
															}
															
						},1500)
		
}







	componentDidMount(){
		this.AjaxCalling=true;	
		
		



		
			this.VideosPerCall=20;
			this.VideosRightNow=0;
			
				const CallVideosOnPageLoad=new XMLHttpRequest();		
					CallVideosOnPageLoad.onreadystatechange=()=>{
						if (CallVideosOnPageLoad.readyState==4  &&  CallVideosOnPageLoad.status==200){
							
							
							let parseIt=JSON.parse(CallVideosOnPageLoad.responseText);
						
							this.setState({
								items:parseIt
							})
							
					
									
						}
					}
					
					
					CallVideosOnPageLoad.open("GET","/ajax/homeLoad.php?VideosRightNow="+this.VideosRightNow+"&VideosPerCall="+this.VideosPerCall);
					CallVideosOnPageLoad.send();
			
			
			
				










		window.addEventListener("scroll",this.AjaxVideoListStates);
		
		  
	}
	componentWillUnmount(){
		window.onload=this.CallVideosOnLoad;
		window.addEventListener("scroll",this.AjaxVideoListStates);
	}

	render(){
	

		return(
			
			<div className="homeContainer">	
				<SmallSideNav/>		
				
<main className={ `    ${(this.props.togglePopUpSideNav ) ? "homeMain homeMainPaddingLeft" : "homeMain" } `}  role="main" >


<div className="homeMain__VideosFrame">
				
					{ (this.state.items).map(v=>{		
			return (					
<VideoThumb key={v.id} v={v}/>				

			)})}

						
</div>

				</main>			
			</div>
		)
	}
	
}

export default Home;