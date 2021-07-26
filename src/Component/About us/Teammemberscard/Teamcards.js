import React from 'react'
import Teamcard from'./Teamcard'
import Teammember01 from '../../../Images/team_member02.jpg'
import Teammember02 from '../../../Images/team_member01.jpg'
import Teammember03 from '../../../Images/team_member03.jpg'
import Teammember04 from '../../../Images/team_member04.jpg'


function Teamcards() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-xl-3 col-sm-3 col-6 ">
            <Teamcard src={Teammember01} name={'TOMAS ALEMAN'} platform={'Marketing CEO'}/>
            </div>
            
            <div className="col-xl-3 col-sm-3 col-6 ">
            <Teamcard src={Teammember02} name={'JAMES WISEMAN'} platform={'Marketing CEO'}/>
            </div>

            <div className="col-xl-3 col-sm-3 col-6 ">
            <Teamcard src={Teammember03} name={'EMILY WATSON'} platform={'Head of Iaea'}/>
            </div>

            <div className="col-xl-3 col-sm-3 col-6 ">
            <Teamcard src={Teammember04} name={'ALEXANDRA PAOL'} platform={'Web Developer'}/>
            </div>
            </div>
        </div>    
    )
}

export default Teamcards
