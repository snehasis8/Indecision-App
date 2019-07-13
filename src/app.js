

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handelPick = this.handelPick.bind(this);
    this.handelAddoption2 = this.handelAddoption2.bind(this);
    this.removeSingleOptions = this.removeSingleOptions.bind(this);
    this.state = {
      options: []
    };

  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem('Items'));
    console.log(a);
    this.setState(() => {
      return {
        options: a
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {


    if (prevState.options.length !== this.state.options.length) {
      const jsn = JSON.stringify(this.state.options)
      localStorage.setItem('Items', jsn)
    }

  }

  removeAllOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({ options: [] }))
  }
  removeSingleOptions(fe) {

    this.setState((prevState) => ({


      options: prevState.options.filter((x) => {
        return fe !== x;
      })

    }));
  }

  handelPick() {
    this.setState(prevState => {
      const randomNum = Math.floor(Math.random() * prevState.options.length);
      alert(prevState.options[randomNum]);
    });
  }
  handelAddoption2(e) {
    if (!e) {
      return "Enter a Valid Value to add Item";
    } else if (this.state.options.indexOf(e) > -1) {
      return "this option is already exist";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat([e])
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div id="gg">
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 1}
          handelPick={this.handelPick}
        />
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}
          removeSingleOptions={this.removeSingleOptions}
        />
        <AddOption handelAddoption2={this.handelAddoption2} />
      </div>
    );
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> {this.props.title}</h1>
//         <h2> {this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Header = props => {

  return (
    <div>
      <h1> {props.title}</h1>
      {props.title && <h2> {props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision app"
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handelPick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

// class Options extends React.Component {
//   render() {
//     let arr = this.props.options;
//     console.log(` --->  ${this.props.options} <-----`);

//     console.log(arr.map(x => "Hi " + x));

//     return (
//       <div>
//         <button onClick={this.props.removeAllOptions}> Remove All </button>
//         {this.props.options.map(x => (
//           <p key={x}> {x} </p>
//         ))}
//       </div>
//     );
//   }
// }
const Options = props => {
  return (
    <div>
      <button onClick={props.removeAllOptions}> Remove All </button>

      {props.options.map(x => (
        <Option
          key={x}
          optionText={x}
          removeSingleOptions={props.removeSingleOptions}
        />
      ))}

    </div>
  );
};

const Option = (props) => {

  return (
    <div>
      {props.optionText}
      <button onClick={(e) => { props.removeSingleOptions(props.optionText) }}> remove </button>

    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handelAddoption = this.handelAddoption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handelAddoption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handelAddoption2(option);

    this.setState(() => {
      return {
        error: error
      };
    });
    if (option) {
      //this.handelAddoption2(option);

      e.target.elements.option.value = " ";
    }
  }
  render() {
    return (
      <div>
        Add Option component here
        {this.state.error && <h3> {this.state.error}</h3>}
        <form onSubmit={this.handelAddoption}>
          <input type="text" name="option" />
          <button> Addoption </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app2"));


//ReactDOM.render(<IndecisionApp />, document.getElementById("app2"));
