

const ListItem = (props) => {

    const personID = props.personID
    const handleClick = () =>  {
        personID(props.person.id)
    }


    return (
        <div className="listItem" onClick={handleClick}>
            {props.person.id + 1 }&nbsp;&nbsp;&nbsp;&nbsp;
            {props.person.name} &nbsp;&nbsp;
            AFC Num: {props.person.afc} &nbsp;&nbsp;
            NFC Num: {props.person.nfc} 
        </div>
    )
}

export default ListItem

