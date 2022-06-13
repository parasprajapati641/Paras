import React from "react";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react";

function Patch() {
//   const EditUserForm = () => {
    // const history = useHistory();
  const match = useRouteMatch();
  let routeId = match.params.id;
  console.log(routeId);

  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [item, setItem] = useState({});

  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
    // history.push("/");
  };

  const updateProduct = () => {
    fetch(`/${routeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "https://jsonplaceholder.typicode.com",
      },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
      }),
    })
      .then((res) => res.json())
      .then((result) => setItem(result))
      .catch((err) => console.log("error: ", err));
  };

    useEffect(() => {
      fetch(`/products/${routeId}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setName(result.product.name);
            setPrice(result.product.price);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, []);

  return (
    <div>
      <Form onChange={() => {
            handleSubmit();
          }}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={() => {
            handleInputChange();
          }}
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={() => {
            handleInputChange();
          }}
        />

        <button type="submit">Update</button>
        <button>Cancel</button>
      </Form>
    </div>
  );
}

export default Patch;
