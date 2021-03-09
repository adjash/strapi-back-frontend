import React from 'react';
import axios from 'axios';

class AllBlogs extends React.Component {
  // State of your application
  state = {
    blogPosts: [],
    error: null,
  };

  // Fetch your blogPosts immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/blog-posts');
      this.setState({ blogPosts: response.data });
      console.log(this.state.blogPosts)
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, blogPost } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <div className="blogs-wrap">
          {this.state.blogPosts.map(blogPost => (
            <div className="blog-item" key={blogPost.id}>
                <h3>{blogPost.name}</h3>
                <p>{blogPost.snippet}</p>
                <img src={`http://localhost:1337${blogPost.blog_thumbnail[0].url}`}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBlogs;