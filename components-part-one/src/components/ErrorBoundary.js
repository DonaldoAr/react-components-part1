import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    hasError: PropTypes.bool,
    children: PropTypes.element.isRequired,
}

ErrorBoundary.defaultProps = {
    hasError: false,
    children: <h1>Something went wrong!</h1>,
};

export  { ErrorBoundary }