import React from 'react'
import './table.css'

function CommunityTable() {
    return (
        <div className="container">
            <div className="row">
                <div className='col-xl-8 col-lg-8 col-sm-6'>
                    <div className='table-responsive-xl'>
                        <table className='table mt-0'>
                        <thead>
                            <tr>
                                <th scope="col">mark all as soon</th>
                                <th scope="col">VOICES</th>
                                <th scope="col">POSTS</th>
                                <th scope="col">See</th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr className="community-post-type">
                                <th><span>Game Concept</span></th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="community-post-wrap">
                                        <div className="community-post-content">
                                            <a href="#">Electronic game that involves</a>
                                            <span> by <a href="#">Tanvir snap</a> Yesterday 12 : 19</span>
                                        </div>
                                        <div className="community-post-tag">
                                            <a href="#">@All</a>
                                        </div>
                                    </div>
                                </th>
                                <td>3</td>
                                <td>4</td>
                                <td className="community-bell"><a href="#"><i className="far fa-bell"></i></a></td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <div className="community-post-wrap">
                                        <div className="community-post-content">
                                            <a href="#">Electronic game that involves</a>
                                            <span> by <a href="#">Tanvir snap</a> Yesterday 12 : 19</span>
                                        </div>
                                        <div className="community-post-tag">
                                            <a href="#">@All</a>
                                        </div>
                                    </div>
                                </th>
                                <td>3</td>
                                <td>4</td>
                                <td className="community-bell"><a href="#"><i className="far fa-bell"></i></a></td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <div className="community-post-wrap">
                                        <div className="community-post-content">
                                            <a href="#">Electronic game that involves</a>
                                            <span> by <a href="#">Tanvir snap</a> Yesterday 12 : 19</span>
                                        </div>
                                        <div className="community-post-tag">
                                            <a href="#">@All</a>
                                        </div>
                                    </div>
                                </th>
                                <td>3</td>
                                <td>4</td>
                                <td className="community-bell"><a href="#"><i className="far fa-bell"></i></a></td>
                            </tr>
                        </tbody>
                       </table>
                       
                    
                    </div>
                    
                </div>

                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                    <aside className="community-sidebar">
                        <div className="widget community-widget mb-30">
                            <div className="community-widget-title mb-25">
                                <h5>share public</h5>
                            </div>
                            <div className="community-sidebar-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i>Share With Facebook</a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i>Share With Twitter</a></li>
                                            <li><a className="pinterest" href="#"><i className="fab fa-pinterest-p"></i>Share With Pinterest</a></li>
                                        </ul>
                                    </div>
                        </div>

                        
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default CommunityTable
