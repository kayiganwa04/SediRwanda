import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,NavbarBrand,DropdownItem,DropdownMenu,DropdownToggle,Dropdown
} from "reactstrap";
import { NavLink,Link } from "react-router-dom";
import brand from "./../Images/brand.png";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNav: false,
      dropdownOpen:false,
      dropdownOpen1:false,
      dropdownOpenProjects:false
    };
    this.toogleNav = this.toogleNav.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
  }
  toogleNav() {
    this.setState({
      isOpenNav: !this.state.isOpenNav
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  }
  toggleProjects() {
    this.setState({
      dropdownOpenProjects: !this.state.dropdownOpenProjects
    });
  }
  render() {
    return (
      <div>
      <React.Fragment>
        <Navbar light expand="md" >
          <div className="container">

            <NavbarToggler onClick={this.toogleNav} className="mr-auto"/>
            <NavbarBrand className="" to="/home">
              <img
                src={brand}
                alt="sediLogo"
                height="130"
                width="130"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpenNav} navbar>
              <Nav navbar>
                <NavItem>
                <NavLink className="nav-link px-2 font-weight-bold" to="/home" active>
                  HOME
                  </NavLink>
                  </NavItem>
                  <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="font-weight-bold px-2" nav >
            ABOUT US
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/about" className="text-light ">About</Link></DropdownItem>
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/history" className="text-light ">Our History</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
                  <Dropdown nav isOpen={this.state.dropdownOpenProjects} toggle={this.toggleProjects}>
            <DropdownToggle className="font-weight-bold px-2" nav >
            OUR PROJECT
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/education" className="text-light ">Education</Link></DropdownItem>
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/cooperative" className="text-light ">Cooperative</Link></DropdownItem>
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/sport" className="text-light ">Sport</Link></DropdownItem>
     
            </DropdownMenu>
          </Dropdown>
                  <NavItem>
                  <NavLink className="nav-link px-2 font-weight-bold" to="/team">
                   OUR TEAM
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className="nav-link px-2 font-weight-bold" to="/project"> OUR PROJECT
                  </NavLink>
                </NavItem> */}

            
                <NavItem>
                  <NavLink className="nav-link px-2 font-weight-bold" to="/contact">
                    CONTACT US
                  </NavLink>
                </NavItem>

              </Nav>
              
              <Nav className="ml-auto " navbar>
              <Dropdown   nav isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
            <DropdownToggle className="font-weight-bold border border-secondary"  nav >
            GET INVOLVED 
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/fundraising" className="text-light ">Start a Compain</Link></DropdownItem>
              <DropdownItem className="bg-dark font-weight-bold"><Link to="/compaign" className="text-light ">Find a Compain</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
              </Nav>
              </Collapse>
          </div>
        </Navbar> 
      </React.Fragment>
      </div>
    );
  }
}
export default Header;
