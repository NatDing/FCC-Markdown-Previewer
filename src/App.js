import React from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked'

export default class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    markdown: "",
  };
}

updateMarkdown(markdown){
  this.setState({markdown});
}

render(){
 var inputStyle={
   width: "400px",
   height: "50vh",
   marginLeft: "auto",
   marginRight: "auto",
   padding: "10px"
 }
 var outputStyle={
   width: "400px",
   height: "50vh",
   backgroundColor: "#DCDCDC",
   marginLeft: "auto",
   marginRight: "auto",
   padding: "10px"
 }
  return (
    <div className="App">
     <div className="Container">
      <div className="row mt-4">
       <div className="col text-center">
        <h1>
        <Badge className="text-align-center" variant="light">
        Markdown Previewer
        </Badge>
        </h1>
         <div className="row mt-4">
           <div className="col-md-6">
           <Badge className="text-align-center" variant="light">
           Markdown Input
           </Badge>
            <div className="mark-input">
            <textarea className="input" style={inputStyle} value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value)}}>{console.log(this.state.markdown)}</textarea>
            </div>
           </div>
           <div className="col-md-6">
           <Badge className="text-align-center" variant="light">
           Preview
           </Badge>
            <div className="mark-input" style={outputStyle} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
           </div>
         </div>
       </div>
      </div>       
     </div>
    </div>
  );}
}
