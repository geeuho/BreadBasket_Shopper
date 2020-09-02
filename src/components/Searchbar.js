import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field} from 'redux-form'
import { searchItem } from '../actions'


class Searchbar extends React.Component {

    renderInput = ({ input, meta, label }) => {
    console.log(meta)
        return (
            <div class="input-group-prepend">
                <label>{label}</label>
                <input {...input} />
                <div> {meta.error}</div>
            </div>
        )
    }

    searchSubmit = (formValues) => {
        window.history.pushState({}, '', `/search/${formValues.searchItem}`)
        window.history.go()
    }

    render(){
        return (
            <form onSubmit = {this.props.handleSubmit(this.searchSubmit)}>
                <Field name = "searchItem" component = {this.renderInput} label = "Search for Item"/>
                <button type="submit" id="button-addon1">Search Item</button>
            </form>
        )
    }
}

let validate = (formValues) => {
    let error = {}

    if(!formValues.searchItem){
        error.searchItem = "Please enter an Item"
    }

    return error
}

let formWrapped = reduxForm({
    form: 'searchForm',
    validate: validate
})(Searchbar)


export default connect(null, {searchItem})(formWrapped)