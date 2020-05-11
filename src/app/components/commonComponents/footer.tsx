import React from 'react';
export interface FooterComponentProps {
    
}
 
export interface FooterComponentState {
    
}
 
class FooterComponent extends React.Component<FooterComponentProps, FooterComponentState> {
    // state = { :  }
    render() { 
        return ( 
            <React.Fragment>
                Footer Component
            </React.Fragment>
         );
    }
}
 
export default FooterComponent;