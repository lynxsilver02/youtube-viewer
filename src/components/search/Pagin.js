import React from 'react'

const Pagin = ({cPerPage, pags}) => {
    const pageNum = []
    const total = 50;
    
    for (let i = 1; i <= Math.ceil(total/cPerPage); i++){
        pageNum.push(i)
    }
    return (
        <div>
            <ul>
                {
                    pageNum.map(number => (
                        <li key={number}>
                            <a href="#" onClick={()=> pags(number)}>{number}</a>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Pagin; 
