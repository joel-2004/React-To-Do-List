import React, { useReducer, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ToDo = () => {
    const [title, setTitle] = useState("");
    //   const [toDos, setToDos] = useState([]);
    const reducer = (state, action) => {
        if (action.type === "VALUE") {
            const newName = [...state.title, action.payLoad];
            return { ...state, title: newName, isModal: true, modalContent: "Added" };
        }
        if (action.type === "NO_VALUE") {
            return { ...state, isModal: true, modalContent: "Please add something" };
        }
        if (action.type === "REMOVE") {
            const fil = state.title.filter((e) => e.id !== action.payLoad);
            return { ...state, title: fil, isModal: true, modalContent: "Removed" }
        }
        if (action.type === "RESET") {
            return { title: [], isModal: true, modalContent: "Reset" }
        }
        throw new Error("error thrown by me");
    }
    const defaultData = {
        title: [],
        isModal: false,
        modalContent: ""
    }
    const [state, dispatch] = useReducer(reducer, defaultData);
    // const [isTitle, setIsTitle] = useState(false);
    const click = () => {
        if (title) {
            // const toDos = { id: new Date().getTime().toString(), title };
            // setToDos((e) => {
            //     return [...e, toDos];
            // })
            // setTitle("");
            // setIsTitle(false);
            const newName = { id: new Date().getTime().toString(), title: title }
            dispatch({ type: "VALUE", payLoad: newName })
            setTitle("");
        }
        else {
            dispatch({ type: "NO_VALUE" });
        }
    }

    return <div className="container-fluid text-center">
        {state.isModal && <p className="bg-info">{state.modalContent}</p>}
        <h2>To do List</h2>
        <div className="row">
            <div className="col-12 text-center">
                <form>
                    <input type="text" id="todo" name="todo" className="form-control-lg"
                        value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Got something to do?"></input>
                    <button type="button" className="btn btn-primary mx-2" onClick={click}>Add</button>
                </form>
                <div className="col-12 text-center mt-2">
                    {state.title.map((e) => {
                        return (
                            <div key={e.id}>
                                <h2>{e.title}
                                    <button type="button" className="btn btn-info mx-3" onClick={() => dispatch({ type: "REMOVE", payLoad: e.id })}>Done</button>
                                </h2>

                            </div>);
                    })}
                    <div className="col-12">
                        <button type="button" className="btn btn-danger" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default ToDo;