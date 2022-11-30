import React, { useState, useEffect, useMemo, useCallback } from 'react'

const Test = () => {
    const [name, setName] = useState("Rangel");
    const [age, setAge] = useState(20);
    
    //useMemo = variables and constants;
    //useCallback = functions;

    const handleChangeName = useCallback(() => {
        console.log("Alterou o nome");
        setName(name === "Rangel" ? "Eric" : "Rangel");
    }, [name]);

    const handleChangeAge = useCallback(() => {
        const newAge = age * 100;
        console.log(`Age: ${age}, NewAge: ${newAge}`);
        setAge(age === 20 ? 30 : 20);
    }, [age])

    useEffect(() => {
        //When the component is constructed on screen;
        alert("Alo");

        //When the component is destructed;
        //return () => {};
    }, [name, age]);

    //Saves on memory things that could consume much performance when component is reconstructed;
    //Example, a complex calculation;
    useMemo(() => {
        console.log("A");
    }, [])

    return (
        <>
            <button onClick={handleChangeName}>
                {name}
            </button>
            <button onClick={handleChangeAge}>
                {age}
            </button>
        </>
    )
}

export { Test };