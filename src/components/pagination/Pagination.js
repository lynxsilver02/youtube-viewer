import React from 'react'
import './Pagination.style.css'

const Pagination = ({ cPerPage, pags, currentPage }) => {
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
                        <li key={number} className={number == currentPage ? "currentPage" : ""}>
                            <a href="#" onClick={()=> pags(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Pagination; 