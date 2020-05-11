import React from 'react';
import HeaderComponent  from "../../components/commonComponents/header";
import FooterComponent from "../../components/commonComponents/footer";
import DashboardRouter from "./DashboardRoute"
export interface DashboardComponentProps {
    
}
 
export interface DashboardComponentState {
    
}
 
class DashboardComponent extends React.Component<DashboardComponentProps, DashboardComponentState> {
    // state = { :  }
    render() { 
        return ( 
            <React.Fragment>
                <HeaderComponent/>
                <FooterComponent />
                <div>
                    <main>
                       <DashboardRouter/>
                    </main>
                </div>
            </React.Fragment>
         );
    }
}
 
export default DashboardComponent;