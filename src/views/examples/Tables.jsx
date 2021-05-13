import React, { useState, useEffect } from "react";

import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// import classnames from "classnames";

const Tables = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("=== useEffect ===");

    const fetchInitialData = async () => {
      setIsError(false);
      try {
        const response = await fetch("http://localhost:5000/get"); //미리 만들어놓은 api 서버
        const initialData = await response.json();
        setTodos(initialData);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchInitialData();
  }, []);

  let columns = ["ranking", "word", "frequency"];
  let data = [];
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  if (todos.index) {
    //비동기처리 대박
    let rankings = range(7, todos.index.length, 1);
    let words = todos.index.slice(6, 20);
    let fres = todos.data.slice(6, 20);

    for (var i = 0; i < words.length; i++) {
      var dic = { ranking: rankings[i], word: words[i], fre: fres[i] };
      data.push(dic);
    }
  }

  return (
    <Container className="align-items-center" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">{todos.name} Ranking </h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  {columns.map((column) => (
                    <th scope="col" key={column}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ ranking, word, fre }) => (
                  <tr key={ranking + word + fre}>
                    <td>{ranking}</td>
                    <td>{word}</td>
                    <td>{fre}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Tables;
