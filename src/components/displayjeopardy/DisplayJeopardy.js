import React, { Component } from 'react';

function DisplayJeopardy(props){
    let categoryElement
    if (props.category === undefined) {
        categoryElement = <div>no category</div>
    } else {
        categoryElement = <div>{props.category.title}</div>
    }
     return (
        <div>
        <b>Category</b>{categoryElement}
        <b>Question</b>  <p> {(props.question)} </p>
        <b>Value</b> <p> {(props.value)}</p>
        <b>Score</b> <p>{(props.score)}</p>


        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="">Answer</label>
                <input type="text" name="answer"

                    value={props.answer}
                    onChange={props.handleChange} />
                <button>Submit Answer</button>
            </div>
        </form>
    </div>
     )
}




export default DisplayJeopardy;