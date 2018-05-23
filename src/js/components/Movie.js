
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { moviesFetch  } from '../actions/index';
import { Redirect } from 'react-router-dom';
import { Media } from 'react-bootstrap';


class MovieComponent extends Component {
    constructor(props)
    {
        super(props);

        this.props.moviesFetch(this.props.match.params.id);
    }

    render() {
        if(this.props.user && !this.props.user.msg) {
        return(
            <Media>
                {this.props.selectedMovie && (
                    <div className="video-player-component col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title={this.props.selectedMovie.Title} className="embed-responsive-item" src={`http://youtube.com/embed/${this.props.selectedMovie.YT}`}></iframe>
                    </div>
                    <div className="details">
                      <strong>{this.props.selectedMovie.Title}</strong>
                      <p>{this.props.selectedMovie.Description}</p>
                    </div>
                  </div>
                )}
            </Media>
        );
        }
        return <Redirect to= "/login" push/>;
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        moviesFetch
   }, dispatch)
   };
const mapStateToProps = state => {
    return { 
        user: state.user,
        selectedMovie: state.selectedMovie
    };
  };
const Movie = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);
export default Movie;