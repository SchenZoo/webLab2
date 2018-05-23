// src/js/components/List.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { FormGroup, Radio, Button, Media } from 'react-bootstrap';
        
import { sortMovies,reverseMovies  } from '../actions/index';
import { bindActionCreators } from 'redux';


class MoviesListComponent extends Component {
  constructor(props)
  {
    super(props);
    this.handleChange=this.handleChange.bind(this);

    this.sort=[];
    this.sort['rating']=(a,b) => {
        return parseFloat(b.imdbRating)-parseFloat(a.imdbRating);
    }
    this.sort['name']=(a,b) => {
    let nameA = a.Title.toUpperCase();
    let nameB = b.Title.toUpperCase();
    if (nameA < nameB) {
    return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
    }

  }
  handleChange(event)
  {
      this.props.sortMovies(this.sort[event.target.id]);
  }
  render() {
    if(this.props.user && !this.props.user.msg) {
            return (
                <div className="container">
                    <h3>Found there movies</h3>
                    <FormGroup>
                        <Radio  id='name'name="radioGroup" onChange={this.handleChange} inline>
                            Sort by name
                        </Radio>{' '}
                        <Radio id='rating'name="radioGroup" onChange={this.handleChange} inline>
                            Sort by rating
                        </Radio>{' '}
                        <Button bsStyle="primary" bsSize="sm" onClick={this.props.reverseMovies}>
                            ⇵
                        </Button>
                    </FormGroup>

                    {this.props.movies && this.props.movies.map(x=>{ 
                      return (
                        <Media key={x.imdbID}>
                            <Media.Left>
                                <Link to={ { pathname:`/movie/${x.imdbID}` } } className="d-flex align-self-center">
                                    <img className="media-object" src={x.Poster!=='N/A'?x.Poster:'http://files.softicons.com/download/system-icons/bluegray-icons-by-kidaubis/png/256/File%20Movie%20Clip.png'} alt={x.Title}/>
                                </Link>
                            </Media.Left>
                            <Media.Body>
                                 <Media.Heading componentClass='h2'>{x.Title}</Media.Heading>
                                 <p>Year: {x.Year}</p>
                                 {/* <p>Actors: {x.Actors}</p>
                                <p>Genre: {x.Genre.map(el=>{return el+' '})}</p>
                                <p>Rating: {x.imdbRating}</p> */}
                            </Media.Body>
                        </Media>
                      )})}
                </div>
          );
     } else{
          return <Redirect to= "/login" push/>;
    }
}
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sortMovies,
        reverseMovies,
     }, dispatch)
   };
const mapStateToProps = state => {
  return { 
      user: state.user,
      movies: state.wMovies
  };
};
const MovieList = connect(mapStateToProps,mapDispatchToProps)(MoviesListComponent);
export default MovieList;