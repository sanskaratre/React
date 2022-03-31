

    const clickHandler = (id) => {
       console.log("click me");
        const per = document.getElementById("perelement");
        const chld = document.getElementById(id);
    
        if(chld){
         per.removeChild(chld);
    }
}
        export default clickHandler;