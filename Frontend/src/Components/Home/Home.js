import React, { Component } from "react";
import Grade from "./Components/Grade";
import MajorGrade from "./Components/MajorGrade";
import StatusProfile from "../StatusProfile";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      fields: {},
      errors: {}
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["fname"]){
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }

    if(!fields["lname"]){
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }

    if(!fields["student_id"]){
      formIsValid = false;
      errors["student_id"] = "Cannot be empty";
    }
    
    
    if(typeof fields["fname"] !== "undefined"){
      if(!fields["fname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["fname"] = "Only letters";
      }        
    }
    if(typeof fields["lname"] !== "undefined"){
      if(!fields["lname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["lname"] = "Only letters";
      }        
    }
    if(typeof fields["student_id"] !== "undefined"){
      if(!fields["student_id"].match(/^[0-9]*$/)){
        formIsValid = false;
        errors["student_id"] = "Only numbers";
      }        
    }

    this.setState({errors: errors});
    return formIsValid;
}

contactSubmit(e){
  e.preventDefault();
  if(this.handleValidation()){
    alert("Form submitted");
    e.preventDefault();
    this.nextStep();
  }else{
    alert("Please fill in all informations correctly.")
  }
}
  // Handle fields change
  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}

  // Default Refresh
  // continue = (e) => {
  //   e.preventDefault();
  //   this.nextStep();
  // };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div class="content-wrapper">
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>Performance Form</h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="content">
              <section className="container-fluid">
                {/* SELECT2 EXAMPLE */}
                <div className="card card-default" style={{borderRadius:"2.25rem"}}>
                  <div className="card-header" style={{backgroundColor:"#3f607b",borderTopLeftRadius:"2.25rem",borderTopRightRadius:"2.25rem"}}>
                    <h3 className="card-title" style={{color: "white"}}>Student Test Form</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body" style={{backgroundColor:"#EFE7F7", borderBottomLeftRadius:"2.25rem",borderBottomRightRadius:"2.25rem"}}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            ref="fname"
                            type="firstName"
                            class="form-control"
                            id="firstName"
                            onChange={this.handleChange.bind(this, "fname")}
                            value={this.state.fields["fname"]}
                          />
                        </div>
                      </div>
                      {/* /.form-group */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            ref="lname"
                            type="lastName"
                            class="form-control"
                            id="lastName"
                            onChange={this.handleChange.bind(this, "lname")}
                            value={this.state.fields["lname"]}
                          />
                        </div>
                      </div>
                      {/* /.col */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Student Id</label>
                          <input
                            ref="student_id"
                            type="studentId"
                            class="form-control"
                            id="studentId"
                            maxLength="9"
                            onChange={this.handleChange.bind(this, "student_id")}
                            value={this.state.fields["student_id"]}
                          />
                        </div>
                      </div>
                      {/* /.form-group */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Major</label>
                          <input
                            type="majorName"
                            class="form-control"
                            id="majorName"
                            value="Information System and Network Engineering"
                          />
                        </div>
                      </div>
                      {/* /.col */}
                    </div>
                    <button
                      class="btn btn-info float-right"
                      onClick={this.contactSubmit.bind(this)}
                      style={{ marginRight: 9,backgroundColor:"#00305A",borderColor:"#00305A", borderRadius:"10px"}}
                    >
                      Next
                    </button>
                    {/* /.row */}
                  </div>
                  {/* /.card-body */}
                </div>
              </section>
            </section>
          </div>
        );
      case 2:
        return <Grade nextStep={this.nextStep} />;
      case 3:
        return <MajorGrade nextStep={this.nextStep} />;
      default:
        return <StatusProfile />;
    }
  }
}

export default Home;
