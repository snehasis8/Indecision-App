console.log("app.js is connected now");
//jsx

// var template = (
//   <div>
//     <h1> Changing Heading </h1>
//     <p> quick checking is it changing or not </p>
//   </div>
// );
// var appRoot = document.getElementById("app");
// ReactDOM.render(template, appRoot);
var AppObj = {
  title: "Indecision App",
  subtitle: "This is the basic app testing is changing is it changing",
  options: ["one", "two"]
};
function checkSubtitle(subtitle) {
  if (subtitle) {
    return <p> {subtitle} </p>;
  }
}
var template2 = (
  <div>
    <h1>{AppObj.title}</h1>
    <p> {true && AppObj.subtitle} </p>
    <p>
      {AppObj.options.length > 0 ? "Here are your options : " : "No Options"}
    </p>
    <ol>
      <li> First Item </li>
      <li> Second Item </li>

    </ol>


  </div>
);

let count = 1;
const addOne = () => {

  count++;
  console.log("the function is firing " + count);
  renderCounting();
}
const minusOne = () => {

  count--;
  console.log("the function is firing " + count);
  renderCounting();
}
const resetValue = () => {

  count = 0;
  console.log("the function is firing " + count);
  renderCounting();
}


var placeholder = document.getElementById("app2");
const renderCounting = () => {

  const template3 = (

    <div>
      <h1>  Count : {count}  </h1>
      <button onClick={addOne}> Click to add one </button>
      <button onClick={minusOne}> Click to minus One </button>
      <button onClick={resetValue}> Click to resetValue </button>


    </div >

  )
  ReactDOM.render(template2, placeholder);
}

renderCounting();



