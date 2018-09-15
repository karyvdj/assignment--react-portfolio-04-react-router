import React, { Component } from 'react';

import { skills, eduList, jobsList } from '../../data/datasource'
import Header from '../Header/Header';
import SkillsList from '../Skills/SkillsList';
import EducationHistory from '../Education/EducationHistory';
import WorkHistory from '../Experience/WorkHistory';
import ShowHideTech from '../Technologies/ShowHideTech';

class CvView extends Component {
  render() {
    const { skills, eduList, jobsList} = this.props
    console.log(skills)
    return (
      <div className="portfolio-content">
        <Header headerTitle="C.V."/>
        <div className="portfolio-content">
          {/* <SkillsList skills={skills}/> */}
          
          {/* <EducationHistory eduList={eduList}/> */}

          {/* <WorkHistory jobsList={jobsList}/> */}

          <ShowHideTech/>
        </div>
      </div>
    )
  }
}

export default CvView
