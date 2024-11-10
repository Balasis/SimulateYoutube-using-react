import React from "react";
import ReactDOM from "react-dom";

class VideoThumb extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={
            Gif:false
        }



		
	}

GifOn=()=>{

    if (this.props.v.VideoGif == "./videos/NoImage.png" || this.props.v.VideoGif == "noGifPaths"){
		
    }else{
		this.setState({
			Gif:true
		})
	}

}


GifOff=()=>{
    this.setState({
        Gif:false
    })
}

	
/*
    this is from the php

	"id"=>$Go['id'],
	"VideoPath"=>$Go['VideoPath'],
	"VideoGif"=>$Go['VideoGif'],
	"VideoPic"=>$Go['VideoPic'],
	"VideoTitle"=>$Go['VideoTitle'],
	"VideoDescription"=>$Go['VideoDescription'],
	"Views"=>$Go['Views'],
	"Likes"=>$Go['Likes'],
	"Dislikes"=>$Go['Dislikes'],
	"UploadDate"=>$Go['UploadDate'],
	"Uploader"=>$Go['Uploader'],
*/ 




	componentDidMount(){
		
	}

	render(){
        
        return(
	
															
            	<div key={this.props.v.id} className={ `${(this.props.v.VideoGif == "./videos/NoImage.png" || this.props.v.VideoGif =="noGifPaths") ? 'homeMain__VideosFrame__VideoFrame'  : 'homeMain__VideosFrame__VideoFrame videoThumbGifOn' }`}  onMouseEnter={this.GifOn} onMouseLeave={this.GifOff}>
		<a className='homeMain__VideosFrame__VideoFrame__Upper'>
				<div className='homeMain__VideosFrame__VideoFrame__Upper__Gif'>

				{this.state.Gif ? <img src={this.props.v.VideoGif}/> : null}

				</div>
				<div className='homeMain__VideosFrame__VideoFrame__Upper__Pic'>

                    {(this.props.v.VideoPic == "noPicPaths")? <div>ERROR in id={this.props.v.id}</div> : <img src={this.props.v.VideoPic}/>   }
						

				</div>			
		</a>
		<div className='homeMain__VideosFrame__VideoFrame__Bottom'>
				<div className='homeMain__VideosFrame__VideoFrame__Bottom__ProfileInfo'>

				</div>
				<div className='homeMain__VideosFrame__VideoFrame__Bottom__VideoInfo'>
						<div className='homeMain__VideosFrame__VideoFrame__Bottom__VideoInfo__Title'>
							{this.props.v.VideoTitle}
						</div>
						<div className='homeMain__VideosFrame__VideoFrame__Bottom__VideoInfo__Description'>
							{this.props.v.VideoDescription}
						</div>				
				</div>
				<div className='homeMain__VideosFrame__VideoFrame__Bottom__Settings'>

				</div>

		</div>

	</div>
		
	





		


		)
	}
}

export default VideoThumb;