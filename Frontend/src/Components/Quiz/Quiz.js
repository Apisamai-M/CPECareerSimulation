import React, { Component } from "react";
import style from "./Quiz.css"

class Quiz extends Component {
  state = {
    value: "",
    value2: "",
  };
  

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  onSubmit = () => {
    this.props.history.push({
      pathname: '/result',
      state: { detail: this.state.value,
                detail2: this.state.value2}
    })
  }

  render() {
    const {value, value2} = this.state;
    console.log(value)
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Quiz <img className="quiz-icon" src="../../dist/img/quiz.png"/></h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main Content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{justifyContent:"space-between"}}>
                <div className="card">
                  <div className="card-header">
                    {/* quiz no.1 */}
                    <h1 className="card-title">Your friends would describe you as...</h1>
                    </div>
                    {/* /.card-header */}
                  <div className="card-body" style={{alignContent:"left"}}>
                    <div className="form-group float-left quiz">
                      <input 
                      type="radio"
                      name="value"
                      value="leader"
                      id="leader"
                      checked={value === "leader"}
                      onChange={this.onChange}
                      />
                      <label for="leader">
                        <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/leadership.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Leader</p>
                        </div>
                      </label>

                      <input 
                      type="radio"
                      name="value"
                      value="creator"
                      id="creator"
                      checked={value === "creator"}
                      onChange={this.onChange}
                      />
                      <label for="creator">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/design-thinking.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Creator</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value"
                      value="schemer"
                      id="schemer"
                      checked={value === "schemer"}
                      onChange={this.onChange}
                      />
                      <label for="schemer">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/workflow.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Schemer</p>
                      </div>
                      </label>
                      
                      <input 
                      type="radio"
                      name="value"
                      value="multi-tasking"
                      id="multi-tasking"
                      checked={value === "multi-tasking"}
                      onChange={this.onChange}
                      />
                      <label for="multi-tasking">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/coordinator.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Multi-Tasking Person</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value"
                      value="question"
                      id="question"
                      checked={value === "question"}
                      onChange={this.onChange}
                      />
                      <label for="question">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/question.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Skeptical Person</p>
                      </div>
                      </label>
                      
                      <input 
                      type="radio"
                      name="value"
                      value="perfect"
                      id="perfect"
                      checked={value === "perfect"}
                      onChange={this.onChange}
                      />
                      <label for="perfect">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/perfectionist.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>A Perfectionist</p>
                      </div>
                      </label>
                    </div>
                  </div>  
                </div>
                {/* end of quiz no.1 */}
                {/* quiz no.2 */}
                <div className="card">
                  <div className="card-header">
                    <h1 className="card-title">Which one is the most enjoyable task for you?</h1>
                    </div>
                    {/* /.card-header */}
                  <div className="card-body" style={{alignContent:"left"}}>
                    <div className="form-group float-left quiz">
                      <input 
                      type="radio"
                      name="value2"
                      value="web-dev"
                      id="web-dev"
                      checked={value2 === "web-dev"}
                      onChange={this.onChange}
                      />
                      <label for="web-dev">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/app.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>Create Web App</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value2"
                      value="mobile-dev"
                      id="mobile-dev"
                      checked={value2 === "mobile-dev"}
                      onChange={this.onChange}
                      />
                      <label for="mobile-dev">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/mobile-app.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>Create Mobile App</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value2"
                      value="designer"
                      id="designer"
                      checked={value2 === "designer"}
                      onChange={this.onChange}
                      />
                      <label for="designer">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/ui.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>Design UX-UI via Adobe XD</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value2"
                      value="network"
                      id="network"
                      checked={value2 === "network"}
                      onChange={this.onChange}
                      />
                      <label for="network">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/server.png"/>
                        <p style={{alignSelf:"center", padding:"5px"}}>Config in Network Lab</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value2"
                      value="database"
                      id="database"
                      checked={value2 === "database"}
                      onChange={this.onChange}
                      />
                      <label for="database">
                      <div className="card">
                        <img style={{height:"150px", width:"140px", padding:"5px", alignSelf:"center"}} src="../../dist/img/database-storage.png"/>
                        <p style={{alignSelf:"center", padding:"5px", fontSize:"13px"}}>Design Database for Online<br/>Shopping Website</p>
                      </div>
                      </label>

                      <input 
                      type="radio"
                      name="value2"
                      value="tester"
                      id="tester"
                      checked={value2 === "tester"}
                      onChange={this.onChange}
                      />
                      <label for="tester">
                      <div className="card">
                        <img style={{height:"150px", width:"170px", padding:"5px", alignSelf:"center"}} src="../../dist/img/testing.png"/>
                        <p style={{alignSelf:"center", padding:"5px", fontSize:"14px"}}>Test and find bugs<br/>in your project</p>
                      </div>
                      </label>
                      {/* end of quiz no.2 */}
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <button 
          className="btn btn-info quiz-button" 
          onClick={this.onSubmit}>
            <span style={{ color: "#8D8D8C" }}>Submit</span>
          </button>
        </section>
      </div>
    )
  }
}

export default Quiz;
