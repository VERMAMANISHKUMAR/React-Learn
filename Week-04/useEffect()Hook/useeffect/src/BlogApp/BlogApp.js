import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addBlog = () => {
    if (title && content) {
      setBlogs([...blogs, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const deleteBlog = (index) => {
    const newBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(newBlogs);
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Add a New Blog</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3 className="mb-4">Add a New Content</h3>
        <textarea
          className="form-control mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
        </textarea>
        <button className="btn btn-primary" onClick={addBlog}>
          Add Blog
        </button>
      </div>
      <h2 className="mt-5">Blogs</h2>
      <ul className="list-group">
        {blogs.map((blog, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="text-center w-100">
              <h5>{blog.title}</h5>
              <p>{blog.content}</p>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => deleteBlog(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogApp;
