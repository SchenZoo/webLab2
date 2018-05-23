
import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { moviesSearch, wantedMovies,logout,moviesFetch } from '../actions/index';
import { Link } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

const imgStyle={'maxHeight': '70px', 'maxWidth': '70px'};
class NavigationComponent extends Component {
    constructor(props)
    {
        super(props);

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            input:'',
            error:''
        }

    }

    handleChange(event)
    {
        this.setState({input:event.target.value,error:''});
        this.props.moviesSearch(event.target.value);
    }
    handleClick()
    {
        if(this.state.input.length<2) {
            this.setState({error:'Please search with 2+ letters :)'});
        } else {
        this.props.wantedMovies(this.state.input);
        this.props.history.push("/movieList",{ change : true});
        }
    }
    render() {
        if(this.props.user && !this.props.user.msg) {
        return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to={ { pathname:"/home"} } >FilmsBySomeone</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Text pullLeft>
            Signed in as: {this.props.user && this.props.user.username}
            </Navbar.Text>
            <Navbar.Form pullRight>
                <FormGroup>
                    <div className= "input-group">
                        <DebounceInput debounceTimeout={200} minLength={2} element={FormControl} type="text" placeholder="Search" onChange={this.handleChange} />
                            <ul className={this.props.search? 'dropdown-menu show':'dropdown-menu'}>
                            {this.props.search && this.props.search.slice(0,5).map(x=>
                            {
                                return(<li className='dropdown-item text-primary clickable my-2' key={x.imdbID}>
                                    <Link to={ { pathname:`/movie/${x.imdbID}`} } onClick={e=>this.props.moviesFetch(x.imdbID)}>
                                        <img style={imgStyle} src={x.Poster!=='N/A'?x.Poster:'http://files.softicons.com/download/system-icons/bluegray-icons-by-kidaubis/png/256/File%20Movie%20Clip.png'} alt={'ne'}/> 
                                        {x.Title}
                                    </Link> 
                                </li>);
                            })}
                            </ul>
                    </div>
                </FormGroup>{' '}
                <Button type='submit'onClick={this.handleClick}>Search</Button>
                <Button onClick={this.props.logout}>Log out</Button>
                {this.state.error && (<Navbar.Text><font color="red">{this.state.error}</font></Navbar.Text>)}
            </Navbar.Form>

        </Navbar>);
        }
        return null;
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        moviesSearch,
        wantedMovies,
        logout,
        moviesFetch
   }, dispatch)
   };
const mapStateToProps = state => {
    return { 
        user: state.user,
        search: state.search
    };
  };
const Navigation = connect(mapStateToProps,mapDispatchToProps)(NavigationComponent);
export default Navigation;