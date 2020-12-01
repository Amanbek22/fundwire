import React from 'react';
import styled from "styled-components";
import {TableStyle} from "../table-style/table-style";
import {TableComponentWrapper} from "../feedComponents/Feed-style";
import {Link} from "react-router-dom";
import {Action} from "../feedComponents/FeedComponents";


const TableWrapper = styled(TableStyle)`
  grid-template-columns: 1fr 0.8fr 2fr  80px;
`

function CompaniesTableHeader() {
    return (
        <TableWrapper>
            <div>NAME</div>
            <div>SYMBOL</div>
            <div>MANAGERS</div>
            <div>ACTIONS</div>
        </TableWrapper>
    );
}

export default CompaniesTableHeader;


const CompaniesElementWrapper:any = styled(TableWrapper)`
  ${(props:any)=> TableComponentWrapper(props.bg)}
`
type CompaniesElementProps = {
    title: string
    id: string | number
    symbol: string
    manager: string | number
}
export const CompaniesElement:React.FC<CompaniesElementProps> = ({title, id, symbol, manager}) => {
    return (
        <CompaniesElementWrapper>
            <Link to={`feed/create/${id}`}>{title}</Link>
            <div>{symbol}</div>
            <div>{manager}</div>
            <div><Action/></div>
        </CompaniesElementWrapper>
    )
}