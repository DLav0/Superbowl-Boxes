

const ListItem = (props) => {

    const personID = props.personID
    const handleClick = () =>  {
        personID(props.person.id)
    }


    return (
        <div className="listItem" onClick={handleClick}>
            {props.person.id + 1 }__
            {props.person.name} ___
            AFC Num: {props.person.afc} ___
            NFC Num: {props.person.nfc} 
        </div>
    )
}

export default ListItem

