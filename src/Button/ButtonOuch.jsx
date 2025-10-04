
// inline CSS styling
// its easy to understand and prevents global style conflict because not working with class name
// its great for minimal component styling such button and subscribe button
// but inline styling less maintainable in large application
// its reduced the readibility of your component 
// its not great for any complex styling such as responsive CSS

function Button(){

    // const handleClick = (name) => console.log("OUCH!")
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    let count = 0;
     
    const handleClick = (name) => {
     
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }

    const styles = {
        backgroundColor:" hsla(270, 100%, 50%, 0.5)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
    }

     return(<button style={styles} onClick={(e) => handleClick(e)}>Click Me and See Console</button>);
}

export default Button