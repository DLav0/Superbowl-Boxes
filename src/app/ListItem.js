

const ListItem = (props) => {
    return (
        <div className="">
            Name: {props.person.name} _____
            AFC Num: {props.person.afc} _____
            NFC Num: {props.person.nfc} 
        </div>
    )
}

export default ListItem

