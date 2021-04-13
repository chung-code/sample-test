import React from "react";

// reactstrap components
// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   UncontrolledTooltip,
// } from "reactstrap";
// import { lte } from "semver";


const Tables = ({columns, data}) => {
  return (
  <> 
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
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
    </table>
  </> 
  )
};

// Tables.defaultProps = {
//   onIncrement: () => console.warn('onIncrement is not defined'),
//   object: {},
//   array: []
// }

//   return (
//     <>
//       <Container className="mt--7" fluid>
//         {/* Table */}
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">Card tables</h3>
//               </CardHeader>
//               <Table className="align-items-center table-flush" responsive>
//                 <thead className="thead-light">
//                   <tr>
//                     <th scope="col">Word</th>
//                     <th scope="col">Frequency</th>
//                     <th scope="col" />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">
//                       <span className="mb-0 text-sm">
//                         word
//                       </span>
//                     </th>
//                     <td>$2,500 USD</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card>
//           </div>
//         </Row>
//       </Container>
//     </>
//   )
// }

export default Tables;