import React from 'react'
import './Pagin.css'


const Pagin = ({cPerPage, pags}) => {
    const pageNum = []
    const total = 50;
    
    for (let i = 1; i <= Math.ceil(total/cPerPage); i++){
        pageNum.push(i)
    }
    return (
        <div className = "paginNav">
            <ul className='hr'>
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
