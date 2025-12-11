import React from 'react'

const SearchBox = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-box-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBox
