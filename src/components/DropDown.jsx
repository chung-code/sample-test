import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DropDown.scss'

const DropDown = ({ onSelect, catList, cat }) => {

    // function AlertItem(item) { 
    //     alert(item + "을 선택하셨습니다.");
    // }

    return (
        <DropdownButton id="dropdown-basic-button" title={cat}>   
            {catList.map(cat => (
                <Dropdown.Item onSelect={onSelect} eventKey={cat}>{cat}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default DropDown
