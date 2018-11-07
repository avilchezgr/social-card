import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';
import profile_img from './profile_img.png';
import background_img from './background.jpg';
import cardData from './cardData.js';

class SocialCard extends React.Component{
	
	render(){
		return (
			<div className="socialCard">
				<Tapiz />
				<Pie />
			
			</div>
		
		);
	}
}

class Pie extends React.Component{
	
	render(){
		return(
			<div className="pie">
			
				<p className="pieTitulo">{cardData.titulo}</p>
				<p className="pieInfo">{cardData.infoPie}</p>
				<a className="pieLink" href={cardData.linkPie}>{cardData.linkPie}</a>
			</div>
		);
	}
	
}


class Tapiz extends React.Component{
	
	render(){
		return (
			<div className="tapiz">
				<img src={logo} className="logo" alt="logo" />
				<Titulo 
					legend={cardData.titulo}/>
				<Contact 
					legend={cardData.contacto}/> 
			</div>
		);
	}
}

class Titulo extends React.Component{
	
	render(){
		return (
			<h3 className="titulo">{this.props.legend}</h3>
		);
	}
	
}

class Contact extends React.Component{
	
	render(){
		return(
			<div className="contact">
				<p className="nombreContacto">{this.props.legend}</p>
				<img src={profile_img} className="profileImg" alt="logo" />
			</div>
		);
	}
}

ReactDOM.render(<SocialCard/>, document.getElementById('root'));