const Box = (props) => {
    if (props.person.shortName) {
    return (
        <td>{props.person.shortName}</td>
    )
    }
    else {
        return (
            <td id="blankBox"></td>
        )
    }
}

export default Box