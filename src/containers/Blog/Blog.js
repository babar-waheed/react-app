import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>

                            <li><NavLink
                                to="/"
                                exact
                            >Home</NavLink></li>

                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="active my-active"

                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts} />
                    <Redirect
                        from="/"
                        to="/posts"
                    />
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;