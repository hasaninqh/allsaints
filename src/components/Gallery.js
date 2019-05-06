import React, { Component } from "react"
import "../App.css"
import { withStyles } from "@material-ui/core/styles"
// import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent"
import {
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13
  // image14,
  // image15,
  // image16
} from "../images"
withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent)

export default class Gallery extends Component {
  state = {
    open: false
  }
  //   myModalRefs= {ele1:"ele1", }
  // myModal.ele1
  handleClick = ele => {
    // var modal = document.getElementById('myModal');
    //  var modal = e.target.name;
    //  modal.style.display = "block";
    //  console.log(e.target);
    // console.log(this.myModal)
    const str = "myModal" + ele
    this[str].style.display = "block"
    // if(ele==1){
    //    console.log(this.myModal1)
    //    name = 3
    //    this.`${myModal}+${ele}`.style.display="block"
    // }else{
    //    this.myModal2.style.display="block"
    // }

    //modalImg.src = this.props.src;
  }

  handleClose = ele => {
    //var modal = document.getElementById('myModal');
    const str = "myModal" + ele
    this[str].style.display = "none"
  }

  render() {
    return (
      <div className="row" style={{ padding: "20px" }}>
        <div className="responsive">
          <div className="gallery">
            <img
              id="myImg"
              src={image1}
              alt="Cinque Terre"
              className="thumpNail"
              onClick={e => {
                this.handleClick(1)
              }}
              name="myModal1"
            />
            {/* The Modal */}
            <div
              id="myModal1"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal1 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  console.log("uiii", e)
                  this.handleClose(1)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image1}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image2}
              id="myImg"
              className="thumpNail"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(2)
              }}
            />
            <div
              id="myModal2"
              className="modal"
              ref={modal => {
                //  console.log("inner modal", modal);
                this.myModal2 = modal
                // console.log(modal.id)
                // this.myModal[modal.id] = modal.id;
                // console.log(this.myModal)
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(2)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image2}
                className="modal-content"
                id="img02"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image3}
              id="myImg"
              className="thumpNail"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(3)
              }}
            />
            <div
              id="myModal3"
              className="modal"
              ref={modal => {
                this.myModal3 = modal
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(3)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image3}
                className="modal-content"
                id="img0"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image4}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(4)
              }}
            />
            <div
              id="myModal4"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal4 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(4)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image4}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image6}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(6)
              }}
            />
            <div
              id="myModal6"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal6 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(6)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image6}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image7}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(7)
              }}
            />
            <div
              id="myModal7"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal7 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(7)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image7}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image8}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(8)
              }}
            />
            <div
              id="myModal8"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal8 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(8)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image8}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image9}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(9)
              }}
            />
            <div
              id="myModal9"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal9 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(9)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image9}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image10}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(10)
              }}
            />
            <div
              id="myModal10"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal10 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(10)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image10}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image11}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(11)
              }}
            />
            <div
              id="myModal11"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal11 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(11)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image11}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image12}
              className="thumpNail"
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={e => {
                this.handleClick(12)
              }}
            />
            <div
              id="myModal12"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal12 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              {/* The Close Button */}
              <span
                className="close"
                onClick={e => {
                  this.handleClose(12)
                }}
              >
                &times;
              </span>
              {/* Modal Content (The Image) */}
              <img
                src={image12}
                className="modal-content"
                id="img01"
                alt="children"
              />
              {/* Modal Caption (Image Text) */}
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image13}
              id="myImg"
              alt="Cinque Terre"
              width="90%"
              height="80%"
              onClick={e => {
                console.log("uiii", e)
                this.handleClick(13)
              }}
            />
            <div
              id="myModal13"
              className="modal"
              ref={modal => {
                //   [modal.id]=e.target
                this.myModal13 = modal
                //  this.myModal[modal.id] = modal.id;
              }}
            >
              <span
                className="close"
                onClick={e => {
                  console.log("uiii", e)
                  this.handleClose(13)
                }}
              >
                &times;
              </span>

              <img
                src={image13}
                className="modal-content"
                id="img01"
                alt="children"
              />
            </div>
          </div>
        </div>

        {/*<div className="responsive">
          <div className="gallery">
            <img
              src={image14}
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={(e) =>  {
                console.log('uiii',e)
                this.handleClick(14)
              }}
            />
            <div
              id="myModal14"
              className="modal"
              ref={modal => {
               //   [modal.id]=e.target
               this.myModal14=modal
               //  this.myModal[modal.id] = modal.id;
              }}
            >
            
              <span className="close" onClick={(e) =>  {
               
                this.handleClose(14)
              }}>
                &times;
              </span>
              {/* Modal Content (The Image) *
              <img
                src={image14}
                id="myImg"
                className="modal-content"
                id="img01"
                alt="children"
              />
              
            </div>
          </div>
        </div>}

        <div className="responsive">
          <div className="gallery">
            <img
              src={image15}
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={(e) =>  {
                console.log('uiii',e)
                this.handleClick(15)
              }}
            />
            <div
              id="myModal15"
              className="modal"
              ref={modal => {
               //   [modal.id]=e.target
               this.myModal15=modal
               //  this.myModal[modal.id] = modal.id;
              }}
            >
             
              <span className="close" onClick={(e) =>  {
                console.log('uiii',e)
                this.handleClose(15)
              }}>
                &times;
              </span>
              
              <img
                src={image15}
                className="modal-content"
                id="img01"
                alt="children"
              />
          
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img
              src={image16}
              id="myImg"
              alt="Cinque Terre"
              width="600"
              height="400"
              onClick={(e) =>  {
                console.log('uiii',e)
                this.handleClick(16)
              }}
            />
            <div
              id="myModal16"
              className="modal"
              ref={modal => {
               //   [modal.id]=e.target
               this.myModal16=modal
               //  this.myModal[modal.id] = modal.id;
              }}
            >
         
              <span className="close" onClick={(e) =>  {
                console.log('uiii',e)
                this.handleClose(16)
              }}>
                &times;
              </span>
            
              <img
                src={image16}
                className="modal-content"
                id="img01"
                alt="children"
              />
              
            </div>
          </div>
        </div> */}

        <div className="clearfix" />
      </div>
    )
  }
}
