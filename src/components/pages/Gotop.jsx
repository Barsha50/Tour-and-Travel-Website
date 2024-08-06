import React from 'react'

const Gotop = () => {
    const gotobtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <>
            <div className='go'>

                <div className='top-btn' onClick={gotobtn} >
                <i class="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        </>
    )
}



export default Gotop