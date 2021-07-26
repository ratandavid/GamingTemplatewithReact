import React from 'react'
import Innerbanner from '../Aboutbanner/Aboutbanner'
import Teamheading from '../Team_members/Heading/Teamheading'
import Teamcards from '../Teammemberscard/Teamcards'

function About() {
    return (
        <>
            <Innerbanner bannername={'About'} bannerspan={' Story'}/>
            <Teamheading heading='OUR TEAM' headspan='MEMBER' showBody headpara='Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic' />
            <Teamcards/>
        </>
    )
}

export default About
