const ButtonContainer = ({ Input, setInput }) => {


    const clearScreen = () => {
        setInput("");
    }

    const calculateRes = () => {
        try {
            const result = eval(Input);
            setInput(result.toString());
        } catch (err) {
            setInput("INVALID");
          
        }
    }
    const clearEntry = () => {
        setInput(Input.slice(0, -1));
    }
    return (

        <div className="container">
            <div className="btnGroup">
                <button className="claci-btn" onClick={clearScreen}>clear</button>
                <button className="claci-btn" onClick={() => setInput(Input + '%')}>%</button>
                <button className="claci-btn operator" onClick={() => setInput(Input + '*')}>×</button>
                <button className="claci-btn operator" onClick={() => clearEntry()}>←</button>

            </div>
            <div className="btnGroup">
                <button className="claci-btn" onClick={() => setInput(Input + '7')}>7</button>
                <button className="claci-btn" onClick={() => setInput(Input + '8')}>8</button>
                <button className="claci-btn" onClick={() => setInput(Input + '9')}>9</button>
                <button className="claci-btn operator" onClick={() => setInput(Input + '+')}>+</button>

            </div>
            <div className="btnGroup">
                <button className="claci-btn" onClick={() => setInput(Input + '4')}>4</button>
                <button className="claci-btn" onClick={() => setInput(Input + '5')}>5</button>
                <button className="claci-btn" onClick={() => setInput(Input + '6')}>6</button>
                <button className="claci-btn operator" onClick={() => setInput(Input + '-')}>-</button>

            </div>
            <div className="btnGroup">
                <button className="claci-btn" onClick={() => setInput(Input + '3')}>3</button>
                <button className="claci-btn" onClick={() => setInput(Input + '2')}>2</button>
                <button className="claci-btn" onClick={() => setInput(Input + '1')}>1</button>
                <button className="claci-btn operator" onClick={() => setInput(Input + '/')}>÷</button>


            </div>

            <div className="btnGroup">
                <button className="claci-btn zero" onClick={() => setInput(Input + '00')}>00</button>
                <button className="claci-btn zero" onClick={() => setInput(Input + '0')}>0</button>
                <button className="equals" onClick={calculateRes} >=</button>

            </div>

        </div>


    );
}

export default ButtonContainer;