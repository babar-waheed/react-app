import React, { Component } from 'react';
import asyncComponent from "../../hoc/asyncComponent";
import Posts from '../../containers/Blog/Posts/Posts';
//import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    };

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
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/>
                    : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Note Found!</h1>} />
                    {/*<Redirect*/}
                    {/*    from="/"*/}
                    {/*    to="/posts"*/}
                    {/*/>*/}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;