import { useEffect, useRef, useState } from "react";


export default function () {

    // useState hook
    const [length, setLength] = useState(6);
    const [isNumAllowed, setIsNumAllowed] = useState(false);
    const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useEffect hook
    useEffect(() => {

        generatePassword();

    }, [length, isNumAllowed, isSpecialCharAllowed]);

    // useRef hook
    const passwordRef = useRef(null);

    let generatePassword = () => {

        let pass = "";
        let str = "";
        const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const smallLetters = "abcdefghijklmnopqrstuvwxyz";
        const num = "1234567890";
        const specialChars = "!@#$&*";

        str = capitalLetters + smallLetters;
        if (isNumAllowed) str += num;
        if (isSpecialCharAllowed) str += specialChars;

        for (let i = 1; i <= length; i++) {
            let randomIndexGenerate = Math.random() * str.length + 1;
            randomIndexGenerate = Math.floor(randomIndexGenerate);

            pass += str.charAt(randomIndexGenerate - 1);
        }

        // console.log("the passWord is : " + pass);
        setPassword(pass);
    }

    let copyToClipBoard = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    }

    return (
        <>
            <div className="vw-100 vh-100 m-2 center">
                {/* <h1>This is Password Generator Component.</h1> */}
                <div className="col-md-7 border border-2 border-dark py-md-4 px-md-3">
                    <div className="d-flex align-items-center">
                        <input
                            value={password}
                            type="text" className="col-md-6 text-primary fw-bold"
                            ref={passwordRef}
                        />
                        <button
                            onClick={copyToClipBoard}
                            type="button"
                            className="btn btn-success btn-same-size">
                            Copy
                        </button>
                    </div>

                    <br />
                    <input
                        onChange={(e) => { setLength(e.target.value) }}
                        type="range" name="" id="length"
                        min={6} max={16}
                        className="col-md-6"
                        value={length}
                    />
                    <label htmlFor="length" className="mx-3">Length of Password : <span className="text-primary fw-bold">{length}</span></label>

                    <br />
                    <input
                        onChange={(e) => {
                            setIsNumAllowed(e.target.checked);
                        }}
                        type="checkbox" name="" id="isNumAllowed" checked={isNumAllowed}
                    />
                    <label htmlFor="isNumAllowed" className="mx-3">With Numbers</label>

                    <br />
                    <input
                        onChange={(e) => {
                            setIsSpecialCharAllowed(e.target.checked);
                        }}
                        type="checkbox" name="" id="isSpecialCharAllowed" checked={isSpecialCharAllowed}
                    />
                    <label htmlFor="isSpecialCharAllowed" className="mx-3">With Special Characters</label>

                </div>
            </div>
        </>
    );
}