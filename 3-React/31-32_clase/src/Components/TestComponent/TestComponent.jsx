

function TestComponent() {

    function saludar(){
        alert("hola rey")
    }
    let textButton = 'Click';

    return (
        <button onClick={saludar}>
            {textButton}
        </button>
    )
}

export {
    TestComponent
}