import Box from './Box'

// const personRow = () => {
//     for (let i = 0; i < 10; i++) {
//         let boxArr = []
//         boxArr.push(<Box key={i}/>)
//     }
// }

// const boxesIn = personRow()





// const mapArray = blankArr.map((blank, i) => {
//     if 
// })

// const nfcArray = blankArr.map((blank) => blank )

// const mapArrayInit = (persons) => {
//     let nfcArray
//     for (let i = 0; i < 10; i++) {
//         if (persons.nfc === i) {
//             nfcArray.push('')
//         }
//         else {
//             nfcArray.push('')
//         }
//     }
// } 

// let mapArray =[]
// for (afc of afcPass) {
//     for (let i = 0; i < 10; i++) {
//         if (afc.nfc === i) {
//             mapArray.push(afc)
//         }
//         else {
//             mapArray.push('')
//         }
//     }
// }

// let mapArray =[]
     
     
// if (true) {

//    //Problem is here.  Multiple people in a collumn causes the 10 iteration to push 20 or 30 items in mapArray.  
//    //Back to where I started.  Maybe some filters?
//    for (const afc of afcPass) {
//    for (let i = 0; i < 10; i++) {
//            if (afc.nfc === i) {
//                mapArray.push(afc)
//            }
//            else {
//                mapArray.push('')
//            }
//        }
//    }
//    }
// else { mapArray = blankArr }
// 
// const blankArr = ['', '', '', '', '', '', '', '', '', ''] 

// Now it's just rendering only one of the people if multiple entries go into a row.









const BoxRow = (props) => {


     const afcPass = props.afcPass
     let mapArray = ['', '', '', '', '', '', '', '', '', '']
     for (const afc of afcPass) {
        mapArray = mapArray.map((blank, i) => {
            if (afc.nfc === i) {
                return afc
            }
            else {return blank}
        }
        )
    }
  
    
    return (
        <>
            {mapArray.map((input, i) => 
                <Box key={i} person={input} hoverPerson={props.hoverPerson} lockPerson={props.lockPerson} />
            )}
        </>
    )
}

export default BoxRow