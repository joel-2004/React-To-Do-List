import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ToDo = () => {
    const [title, setTitle] = useState("");
    const [toDos, setToDos] = useState([]);
    const click = () => {
        if (title !== "") {
            const toDos = { id: new Date().getTime().toString(), title };
            setToDos((e) => {
                return [...e, toDos];
            })
            setTitle("");
        }
        else {
            alert("add something in to do");
        }
    }
    const dlt = (id) => {
        const fil = toDos.filter((e) => e.id !== id);
        setToDos(fil);
    }
    return <div className="container-fluid text-center">
        <h1>To do</h1>
        <div className="row">
            <div className="col-12 text-center">
                <form>
                    <h1>List</h1>
                    <input type="text" id="todo" name="todo" className="form-control-lg"
                        value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                    <button type="button" className="btn btn-primary mx-2" onClick={click}>Add</button>
                </form>
                <div className="col-12 text-center mt-2">
                    {toDos.map((e) => {
                        return (
                            <div key={e.id}>
                                <h1>{e.title}
                                    <button type="button" className="btn btn-info mx-3" onClick={() => dlt(e.id)}>Done</button>
                                </h1>

                            </div>);
                    })}
                    <div className="col-12">
                        <button type="button" onClick={() => setToDos([])} className="btn btn-danger">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default ToDo;