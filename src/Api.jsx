import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function Comment() {
  const [tableComment, setTableComment] = useState([]);
  const [input, setInput] = useState();
  const [results, setResults] = useState([]);
  // const [data, setData] = useState();
  // const [componentDidMount, setcomponentDidMount] = useState([]);
  // const [shop, setShop] = useState([]);
  // const [count, setCount] = useState([]);
  // const [employees, setEmployees] = useState([]);
  // const array = useState([]);
  // const employees = array[0];
  // const setEmployees = array[1];

  const getTableComment = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(data.data);
      setTableComment(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeleteClick = (index) => {
    const newData = tableComment;
    newData.splice(index, 1);
    setTableComment([...newData]);
    console.log("paras");
  };

  const handleSearch = (e) => {
    //   e.preventDefault();
    // setInput(e.target.value);
    // };
    // if (input.length > 0) {
    //   results.filter((i) => {
    //     return i.postId.match(input);
    // });
  };
  useEffect(() => {
    getTableComment();
  }, []);

  return (
    <div>
      <input name="input" placeholder="search by postId" type="number" />
      <Button
        variant="outline-secondary btn-sm"
        onClick={() => {
          handleSearch();
        }}
      >
        search
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableComment
            // .filter((i) => input)
            ?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.userId}</td>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  <td>
                    <Button
                      onClick={() => handleDeleteClick(index)}
                      // onClick={() => removeData(id)}
                      // onClick={(e) => {
                      //   Paras();
                      // }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Comment;
