
import React from "react";
import "../App.css";

class MarketCard extends React.Component {

    render() {
        return (
            <div>
                <h1>Write review for </h1>
                <h1>{this.props.name}</h1>
                <form onSubmit={this.props.writeReview}>
                    date: <input name="date" type="text" /><br/><br/>
                    content: <textarea name="content" rows="5" cols="50"></textarea><br/><br/>
                    stars: <br/><br/>
                    <input type="submit" value="Done"/>
                </form>
            </div>
        )
    }

}

export default MarketCard;