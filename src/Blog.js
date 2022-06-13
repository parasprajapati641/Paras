import React from "react";
import Paras from "./logo.svg";
import { Card, CardGroup } from "react-bootstrap";
import "./Blog.css";

function Blog() {
  return (
    <div className="container-fluid">
      <h1>Blogs</h1>
      <CardGroup>
        <Card className="h-auto cardMain">
          <Card.Img className="h-25" variant="top" src={Paras} />
          <Card.Body>
            <Card.Title>Paras Prajapati</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" className="h-25" src={Paras} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className="h-25" variant="top" src={Paras} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Blog;
