import React, { useState, useEffect } from "react";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const [hasErrorPh, setErrorsPh] = useState(false);
  const [jsonPlaceHolder, setjsonPlaceHolder] = useState([]);

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
  const fetchTestData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    res
      .json()
      .then(res => setjsonPlaceHolder(res))
      .catch(err => setErrorsPh(err));
  };
  // const onClickhandler = () => {
  //   console.log('changed');
  // }
  useEffect(() => {
    fetchData();
    fetchTestData();
  }, []);

  return (
    <div>
      {/* <button onClick={onClickhandler()}>Change api</button> */}
      <span>{JSON.stringify(planets)}</span>
      <br />
      <span>Has error: {JSON.stringify(hasError)}</span>
      <br />
      <hr />
      {jsonPlaceHolder.map(item => (
        <div>
          <span>{item.name}</span>
          <br />
        </div>
      ))}
      <span>{JSON.stringify(jsonPlaceHolder)}</span>
      <br />
      <span>Has error: {JSON.stringify(hasErrorPh)}</span>
      {console.log(planets)}
      {console.log(jsonPlaceHolder)}
    </div>
  );
};
export default Planets;
