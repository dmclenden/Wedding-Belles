import React from "react";



function mailingList() {
    return (
      <div>
          
          <h4><b>Join our mailing list and get 20% off!</b></h4>
          <form onSubmit = {(event)=> this.handleSubmit(event)}>
                <label>
                E-mail Address:
                <input type="text" onChange={(event) => this.handleNameChange(event)}/>
                </label>
                <br/>

            
                <br/>
                <input type="submit" value="Submit"/>
                <hr/>
            </form>
            </div>
          
    );
}

export default mailingList;