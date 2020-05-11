import * as React from 'react';
import GreenColor from "./colorToggleChild"
import { connect } from "react-redux";
import { RootState } from '../../reducers';
import { EmployeeListProps, EmployeeListState } from '../../models/addmodel';
import { onColorToggle } from '../../actions/employeeAction';
import  HeaderComponent  from "../commonComponents/header"


export interface colorToggleParentProps extends React.Component<EmployeeListProps, EmployeeListState> {
    styleClass: string
    color: string
    open: boolean
    colorcode: string
    onColorToggle: (colorcode: string) => void;
}

export interface colorToggleParentState {

}
class colorToggleParent extends React.Component<colorToggleParentProps, colorToggleParentState> {
    onButtonClick = (event: string) => {
        const { onColorToggle } = this.props
        onColorToggle(event)
    }
    render() {
        const { colorcode } = this.props
        return (
            <React.Fragment>
                <HeaderComponent/>
                <GreenColor colorcode={colorcode} oncolorChange={this.onButtonClick} />
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state: RootState) => ({
    colorcode: state.add.colorcode
});
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    onColorToggle: (colorcode: string) => {
        dispatch(onColorToggle(colorcode));
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(colorToggleParent);