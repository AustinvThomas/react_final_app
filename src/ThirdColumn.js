import React, { PureComponent } from 'react'
import SelectOption from './SelectOption'
import './ThirdColumn.css'
import ProgressBar from './ProgressBar'
class ThirdColumn extends PureComponent {
    render() {
        return (
            <div className="third_column">
      <div className = "first_row">
      <SelectOption title = "INCOTERM Options"/>
      </div>
      <div>
      <SelectOption title = "Preferred Traceability"/>
      </div>
      <div>
      <SelectOption title = "Preferred"/>
      </div>
      <div>
        <h1 className= "third_column_tittle"> DIFOT </h1>
        <p className= "third_column_subtittle">Deliver in full on Time</p>
      </div>
      <div className = "progress">
            
      <ProgressBar/>
     
      </div>
      <div>
          <button className = "progress_submit">Submit PREREQ</button>
      </div>
      </div>

        )
    }
}

export default ThirdColumn