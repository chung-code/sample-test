import React from "react";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// import classnames from "classnames";


const Tables = ({todos}) => {
  let columns = ["word", "frequency"];
  let data = [];

  if (todos.index){ //비동기처리 대박
    let words = todos.index.slice(6,20);
    let fres = todos.data.slice(6,20);

    for(var i = 0; i < words.length; i++) {
      var dic = {word: words[i], fre: fres[i]};
      (data.push(dic));
    };
  };

  return (
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">{todos.name}</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  {columns.map((column) => (
                    <th scope="col" key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ word, fre }) => (
                  <tr key={word + fre}>
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

  )
}

export default Tables;