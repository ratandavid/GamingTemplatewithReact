import React from 'react'
import Communitybanner from '../Communitybanner/Communitybanner'
import CommunityTable from '../Community_table/CommunityTable'

function Community() {
    return (
        <>
        <Communitybanner bannername={'Our '} bannerspan={'Community'}/>
        <CommunityTable/>
        </>
    )
}

export default Community
