import React from 'react'

const Footer = ({ length }) => {
    // or you can destructre it using '{length}'
    return (
        <footer>
            {length === 0 ? "" : `${length} List ${length === 1 ? "item" : "items"}`}
        </footer>
    )
}

export default Footer
