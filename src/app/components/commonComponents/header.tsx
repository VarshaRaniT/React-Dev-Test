import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
export interface HeaderComponentProps {
    hidebtn?: boolean
}
export interface HeaderComponentProps {

}

const HeaderComponent: React.SFC<HeaderComponentProps> = (props) => {
  const {hidebtn} = props
    return (
        <React.Fragment>
            <AppBar className="header__wrapper" position="fixed">
                <Toolbar className="navlink__wrap">
                    <Link color="initial" underline="none" href="/employee">
                        <span className="nav__link active"> Employees List</span>
                    </Link>
                    <Link color="initial" underline="none" href="/color-toggle">
                        <span className="nav__link">Color Box</span>
                    </Link>
                    {hidebtn == true ? "" : <Link className="add__btn " color="initial" underline="none" href="/create-employee">

                        <button className="m-0 vh__center ln__btn" type="submit"><AddIcon className="mr-1" />Employee</button>
                    </Link>}


                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default HeaderComponent;
