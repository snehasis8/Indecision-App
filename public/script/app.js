'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.removeAllOptions = _this.removeAllOptions.bind(_this);
    _this.handelPick = _this.handelPick.bind(_this);
    _this.handelAddoption2 = _this.handelAddoption2.bind(_this);
    _this.removeSingleOptions = _this.removeSingleOptions.bind(_this);
    _this.state = {
      options: []
    };

    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var a = JSON.parse(localStorage.getItem('Items'));
      console.log(a);
      this.setState(function () {
        return {
          options: a
        };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      if (prevState.options.length !== this.state.options.length) {
        var jsn = JSON.stringify(this.state.options);
        localStorage.setItem('Items', jsn);
      }
    }
  }, {
    key: 'removeAllOptions',
    value: function removeAllOptions() {
      // this.setState(() => {
      //   return {
      //     options: []
      //   };
      // });
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'removeSingleOptions',
    value: function removeSingleOptions(fe) {

      this.setState(function (prevState) {
        return {

          options: prevState.options.filter(function (x) {
            return fe !== x;
          })

        };
      });
    }
  }, {
    key: 'handelPick',
    value: function handelPick() {
      this.setState(function (prevState) {
        var randomNum = Math.floor(Math.random() * prevState.options.length);
        alert(prevState.options[randomNum]);
      });
    }
  }, {
    key: 'handelAddoption2',
    value: function handelAddoption2(e) {
      if (!e) {
        return "Enter a Valid Value to add Item";
      } else if (this.state.options.indexOf(e) > -1) {
        return "this option is already exist";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([e])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        'div',
        { id: 'gg' },
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 1,
          handelPick: this.handelPick
        }),
        React.createElement(Options, {
          options: this.state.options,
          removeAllOptions: this.removeAllOptions,
          removeSingleOptions: this.removeSingleOptions
        }),
        React.createElement(AddOption, { handelAddoption2: this.handelAddoption2 })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' ',
      props.title
    ),
    props.title && React.createElement(
      'h2',
      null,
      ' ',
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision app"
};

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handelPick,
            disabled: !this.props.hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

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


var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.removeAllOptions },
      ' Remove All '
    ),
    props.options.map(function (x) {
      return React.createElement(Option, {
        key: x,
        optionText: x,
        removeSingleOptions: props.removeSingleOptions
      });
    })
  );
};

var Option = function Option(props) {

  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.removeSingleOptions(props.optionText);
        } },
      ' remove '
    )
  );
};

var AddOption = function (_React$Component3) {
  _inherits(AddOption, _React$Component3);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.handelAddoption = _this3.handelAddoption.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: 'handelAddoption',
    value: function handelAddoption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handelAddoption2(option);

      this.setState(function () {
        return {
          error: error
        };
      });
      if (option) {
        //this.handelAddoption2(option);

        e.target.elements.option.value = " ";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Add Option component here',
        this.state.error && React.createElement(
          'h3',
          null,
          ' ',
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handelAddoption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            ' Addoption '
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app2"));

//ReactDOM.render(<IndecisionApp />, document.getElementById("app2"));
