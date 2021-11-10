import React from "react";
import ReviewButton from "./ReviewButton";
// import Stars from "./Stars";
import Review from "./ReviewForm";


export default class Movie extends React.Component {
    render () {
        return(
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Movie Title and Rating
                </div>
                <div className="card-body">
                    Movie information
                </div>
                <div className="card-footer">
                    {/* <Stars /> */}
                    <ReviewButton />
                    <Review />
                </div>
            </div>

        );
    }
}