import React, { Children } from 'react'

export const ModalSearch = ({ children }) => {
    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}
