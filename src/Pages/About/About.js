import React from 'react'
import Header from '../../Components/Layout/Header'

const About = () => {
    return (
        <div>
            <Header/>

            <div class="container-fluid" id="about-section">
                <div class="section-text">
                    <h1 class="section-title text-center">About Code Queen</h1>
                    <div class="row">
                        <div class="col-md-8 px-4">
                            <p>We have partnered with The Innovation Village (a local start up hub) to bring a high quality course training young Ugandan women in coding, equipping them with the skills to find jobs in software development and STEM careers.
                                The course not only focuses on developing hard coding skills (in collaboration with local businesses), but also developing other attributes such as positive mind set and work readiness. It ends with a hackathon where students solve real
                                time challenges for local businesses leading. Successful graduates are offered internships, scholarships and other linking opportunities through our ecosystem of partners.
                                    Code Queen has successfully run 3 cohorts and graduated 70 students since the launch in 2019.
                                    </p>
                                    <div class="row about-mini">
                                        <div class="col-md-6 col-sm-6 cohort-picks">
                                            <div class="cohort-picks-fa"> <i class="far fa-newspaper icon"/></div>
                                            <div>
                                                <h7 class="orange-text">CAREER READINESS</h7>
                                                <p>CV writing, interview techniques, Linkedin training, freelance workshop, cross cultural teams, remote working.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 cohort-picks">
                                            <div class="cohort-picks-fa"> <i class="far fa-lightbulb icon"/> </div>
                                            <div>
                                                <h7 class="orange-text">MINDSET TRAINING</h7>
                                                <p>Goal setting, habits for success, career planning, business planning, a 'learning to learn', mentality, pitching skills, creating a culture of 'giving back'.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 cohort-picks">
                                            <div class="cohort-picks-fa"> <i class="far fa-keyboard icon"/></div>
                                            <div>
                                                <h7 class="orange-text">INDUSTRY INPUT</h7>
                                                <p>Mentorship, hackathons with industry real-life problems and speakers (selection of industry, further education and entrepreneurship).</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 cohort-picks">
                                            <div class="cohort-picks-fa"> <i class="fas fa-laptop-code icon"/> </div>
                                            <div>
                                                <h7 class="orange-text">CODING SKILLS</h7>
                            
                                            <p>HTML, CSS, JavaScript, Bootstrap, Node.js, database management, Express.js, MongoDB</p>
                                        </div>
                                           
                                    <div/>
                        </div>
                    </div>
                </div>
                                

            </div>
        </div>
        </div>
        </div>
       
    )
}

export default About
