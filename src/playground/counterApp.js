class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handelIncrease = this.handelIncrease.bind(this);
        this.handelDecrease = this.handelDecrease.bind(this);
        this.handelReset = this.handelReset.bind(this);
        this.state = {
            count: 1
        }
    }
    handelIncrease() {

    }
    handelDecrease() {
        console.log("Decrease is hit ");
    }
    handelReset() {
        console.log("Reset is hit ");
    }
    render() {
        return (
            <div>
                <h1> Count : </h1>
                <button onClick={this.handelIncrease}> +1</button>
                <button onClick={this.handelDecrease}> -1</button>

                <button onClick={this.handelReset}> Reset Button </button>
            </div>
        );
    }
}

const rootElement = document.getElementById("app2");
ReactDOM.render(<Counter />, rootElement);