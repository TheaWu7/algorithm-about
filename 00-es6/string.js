// template
const tmpl = (addr) => `
  <table>
    ${addr
      .map(
        (addr) => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
      `
      )
      .join("")}
  </table>
`;

const data = [
  { first: "[kelly]", last: "guo" },
  { first: "thea", last: "[wu]" },
];

console.log(tmpl(data));
