import React, {useState} from 'react';
import '../css/Subscribe.css';

export default function SubscribeForm() {

    const [email, setEmail] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');


    return (
        <div className="subscription-from container p-5">
            <h2 className="lg"> Subscribe </h2>
            <p> Stay up to date on all the upcoming events! </p>
            <br/>

            <form action="https://blockchain-summer.us6.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="9284cd7e402767c6a37485de0"/>
                <input type="hidden" name="id" value="367667f3f8"/>
                
                <div id="mergeTable" className="mergeTable">
                    <div className="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
                        <label for="MERGE0">Email Address <span className="req asterisk">*</span></label>
                        <div className="field-group">
                            <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
                        <label for="MERGE1">First Name</label>
                        <div className="field-group">
                            <input type="text" name="MERGE1" id="MERGE1" size="25" 
                                    value={fName}
                                    onChange={(e) => setFName(e.target.value)}
                            />
                        </div>  
                    </div>         
                        
                    <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
                        <label for="MERGE2">Last Name</label>
                        <div className="field-group">
                            <input type="text" name="MERGE2" id="MERGE2" size="25"
                                    value={lName}
                                    onChange={(e) => setLName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <br/>
                
                <div className="submit_container clear">
                    <input type="submit" className="btn" name="submit" value="Subscribe"/>
                </div>
                
                <input type="hidden" name="ht" value="d42d76b0e7705eb15e4514e682a4be323305b890:MTYyMjUyNzAzMy42MzI5"/>
                <input type="hidden" name="mc_signupsource" value="hosted"/>
        </form>
    </div>
     );
}