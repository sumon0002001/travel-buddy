import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Dropdown = ({selected, setSelected}) => {
    const [isActive, setisActive] = useState(false)
    const options = ["React", "Vue", "Angular"]
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => 
        setisActive(!isActive)}> 
      Choose Your Favorit 
      <FontAwesomeIcon icon={faCaretDown} />
      {/* <span class="fas fa-caret-down"></span> */}
      </div>
      {isActive && (
        <div className="dropdown-content">
            {options.map((item) => (
            <div onClick={e => {
                setSelected(item)
                setisActive(false)
            }}
            className="dropdown-item">
             {item}
             </div>
            )
                
            )} 
        </div>
      )}
     
    </div>
    )
}

export default Dropdown
