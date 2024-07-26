// JavaScript
// ----------------------------------------------------------------

// const heading=document.createElement('h1');
// heading.textContent="This is good style write of code";
// heading.className="heading";
// document.getElementById("root").append(heading)

// React with javascript
// ---------------------------------------------
// const reactHeading=React.createElement("h1",{
//   className:"heading",
//   id:"reactHeading",
//   children:"This is good style write of code"
// });

// ReactDOM.render(reactHeading,document.getElementById("root"));


const JSXheading = <><React.Fragment>
<h1 className="heading">This is good style write of code with JSX</h1>
<p>Hello this reactjsx sentex</p>;
</React.Fragment>;
</>
ReactDOM.create.Root(document.getElementById("root")).render(JSXheading);

