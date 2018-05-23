
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { moviesFetch  } from '../actions/index';
import { Redirect } from 'react-router-dom';
import { Media,ResponsiveEmbed } from 'react-bootstrap';


class MovieComponent extends Component {
    constructor(props)
    {
        super(props);
        if(this.props.user && !this.props.user.msg) {
            this.props.moviesFetch(this.props.match.params.id);//da ne ucita resurse svaki put kad neko pokusa da ode na stranicu

        }else{
            this.props.history.push("/login",{ change : true});
        }
    }

    render() {
        if(this.props.user && !this.props.user.msg) {
        return(
            <Media>
            {this.props.selectedMovie && (
                <div>
                    <Media>
                        <Media.Left>
                                <img className="media-object" src={this.props.selectedMovie.Poster} alt={this.props.selectedMovie.Title}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading componentClass='h2'>{this.props.selectedMovie.Website!=='N/A'? (<a href={this.props.selectedMovie.Website}>{this.props.selectedMovie.Title}</a>):(<font>{this.props.selectedMovie.Title}</font>)}</Media.Heading>
                            <p>Actors: {this.props.selectedMovie.Actors}</p>
                            {/* <p>Genre: {this.props.selectedMovie.Genre.map(x=>{return x+' '})}</p> */}
                            <p>Genre: {this.props.selectedMovie.Genre}</p> 
                            <p>Rating: {this.props.selectedMovie.imdbRating}</p>
                            <p>Year: {this.props.selectedMovie.Year}</p>
                            <p>Production: {this.props.selectedMovie.Production}</p>
                            <p>{this.props.selectedMovie.Plot}</p>
                        </Media.Body>
                    </Media>
                    {this.props.selectedMovie.YT && (
                    <div className="video-player-component col-md-8" style={{margin: '50px 50px' }}>
                        <ResponsiveEmbed a16by9 >
                            <iframe title={this.props.selectedMovie.Title} className="embed-responsive-item" src={`http://youtube.com/embed/${this.props.selectedMovie.YT}`}></iframe>
                        </ResponsiveEmbed>
                        <div className="details">
                            <strong>{this.props.selectedMovie.Title}</strong>
                            <p>{this.props.selectedMovie.Description}</p>
                        </div>
                    </div>)}
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