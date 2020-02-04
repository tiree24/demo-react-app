import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import DisplayJeopardy from '../displayjeopardy/DisplayJeopardy';
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: { answer: "" }
        }
    }

    handleChange = (event) => {
        const formData = this.state.formData ;
        formData[event.target.name] = event.target.value;

        this.setState({ formData });
    }





    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })

        let tempScore = this.state.score

        let formData = this.state.formData
        
        
        console.log(this.state.formData.answer, this.state.data.answer)
        
        if (this.state.formData.answer === this.state.data.answer) {
            tempScore = tempScore + this.state.data.value
        } else {
            tempScore = tempScore - this.state.data.value
        }
        
        
        
        this.setState({
            score: tempScore,
            formData
        })
        
        
        
        
        this.getNewQuestion()
        
        
        formData.answer = ""



    }












    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {

            this.setState({
                data: result.data[0]
            })
            console.log(this.state.data.answer)
        })
        







    }









    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }








    //display the results on the screen
    render() {
     



        return (

            <DisplayJeopardy
            category={this.state.data.category}
            question={this.state.data.question}
            value={this.state.data.value}
            score={this.state.score}
            handleSubmit={this.handleSubmit}
            answer={this.state.formData.answer}
            handleChange={this.handleChange}
            
            />

            

        );
    }
}
export default Jeopardy;