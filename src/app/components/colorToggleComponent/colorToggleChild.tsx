
import * as React from 'react';
import Box from '@material-ui/core/Box';
import './../../../assets/scss/style.scss';

export interface ColorToggleChildProps {
    oncolorChange: any,
    colorcode: string
}

export interface ColorToggleChildState {

}

class ColorToggleChild extends React.Component<ColorToggleChildProps, ColorToggleChildState> {
    // state = { :  }
    render() {
        const { oncolorChange, colorcode } = this.props
        return (
            <React.Fragment>
                <Box className="custom__container">
                    {/* action wrap start */}
                    <div className="text-center mtb-20">
                    <button  onClick={() => oncolorChange('red')} type="submit">Red Box</button>
                    <button  className="ml-2 secondary__bck" onClick={() => oncolorChange('green')} type="submit">Green Box</button>
                    </div>
                    {/* action wrap end */}
                    {/* container box start */}
                    <div className="box__wrap " >
                        <div className={colorcode == "red" ? "Hello, box__red" : "box__primary"}>
                            {colorcode == "red" ? "Hi, I am red Box": "I am teal Blue Box"}
                        </div>
                    </div>
                    {/* container box end */}
               </Box>
            </React.Fragment>
        );
    }
}

export default ColorToggleChild;