import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            {work.description?.split('\n').map((detail) => (
              <p className="work__description__details">{detail}</p>
            ))}
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>

          <div className="nine columns main-col">
            <h4>Summary</h4>
            <p>
              "Throughout my master’s and bachelor’s degree, I was exposed to
              machine learning and AI fundamentals with several academic
              projects involving various data sets. I also gained experience in
              multiple technologies like JavaScript, HTML, CSS, Python, C/C++,
              Android development, knowledge of network, and computer science
              fundamentals. These experiences taught me about analyzing
              solutions for problems, breaking down tasks, researching solutions
              and learning required things quickly."
            </p>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4>Summary</h4>
            <h6>Java Web</h6>
            <p>
              Java, Spring Boot, Spring Security, Spring Data, RESTful APIs,
              PostgreSQL, PgAdmin, MongoDB, JPA, Hibernate, Docker, Flyway,
              Maven, Git, Linux Bash, Junit, Mockito, AWS S3, SQS, WebSocket,
              JSON
            </p>
            <h6>Front-End</h6>
            <p>HTML/CSS, JavaScript, jQuery, AJAX, ReactJS</p>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
