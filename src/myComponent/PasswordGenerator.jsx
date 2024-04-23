import { useEffect, useState } from "react";


export default function () {
    const [length, setLength] = useState(6);
    const [isNumAllowed, setIsNumAllowed] = useState(false);
    const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {

        generatePassword();

    }, [length, isNumAllowed, isSpecialCharAllowed]);

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
    // generatePassword();

    return (
        <>
            <div className="m-2">
                {/* <h1>This is Password Generator Component.</h1> */}
                <div>
                    <div>
                        <input
                            value={password}
                            type="text" className="col-md-5 text-primary fw-bold"
                        />
                        <button type="button" className="btn btn-success btn-same-size">Copy</button>
                    </div>

                    <br />
                    <input
                        onChange={(e) => { setLength(e.target.value) }}
                        type="range" name="" id="length"
                        min={6} max={16}
                        className="col-md-3"
                        value={length}
                    />
                    <label htmlFor="length" className="mx-3">Length of Password : {length}</label>

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