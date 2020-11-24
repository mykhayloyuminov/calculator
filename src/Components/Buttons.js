import React from "react";

const Buttons = (props) => {
    return (
        <div className="allButtons">
        <div>
        <button className="buttonAC" value="AC" onClick={props.handleClear}>AC</button>
        <button className="button" value="/" onClick={props.handleClick}>/</button>
        </div>
        <div>
        <button className="button" value="7" onClick={props.handleClick}>7</button>
        <button className="button" value="8" onClick={props.handleClick}>8</button>
        <button className="button" value="9" onClick={props.handleClick}>9</button>
        <button className="button" value="*" onClick={props.handleClick}>*</button>
        </div>
        <div>
        <button className="button" value="4" onClick={props.handleClick}>4</button>
        <button className="button" value="5" onClick={props.handleClick}>5</button>
        <button className="button" value="6" onClick={props.handleClick}>6</button>
        <button className="button" value="-" onClick={props.handleClick}>-</button>
        </div>
        <div>
        <button className="button" value="1" onClick={props.handleClick}>1</button>
        <button className="button" value="2" onClick={props.handleClick}>2</button>
        <button className="button" value="3" onClick={props.handleClick}>3</button>
        <button className="button" value="+" onClick={props.handleClick}>+</button>
        </div>
        <div>
        <button className="buttonZero" value="0" onClick={props.handleClick}>0</button>
        <button className="button" value="." onClick={props.handleClick}>.</button>
        <button className="button" value="=" onClick={(e) => {props.handleClick(e,"="); props.handleEqual()}}>=</button>
        </div>
        </div>
    )
}

export default Buttons;