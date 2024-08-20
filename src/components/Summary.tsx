import React from "react";
import styled from "styled-components";

// Styled components for Summary
const SummaryContainer = styled.div`
  padding: 20px;
  border: 1px solid #a3a3a3;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

const SummaryTitle = styled.h2`
  font-size: 21px;
  color: #363636;
  margin-bottom: 15px;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;

  td,
  th {
    border-bottom: 1px solid #a3a3a3;
    padding: 8px;
    text-align: left;
    color: #363636;
  }
`;

interface SummaryProps {
  color: string | null;
  layout: string | null;
  price: number;
  pages: number;
}

const Summary: React.FC<SummaryProps> = ({ color, layout, price, pages }) => (
  <SummaryContainer>
    <SummaryTitle>Summary</SummaryTitle>
    <SummaryTable>
      <tbody>
        <tr>
          <th>Pages</th>
          <td data-testid={`page${pages ? "" : "-not-selected"}`}>
            {pages ? pages : "Not available"}
          </td>
        </tr>
        <tr>
          <th>Colour</th>
          <td data-testid={`color${color ? "" : "-not-selected"}`}>
            {color || "Not selected"}
          </td>
        </tr>
        <tr>
          <th>Layout</th>
          <td data-testid={`layout${layout ? "" : "-not-selected"}`}>
            {layout || "Not selected"}
          </td>
        </tr>
        <tr>
          <th>Price</th>
          <td data-testid={`price${price ? "" : "-not-selected"}`}>
            {price > 0 ? `£${price}` : "Price not available"}
          </td>
        </tr>
      </tbody>
    </SummaryTable>
  </SummaryContainer>
);

export default Summary;
