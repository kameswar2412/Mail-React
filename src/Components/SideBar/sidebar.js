import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Link} from "react-router-dom"
const Sidebar = () => {

    return ( 
        <>
        <div>
            <div style={{width:"250px"}}>
            <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>Folder 1</Accordion.Header>
                  <Accordion.Body>
                      <Link  to="/" >Inbox </Link> <br />
                      <Link  to="/Spam" >Spam </Link> <br />
                      <Link  to="/Deleted" >Deleted Items </Link> <br />
                      
                  </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                  <Accordion.Header>Folder 2</Accordion.Header>
                  <Accordion.Body>
                      <p >Inbox </p>
                      <p>Spam</p>
                      <p>Deleted Items</p>
                      <p>Custom Folder</p>
                  </Accordion.Body>
            </Accordion.Item> <Accordion.Item eventKey="2">
                  <Accordion.Header>Folder 2</Accordion.Header>
                  <Accordion.Body>
                      <p >Inbox </p>
                      <p>Spam</p>
                      <p>Deleted Items</p>
                      <p>Custom Folder</p>
                  </Accordion.Body>
            </Accordion.Item>
           </Accordion>
            </div>

        </div>
        </>
     );
}
 
export default Sidebar;