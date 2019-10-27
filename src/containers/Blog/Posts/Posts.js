import React, { Component } from 'react'
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';
import FullPost from "../FullPost/FullPost";
import {Route} from "react-router";

class Posts extends Component{

    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Babs'
                    }
                });

                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        console.log(this.props);
        this.props.history.push({
            pathname: this.props.match.url + '/'+ id
        })
    };

    render () {

        let posts = <p>Error!</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />

            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>

                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>

        );
    }

};

export default Posts