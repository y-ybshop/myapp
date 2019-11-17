import React from 'react';
// import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table'
const DisplayComponent = (props) => {

    const headers = ["Source", "Name", "Result", "Info"]


    return (<div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <TableHeader headers={headers} />
                </tr>
            </thead>
            <tbody>

                <TableContent results={props.results} />

            </tbody>
        </Table>
    </div>)
}

const TableHeader = (props) => {
    let table = props.headers.map(function (item, index, array) {
        
           return( <th key={index}>{item}</th>)
    });
    return table;
}


const TableContent = (props) => {
    return props.results.map(function (item, index, array) {
        
          return(  <tr key ={index}>
            <RowsComp
                item={item}
                index={index}
            />
            </tr>)
        
        // console.log(item, index);
    });
}





const RowsComp = (props) => {
    return (
        <>
        <td>{JSON.stringify(props.item.source)}</td>
        <td>

            {JSON.stringify(props.item.title)}
            </td>
            <td>
            {JSON.stringify(props.item.result)}
            </td>
            <td>
            {JSON.stringify(props.item.info)}

            </td>
            </>);
}

export default DisplayComponent;

