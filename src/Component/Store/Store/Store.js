import React from 'react'
import Storebanner from '../Storebanner/Storebanner'
import Storecards from '../Storecards/Storecards'

function Store() {
    return (
        <>
        <Storebanner bannername={'ACCESSORIES '} bannerspan={'Store'}/>
        <Storecards/>
        </>
    )
}

export default Store
