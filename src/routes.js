import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import PostList from './containers/post_list';
import PostForm from './containers/post_form';
import Post from './containers/post';
import NotFound from './components/not-found';


class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={PostList}></Route>
                    <Route path="create-post" component={PostForm}></Route>
                    <Route path="post/:id" component={Post}></Route>
                    <Route path="*" component={NotFound}></Route>
                
                </Router>
            </div>
        );
    }
}

export default Routes;