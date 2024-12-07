import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const letNavigate = useNavigate();
  const initialValues = {
    title: '',
    postDescription: '',
    username: '',
    UserId: 1,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a title!'),
    postDescription: Yup.string().required('You must input a post!'),
    username: Yup.string()
      .min(3, 'You must include at least 3 characters')
      .max(15)
      .required('You must input a username!'),
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      letNavigate('/');
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex: Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="postDescription" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postDescription"
            placeholder="(Ex: Post...)"
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex: John123...)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
