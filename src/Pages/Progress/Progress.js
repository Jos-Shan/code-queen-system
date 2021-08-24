import React from 'react'

const Progress = () => {
    return (
        <div>
            <div class="logo"><img src="images/logo.png" alt="Code Queen logo"/></div>
            <div className="cover">
            <h2 className="title">Progress Sheet</h2>
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th rowSpan="2">Name</th>
                            <th colSpan="3">Assessments</th>
                        </tr>
                        <th>Html</th>
                        <th>CSS</th>
                        <th>JavaScript</th>


                    </thead>
                    <tbody>
                        <tr>
                            <td>Akite Joyce Thereza</td>
                            <td>75</td>
                            <td>88</td>
                            <td>55</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        </div>


    )
}

export default Progress
