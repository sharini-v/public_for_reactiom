import React from "react";

function Dev (){
    return(
        <>
        <div style={{justifyContent: 'space-between',display:'flex',width:'1200px',padding:'30px',marginLeft:'180px',marginTop:'-2px'}}>
            <div style={{flex:'1',border: '1px solid #ccc',padding:'3px'}}>
                <h1>Software Team Extension</h1>
                <div>
                    <h3>Developer: 1-5</h3>
                    <p>Delivery Time: 0-2 months</p>
                    <p>A partially managed team that works within your processes. Best for providing additional capacity or competencies to the existing teams.</p>
                </div>
            </div>
            <div style={{flex:'1',border: '1px solid #ccc',padding:'3px'}}>
                <h1>Dedicated Software Team</h1>
                <div>
                    <h3>Developer: 5-20</h3>
                    <p>Delivery Time: 1-4 months</p>
                    <p>
Fully managed, cross-functional team that works within our processes on goals set by you. Does not require IT personnel on your side.</p>
                </div>
            </div>
            <div style={{flex:'1',border: '1px solid #ccc',padding:'3px'}}>
                <h1>IT Development Hub</h1>
                <div>
                    <h3>Developer: 5-20</h3>
                    <p>Delivery Time: 1-4 months</p>
                    <p>
Fully managed, cross-functional team that works within our processes on goals set by you. Does not require IT personnel on your side.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dev;