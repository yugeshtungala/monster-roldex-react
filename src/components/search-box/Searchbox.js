import React from 'react'
import '../search-box/Searchbox.css'

function Searchbox({placeholder,handleChange}) {
    return (
        <div className="searchField">
            <input type="search" placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}

export default Searchbox
