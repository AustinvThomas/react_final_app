
import React, { PureComponent } from 'react'
import './MainContent.css'
import SelectOption from './SelectOption'
import InputTittle from './InputTitle'

class MainContent extends PureComponent {
    render() {
        return (
            <div className = "body" >
                 <h1 className= "body_tittle">Basic PREQUE <span className="body_tittle_light">for Private Show</span></h1>
            
            <div className="scroll align_center">
                <form className= "form_align">
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Constitution of the company"/>
                        </label>
                        <input className="SelectOption" type="text"/>
                    </p>
            
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "No of Years in Business"/>
                        </label>
                        <input className="year_input" type="text"/>
                        <label className="input_tittle">Years</label>
                    </p>
            
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Minimum in-house resources manufacturer should posses"/>
                        </label>
                        <SelectOption title = "Select from options"/>
                    </p>

                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Certificates Required"/>
                        </label>
                        <div className = "flex_down">
                            <SelectOption title = "Environment"/>
                            <SelectOption title = "Social"/>
                            <SelectOption title = "Governance"/>
                        </div>
                    </p>

                    <p className= "input_align">
                        <label className = "table-cell">
                            <InputTittle title = "Prefered market exposure"/>
                        </label>
                        <SelectOption title = "Select your Countries"/>
                    </p>
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Constitution of the company"/>
                        </label>
                        <input className="SelectOption" type="text"/>
                    </p>
            
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "No of Years in Business"/>
                        </label>
                        <input className="year_input" type="text"/>
                        <label className="input_tittle">Years</label>
                    </p>
            
                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Minimum in-house resources manufacturer should posses"/>
                        </label>
                        <SelectOption title = "Select from options"/>
                    </p>

                    <p className= "input_align">
                        <label className = "table-cell">
                        <InputTittle title = "Certificates Required"/>
                        </label>
                        <div className = "flex_down">
                            <SelectOption title = "Environment"/>
                            <SelectOption title = "Social"/>
                            <SelectOption title = "Governance"/>
                        </div>
                    </p>

                    <p className= "input_align">
                        <label className = "table-cell">
                            <InputTittle title = "Prefered market exposure"/>
                        </label>
                        <SelectOption title = "Select your Countries"/>
                    </p>
                </form>
            </div>
        
        </div>    

        )
    }
}

export default MainContent