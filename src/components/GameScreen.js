import React, { Component } from 'react';
import ReactDOM from "react-dom"
import Header from './Header';
import image1 from "./cats/1.webp"
import image2 from "./cats/2.webp"
import image3 from "./cats/3.webp"
import image4 from "./cats/4.webp"
import image5 from "./cats/5.webp"
import image6 from "./cats/6.webp"
import image7 from "./cats/7.webp"
import image8 from "./cats/8.webp"
import image9 from "./cats/9.webp"
import image10 from "./cats/10.webp"
import image11 from "./cats/11.webp"
import image12 from "./cats/12.webp"
import image13 from "./cats/13.webp"
import image14 from "./cats/14.webp"
import image15 from "./cats/15.webp"
import image16 from "./cats/16.webp"
import image17 from "./cats/17.webp"
import image18 from "./cats/18.webp"
import image19 from "./cats/19.webp"
import image20 from "./cats/20.webp"

const imagesList = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
image11, image12, image13, image14, image15, image16, image17, image18, image19, image20]
let randomImageList = []
for(let x=1; x < 7; x++){
    randomImageList.push(imagesList[Math.floor(Math.random()*imagesList.length)])
}





class GameScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        playerPoints: 0,
        playerBest: 0,
      }
      
    this.clickedList = []
    }
    pushNewImage(){
      let newImage = document.createElement("img");
      newImage.src = imagesList[Math.floor(Math.random()*imagesList.length)];
      newImage.onclick = this.handleClicking;
      const imageDIV = document.querySelector(".imageBoard");
      imageDIV.appendChild(newImage);
    }
    handleClicking = (e) =>{
      
          console.log(e.currentTarget.src)
          this.clickedList.push(e.currentTarget.src)
          console.log(this.clickedList)
          if(this.clickedList.filter(x => x===e.currentTarget.src).length > 1){
            if(this.state.playerPoints > this.state.playerBest){
              this.setState({
                playerBest: this.state.playerPoints
              })
            }
            this.clickedList = [];

            
            this.setState({
              playerPoints: 0
            })
            e.currentTarget.remove()
            this.pushNewImage();





          }else{

            this.setState({
              playerPoints: this.state.playerPoints + 1,
            })
            e.currentTarget.remove()
            this.pushNewImage();


          }
          
          
      }
      
      
        
      render(){
        return(
            <div>
                <Header current={this.state.playerPoints} best={this.state.playerBest} />
            <div className="imageBoard">
            
          {randomImageList.map((image, index)=> {
            return <img src={image} key={index} onClick={this.handleClicking}></img>;
          })}
             </div>
            </div>
        
    
    )}
        

    }
  


export default GameScreen