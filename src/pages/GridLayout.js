import React from "react";
import styled from "styled-components";

// const Grid1 = styled.div`
//   display: grid;
//   grid-template-rows: 200px 150px;
//   grid-template-columns: repeat(3, 250px);
//   grid-gap: 3px;
// `;

const Grid2 = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header"
    "aside main main main"
    "footer footer footer footer"
    "me me me me";
`;

export default function GridLayout() {
  return (
    <Grid2>
      <div style={{ gridArea: "header", background: "red" }}>Heder</div>
      <div style={{ gridArea: "aside", background: "yellow" }}>Sidebar</div>
      <div style={{ gridArea: "main", background: "green" }}>Main</div>
      <div style={{ gridArea: "footer", background: "blue" }}>Footer</div>
      <div style={{ gridRowStart: 4, gridColumnStart: 2, gridColumnEnd: 4, background: "pink" }}>E</div>
    </Grid2>
  );
}
