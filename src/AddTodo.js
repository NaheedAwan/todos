import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
      e.preventDefault()
      if(!title || !desc){
          alert("Title or Description cannot be Blank")
      }
      props.addTodo(title, desc)
  };
  return (
    <div className="container my-3">
      <h2>Add a Todo</h2>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="title">
          <div className="container mb-3">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Todo-title" />
          </div>
          <div className="container mb-3">
            <Form.Text className="description">Todo Description</Form.Text>
            <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Add description" />
          </div>
        </Form.Group>

        <Button variant="success" className="btn btn-sm btn-success" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
}
