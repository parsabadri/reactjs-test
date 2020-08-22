import React from "react";
import Map from "../Map/Map";
import SearchIcon from "../../Assets/img/search.jpeg";
import CompanyLogo from "../../Assets/img/apple logo.jpg";
import Axios from "axios";
import Avatar from "../../Assets/img/agent.jpeg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: [],
      agents: [],
      job_title: "Director Of Product Design",
      company_category: "Technology Company",
      location: "Menlo Park, California",
      salary: "$ 280K - $ 330K",
      jobs_available: "254",
      agent_rate: 4.8,
    };
    this.handleLocationInfo = this.handleLocationInfo.bind(this);
  }

  handleLocationInfo() {
    let request = {
      method: "GET",
      url: "https://run.mocky.io/v3/b1f53cec-54eb-4524-8038-437e869ac639",
    };
    Axios(request)
      .then((response) => {
        console.log(response);
        this.setState({
          resultData: response.data,
          agents: response.data.agents,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("content-no-result").style.width = "65%";
    document.getElementById("result").className = "result-open";
  }
  closeResults() {
    document.getElementById("result").className = "result-close";
    document.getElementById("content-no-result").style.width = "98%";
  }
  render() {
    return (
      <div className="home-wrapper">
        <div id="page-content">
          <div id="content-no-result">
            <div className="page-header">
              <section className="home-header">
                <h4>Job Seeker</h4>
                <p> {this.state.jobs_available + " Available Jobs "} </p>
              </section>
              <div className="search">
                <img alt="search" src={SearchIcon} />
                <input
                  className="searc-input"
                  type="text"
                  placeholder="Job Title, Company Name"
                />
              </div>
            </div>
            <Map handleLocationInfo={this.handleLocationInfo} />
          </div>

          <div id="result" className="result-close">
            <div className="result-header">
              <section>
                <img alt="company name" src={CompanyLogo} />
                <button onClick={() => this.closeResults()}>
                  <label>Close</label>
                  <i className="fas fa-chevron-right"></i>
                </button>
                <h5> {this.state.resultData.name} </h5>
                <p> {this.state.company_category} </p>
              </section>
            </div>
            <div className="result-body">
              <section>
                <p>Job Title</p>
                <h5>{this.state.job_title}</h5>
              </section>
              <span>
                <p>Location:</p>
                <h5> {this.state.location} </h5>
              </span>
              <span>
                <p>Salary:</p>
                <h5> {this.state.salary} </h5>
              </span>
              <div>
                <p>Description:</p>
                <h5> {this.state.resultData.about} </h5>
              </div>
              <div className="available-experts">
                <p>Available Experts:</p>
                {this.state.agents.map((agent) => (
                  <div key={agent.name} className="agent">
                    <img alt="agent" src={Avatar} />
                    <div>
                      <h5 className="agent-name"> {agent.name} </h5>
                      <p className="agent-title"> {agent.title} </p>
                    </div>
                    <div className="rate-wrapper">
                      <p className="agent-rate">
                        {this.state.agent_rate > 3
                          ? (
                              <span className="rate-high" id="rate-color">
                                {this.state.agent_rate}
                              </span>
                            )
                          : (
                              <span className="rate-low" id="rate-color">
                                {this.state.agent_rate}
                              </span>
                            )}
                        /5</p>
                      <p className="rate-static-text">Rate</p>
                    </div>
                    {agent.status === "free" ? (
                      <button>
                        <i className="fas fa-video"></i>
                        <p className="video-chat-title">
                        Vide Chat
                        </p>
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
