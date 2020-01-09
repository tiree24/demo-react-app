import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
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
        let categoryElement
        if (this.state.data.category === undefined) {
            categoryElement = <div>no category</div>
        } else {
            categoryElement = <div>{this.state.data.category.title}</div>
        }



        return (

            <div>
                <b>Category</b>{categoryElement}
                <b>Question</b>  <p> {(this.state.data.question)} </p>
                <b>Value</b> <p> {(this.state.data.value)}</p>
                <b>Score</b> <p>{(this.state.score)}</p>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Answer</label>
                        <input type="text" name="answer"

                            value={this.state.formData.answer}
                            onChange={this.handleChange} />
                        <button>Submit Answer</button>
                    </div>
                </form>
            </div>

        );
    }
}
export default Jeopardy;