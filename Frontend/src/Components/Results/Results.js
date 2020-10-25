import React, { Component } from 'react';
import style from './Results.css'

class Results extends Component {
  state = {
    data: this.props.location.state
  }

  render() { 
    console.log("this is my params " + this.props.match.params)
  
    console.log(this.state.data.detail + this.state.data.detail2)
    let image;
    let career;
    let description;
    let skill;
    if((this.state.data.detail === "schemer" || this.state.data.detail === "leader") && (this.state.data.detail2 === "web-dev" || this.state.data.detail2 === "mobile-dev"))
    {
      image = "../../dist/img/Project Management concept illustration.png";
      career = "Project Manager";
      description = "As you are a leader or schemer so that means you can control people and manage things in the project and you are enjoy to create web app or mobile app, this is a good start of being project manager. Project managers always work in a team. They are most often sociable and great team players. As a PM, you will need to adapt to different people, cultures, environments, and situations. Being flexible is key to team communication since you’ll be the builder and controller of the team.";
      skill = "Leadership, Communication, Scheduling, Risk Management, Cost Management, Negotiating, Critical Thinking, Task Management, Quality Management, A Sense of Humor"
    }
    else if(this.state.data.detail === "creator" && this.state.data.detail2 === "designer")
    {
      image = "../../dist/img/ux-ui.jpg";
      career = "UX-UI Designer";
      description = "Look like you are suite with this job beacuse of you may have imagination to create and design something more than other. UX and UI design are two different elements of a single consumer experience. UX refers to the user experience, which focuses on how something works and how people interact with it. UI, or user interface, focuses on the look and layout.";
      skill = "Teamwork and communication skills, UX research, Wireframing and UI prototyping, UX writing, Visual communication, User empathy, Interaction design, Coding - Languages such as HTML, CSS, Javascript and jQuery"
    }
    else if(this.state.data.detail === "perfect" && this.state.data.detail2 === "tester")
    {
      image = "../../dist/img/Product-QA-&-Testing.jpg";
      career = "QA - Quality Assurance";
      description = "As you are perfectionist, this is can be a good skill to find an errors or bug in the software. QA is making sure that something works as intended. Whether hardware or software, or even writing (hint: editor), having a QA process is critical to the success of a company and customer satisfaction.";
      skill = "An understanding of software, Great analytical skills, Discipline, Communication skills"
    }
    else if(this.state.data.detail === "perfect" && this.state.data.detail2 === "database")
    {
      image = "../../dist/img/Database-Administrator.jpg";
      career = "Database Administrator";
      description = "As you are perfectionist. It means when you do something, you will do everything very perfect that make you suit with this job. Database administrators (DBAs) work with technology, using specialized types of software to store and organize a company's data. This could include a variety of information, from confidential financial numbers, to payroll data, to customer shipping records.";
      skill = "Patience, Meticulous attention to detail, A logical approach to work, The ability to prioritise tasks, Problem-solving skills, Good organisational skills, Communication and interpersonal skills, Familiarity with computer operating systems and database technology (design, software and structure), Detail-oriented"
    }

    return (
    <div className="content-wrapper">
      <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>CPE Career Simulation</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content  */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{justifyContent:"space-between"}}>
                <div className="card curve">
                  <div className="card-header .curve">
                    <h1 className="card-title result">HERE IS YOUR RESULT</h1>
                  </div>
                  {/* card-body */}
                  <div className="card-body">
                    {/* showing results img */}
                    <div className="card">
                      <img className="result-image" src={image}/>
                      <h5 className="career">{career}</h5>
                      <p className="description">
                        {description}<br/><br/>
                        <b>Skills:</b> {skill}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    )
  }
}

export default Results