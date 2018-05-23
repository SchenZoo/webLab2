// src/js/components/List.js
import React, { Component }  from "react";
import {Redirect,Link} from 'react-router-dom';
import { Carousel, Label } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { imagesFetch } from '../actions/index';


class HomeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.props.imagesFetch();
    }
    render() {
        if(this.props.user && !this.props.user.msg) {
            return(
                <div className="well" style={{maxWidth: 500, margin: '0 auto 10px' }}>
                <h3>
                    <Label>Search for your favourite film</Label>
                </h3>
                {this.props.images &&  (<Carousel width={500} height={250}>
                    {this.props.images.map(x=>{
                        return(
                        <Carousel.Item key={x.id}>
                            <Link to={ { pathname:`/movie/${x.id}`} }>
                                <img width={500} height={250} alt={x.Title} src={x.Poster} />
                            </Link>
                        </Carousel.Item>)
                    })}
                </Carousel>)}

                </div>
            );
        }
        else{
            return <Redirect to= "/login" push/>;
        }
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        imagesFetch
   }, dispatch)
   };
const mapStateToProps = state => {
    return { 
        user: state.user,
        images: state.images
    };
  };
const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;