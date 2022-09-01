import './footer.css'
import { Component } from 'react';

// function Footer(props){
//     return(
//         <p className='footer'>Disclimer {props.data}</p>
//     );
// }

class Footer extends Component{
    render(){
        return(
                    <p className='footer'>Disclimer {this.props.data}</p>
                ); 
        };
}

export default Footer;