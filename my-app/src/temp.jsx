function welcome(prop){
    return <h2>welcom {prop.name}!</h2>
}

function temp(){
    return (
        <div>
            <welcome name="Tharun"/>
            <welcome name="Rama"/>
        </div>
    )
}