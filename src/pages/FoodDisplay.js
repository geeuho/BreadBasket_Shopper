import React from 'react' 
import Modal from '../components/Modal'

class FoodPicture extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <Modal></Modal>
        )
    }
}

export default FoodPicture