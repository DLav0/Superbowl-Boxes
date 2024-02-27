
const Box = (props) => {

    const hoverPerson = props.hoverPerson
    const lockPerson = props.lockPerson

    const hoverPersonOver = () => {
        hoverPerson(props.person.id)
    }

    const clickPerson = () => {
        lockPerson(props.person.id)
    }

    if (props.person.shortName) {
    return (
        <td onMouseOver={hoverPersonOver} onMouseUp={clickPerson}>{props.person.shortName}</td>
    )
    }
    else {
        return (
            <td id="blankBox"></td>
        )
    }
}

export default Box