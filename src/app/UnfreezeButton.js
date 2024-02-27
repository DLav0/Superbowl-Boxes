

const UnfreezeButton = (props) => {

    const clickFreeze = () => {
        props.unLock()
    }
    if (props.isLocked) {
    return (
        <button className="btn btn-primary mt-3" onMouseUp={clickFreeze} >Unfreeze</button>
        )
    }
    else { 
        return (
        <div></div>
        ) 
    }
}

export default UnfreezeButton

