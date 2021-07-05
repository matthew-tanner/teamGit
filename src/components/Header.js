import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Header = () => {
    return (
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>Change This Header</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/matthew-tanner/teamGit/tree/main'>github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header