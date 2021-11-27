import { useState } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import {
  Container,
  Selected,
  SelectDropdown,
  SelectItem,
} from './style.js';
import { v4 as uuid } from 'uuid';

const Select = ({options = [], currentOption='', setGenre, setPage}) => {
  const [show, setShow] = useState(false);

  const showMenu = (e) => {
    e.stopPropagation();
    if (options.length) {
    	if (!show) {
      		setShow(true);
      		document.addEventListener('click', closeMenu);
    	} else {
      		closeMenu();
    	} 
    }
  };

  const closeMenu = (e) => {
    setShow(false);
    document.removeEventListener('click', closeMenu);
    
  };

  const onChange = (obj) => {
    setGenre(obj);
    setPage(1);
  };

  return (
    <Container id='select'>
      <Selected
        show={show} 
        onClick={showMenu}
      > 
        <p>
          {currentOption.name}
        </p>
      	<BiUpArrow/>
      </Selected>
      <SelectDropdown show={show}>
        <div>
          {options?.map((obj) => (
            <SelectItem 
              className='select-item'
              key={uuid()}
              onClick={() => onChange(obj)}
            >
              <p>
                {obj.name}
              </p>
            </SelectItem>
          ))}
        </div>
      </SelectDropdown>
    </Container>
  )
}

export default Select;