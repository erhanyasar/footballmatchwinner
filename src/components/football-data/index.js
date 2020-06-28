
import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class FootballMatchesData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      totalMatches: 0,
      resolvedArr: []
    };
  }

  onClick = (year) => (e) => {
    let url = "https://jsonmock.hackerrank.com/api/football_competitions?year=" + year;
    fetch(url)
      .then (response => response.json())
      .then (result => {
        let totalMatches = result.data.length;
        
        this.setState({ // Code written in next line is to take care of adding active class to selected year for css purpose.
          selectedYear: year,
          totalMatches: totalMatches,
          resolvedArr: result.data
        })
      })
  }

  render() {
    var years= [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    return (
      <div className="layout-row">
        <div className="section-title">Select Year</div>
        <ul className="sidebar" data-testid="year-list">
          {years.map((year, i) => {
            return (
              <li className={
                classNames({
                  'sidebar-item': true,
                  'active': this.state.selectedYear === year
                })
              }
              onClick={this.onClick(year)}
              key={year}>
                <a>{year}</a>
              </li>
            )
          })}
        </ul>
        <section className="content">
          {
            this.state.totalMatches ?
            <section>
              <div className="total-matches" data-testid="total-matches">Total matches: { this.state.totalMatches }</div>
              <ul className="mr-20 matches styled" id="match-list" data-testid="match-list">
                {this.state.resolvedArr.map((item, index) => (
                  <li className="slide-up-fade-in" key={index}> Match { item.name } won by { item.winner } </li>
                ))}
              </ul>
            </section>
            :
            <div data-testid="no-result" className="slide-up-fade-in no-result">No Matches Found</div>
          }
        </section>
      </div>
    );
  }
}