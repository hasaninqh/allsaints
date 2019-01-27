import React, { Component } from 'react'
import "../App.css"
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import image1 from "../images/all_saints_pre-school_hw_2016_17007001.jpg";
import image2 from "../images/all_saints_pre-school_hw_2016_17007002.jpg";
import image3 from "../images/all_saints_pre-school_hw_2016_17007003.jpg";
import image4 from "../images/all_saints_pre-school_hw_2016_17007004.jpg";
import image5 from "../images/all_saints_pre-school_hw_2016_17007005.jpg";
import image6 from "../images/all_saints_pre-school_hw_2016_17007006.jpg";
import image7 from "../images/all_saints_pre-school_hw_2016_17007007.jpg";
import image8 from "../images/all_saints_pre-school_hw_2016_17007008.jpg";
import image9 from "../images/all_saints_pre-school_hw_2016_17007009.jpg";
import image10 from "../images/all_saints_pre-school_hw_2016_17007010.jpg";
import image11 from "../images/all_saints_pre-school_hw_2016_17007011.jpg";
import image12 from "../images/all_saints_pre-school_hw_2016_17007012.jpg";
import image13 from "../images/all_saints_pre-school_hw_2016_17007013.jpg";
import image14 from "../images/all_saints_pre-school_hw_2016_17007014.jpg";
import image15 from "../images/all_saints_pre-school_hw_2016_17007015.jpg";
import image16 from "../images/all_saints_pre-school_hw_2016_17007028.jpg";
const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);



export default class Gallery extends Component {
  state={
   open : false,
  }

   handleClick = ()=>{
     // var modal = document.getElementById('myModal');
      this.myModal.style.display = "block";
      //modalImg.src = this.props.src;
   
   }
  
   handleClose =()=>{
       //var modal = document.getElementById('myModal');
       this.myModal.style.display = "none";
      }
  
  
   

  
 
  render() {
    return (
       <div className="row">
         
          <div className="responsive">
             <div className="gallery">
        
                 <img id="myImg" src={image1} alt="Cinque Terre"  onClick={this.handleClick.bind(this)} />
                 {/* The Modal */}
                  <div id="myModal" class="modal" ref={modal=>{this.myModal=modal}}>
                       {/* The Close Button */}
                       <span class="close" onClick={this.handleClose}>&times;</span>
                       {/* Modal Content (The Image) */}
                       <img src={image1} class="modal-content" id="img01" alt="children" />
                       {/* Modal Caption (Image Text) */}
                     
                  </div>
                
             </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image2} alt="Cinque Terre" width="600" height="400" onClick={this.handleClick.bind(this)} />
                 <div id="myModal" class="modal" ref={modal=>{this.myModal=modal}}>
                       {/* The Close Button */}
                       <span class="close" onClick={this.handleClose.bind(this)}>&times;</span>
                       {/* Modal Content (The Image) */}
                       <img src={image2} class="modal-content" id="img01" alt="children" />
                       {/* Modal Caption (Image Text) */}
                     
                  </div>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                <img src={image3} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                <div id="myModal" class="modal" ref={modal=>{this.myModal=modal}}>
                       {/* The Close Button */}
                       <span class="close" onClick={this.handleClose.bind(this)}>&times;</span>
                       {/* Modal Content (The Image) */}
                       <img src={image3} class="modal-content" id="img01" alt="children" />
                       {/* Modal Caption (Image Text) */}
                     
                  </div>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image4} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                  <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                     <DialogContent>
                        <img src={image5} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image6} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                     <DialogContent>
                        <img src={image6} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image7} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                     <DialogContent>
                        <img src={image7}alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image8} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                     <DialogContent>
                        <img src={image8} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image9} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image9} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image10} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image10} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image11} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image11} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image12} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image12} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 


          <div class="responsive">
           <div class="gallery">
                 <img src={image13} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image13} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 


          <div class="responsive">
           <div class="gallery">
                 <img src={image14} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image14} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 


          <div class="responsive">
           <div class="gallery">
                 <img src={image15} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image15} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 

          <div class="responsive">
           <div class="gallery">
                 <img src={image16} alt="Cinque Terre" width="600" height="400" onClick={this.handleClickOpen} />
                 <Dialog
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                  >
                      <DialogContent>
                        <img src={image16} alt="Cinque Terre" />
                     </DialogContent>
                  </Dialog>
           </div>
          </div> 
       
       <div class="clearfix"></div>

      
        

     </div>
    )
  }
}







