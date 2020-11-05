import React, { Component } from 'react';
import {connect} from 'react-redux'
import FoodList from '../containers/FoodListCarousel'


class FoodListCarousel extends Component {

    componentDidMount(){
        console.log(this.props.categoryItems)
        console.log(this.props.category)
        console.log(this.sliceList(0))
        console.log(this.sliceList(1))
    }

    sliceList(index){
        let list = this.props.categoryItems
        let length = list.length/6
        let newList = []
        for (let i = 0; i < length; i++){
            let start = i * 6
            let end = (i + 1) * 6
            newList.push(list.slice(start, end))

        }
        return newList[index]
    }

    render(){
        return (
            <div id="carouselExampleIndicators" class="carousel slide center food-list-carousel" data-interval="false" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                    <div class="carousel-item active food-list-section">
                        {}
                    </div>
                    <div class="carousel-item food-list-section">
                        <h1>
                            Slide 2
                        </h1>
                    </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        )
    }    
}

let mapStateToProps = (state) => {
    return ({
        items: state.items.itemsList.data
    })
}

export default connect(mapStateToProps, {})(FoodListCarousel)
