import BoxRow from './BoxRow'

const BoxesTable = (props) => {

    const handleClick = () => {
        console.log(afcArray)
      }
    
        const persons = props.persons
        const afc0 = persons.filter((person) => person.afc === 0)
        const afc1 = persons.filter((person) => person.afc === 1)
        const afc2 = persons.filter((person) => person.afc === 2)
        const afc3 = persons.filter((person) => person.afc === 3)
        const afc4 = persons.filter((person) => person.afc === 4)
        const afc5 = persons.filter((person) => person.afc === 5)
        const afc6 = persons.filter((person) => person.afc === 6)
        const afc7 = persons.filter((person) => person.afc === 7)
        const afc8 = persons.filter((person) => person.afc === 8)
        const afc9 = persons.filter((person) => person.afc === 9)
    
        const afcArray = [afc0, afc1, afc2, afc3, afc4, afc5, afc6, afc7, afc8, afc9]
       
        // I think another mapping function could make this array.  Or some other kind of loop.
    
        //console.log(persons)  
    
        return (
            <>
          <table className="tableBorder">

            <thead>
                <tr>
                  <th ></th>
                  <th className='blacken'></th>
                  <th colspan="11" className='chartLabel'>N F C</th>
                </tr>
                <tr >
                <th className='blacken'></th>
                <th ></th>
                <th >0</th>
                <th >1</th>
                <th >2</th>
                <th >3</th>
                <th >4</th>
                <th >5</th>
                <th >6</th>
                <th >7</th>
                <th >8</th>
                <th >9</th>
              </tr> 
            </thead>
              <tbody>
     
               {afcArray.map((row, i) => {

                if (i === 0) {
                                
                  return (
                    <tr key={i}>  
                    <th  rowspan="10">
                      <div className='chartLabel'>A</div>
                      <div className='chartLabel'>F</div>
                      <div className='chartLabel'>C</div>
                    </th>               
                    <th>{i}</th>
                    <BoxRow  afcPass={row} hoverPerson={props.hoverPerson} lockPerson={props.lockPerson} />
                    </tr>
                  )
                  }

                // if (i === 3) {
                 
                // return (
                //   <tr key={i}>  
                //   <th  rowspan="3">
                //     <div className='chartLabel'>A</div>
                //     <div className='chartLabel'>F</div>
                //     <div className='chartLabel'>C</div>
                //   </th>               
                //   <th>{i}</th>
                //   <BoxRow  afcPass={row} hoverPerson={props.hoverPerson} lockPerson={props.lockPerson} />
                //   </tr>
                // )
                // }

                // if (i === 6) {
                 
                //   return (
                //     <tr key={i}>  
                //     <th rowspan='4'></th>             
                //     <th>{i}</th>
                //     <BoxRow  afcPass={row} hoverPerson={props.hoverPerson} lockPerson={props.lockPerson} />
                //     </tr>
                //   )
                //   }

                

                else {
                  return (
                    <tr key={i}>  
                                 
                    <th>{i}</th>
                    <BoxRow  afcPass={row} hoverPerson={props.hoverPerson} lockPerson={props.lockPerson} />
                    </tr>
                  )
                }
              
              })} 
               
              </tbody>
          </table>
          <button onClick={handleClick}>
                Click Here
          </button>
    
      
          </>
        )
}

export default BoxesTable


// {persons.map((person, i) => {
             
//   return (
//     <tr>
//     <th>{i}</th>
//     <BoxRow key={i} passText={person} />
//     </tr>
//   )
 
// })}


//https://www.codingninjas.com/studio/library/table-in-react-js

{/* <table className="tableBorder">
<thead>
  <tr >
    <th></th>
    <th>0</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>0</th>
    <td id="Akram">Akram</td>
    <td>{persons[5].shortName}</td>
    <td>Male</td>
    <td>2019</td>
    <td>2019</td>
    <td>2019</td>
  </tr>
  <tr>
    <th>1</th>
    <td>Jason</td>
    <td>22</td>
    <td>Male</td>
    <td>2018</td>
    <td>squirl</td>
    <td>2018</td>
  </tr>
  <tr>
    <th>2</th>
    <td>Dave</td>
    <td></td>
    <td>Female</td>
    <td>2019</td>
    <td>Beets</td>
    <td>2019</td>
  </tr>
  <tr>
    <th>3</th>
    <td>Tom</td>
    <td>20</td>
    <td>Male</td>
    <td>Chip</td>
    <td>2019</td>
    <td>2019</td>
  </tr>
  <tr>
    <th>4</th>
    <td>Stark</td>
    <td>20</td>
    <td>Male</td>
    <td>2019</td>
    <td>Sally</td>
    <td>2019</td>
  </tr>
  <tr>
    <th>5</th>
    <td>Stark</td>
    <td>20</td>
    <td>Male</td>
    <td>2019</td>
    <td>2019</td>
    <td>Bill</td>
  </tr>
</tbody>
</table> */}