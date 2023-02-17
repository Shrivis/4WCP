import React from 'react';
import { DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import './Logout.css';
function Logout() {
    return (
        <div style={{backgroundColor:'#212529'}}>
            <UncontrolledDropdown className='lout' style={{backgroundColor:'#212529'}}>
                <DropdownToggle class="text-dark" style={{backgroundColor:'#212529'}}><div class="text-white">Name</div>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Logout;