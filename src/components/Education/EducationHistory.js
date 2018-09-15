import React, {Component} from 'react'
import EduTitle from './EduTitle';

class EducationHistory extends Component {
  renderList(eduList) {
    const list = eduList.map(item => {
      return <EduTitle key={item.institute} item={item} />;
    });
    return list;
  }

  render() {  
    const { eduList } = this.props
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {this.renderList(this.props.eduList)}

        </div>
      </section>
    )
  }
}

export default EducationHistory;
