import React from 'react';

// If a component needs to "remember" stuff, then you need a class!

class Counter extends React.Component {

    // define how the instance gets created
    // including the initial state
    constructor(props) {
        // activate the "super" powers
        // from React.Component
        super(props);
        
        // this.state is an object
        // where the component stores key value pairs
        this.state = {
            number: 0
        };
    }

    // do more setup when the compnent gets drawn to the page
    componentDidMount() {
        console.log("I am here!");
        // DON'T DO THIS
        // this.state.number++;
        // You CANNOT mutate state directly

        setInterval(() => {
            // Safely change state using this.setState()
            // It accept an object with updated key/value pairs
            this.setState({
                number: this.state.number + 1
            });
        }, 1000);


    }

    // define what will be drawn
    render() {
        return (
            <h1>{this.state.number}</h1>
        );
    }
}

// let bad = 2;
// NooOOOoooooOO
// setInterval(() => {
//     bad++
// }, 1000);

// function Counter(props) {
//     return (
//         <h1>{props.number}</h1>
//     );
// }




export default Counter;