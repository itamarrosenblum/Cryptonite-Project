import './LiveReports.css';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const LiveReports = () => {
    const [reportList, setReportList] = useState([]);
    const favArr = useSelector(state => state.favArr);
    
    useEffect(() => {
        if (favArr.length > 0) { // Check if favArr isn't empty
            setReportList(favArr);
        }
    }, [])

    return(
        <section className="reports-section">
            <h2>List Reports</h2>
            {favArr.length === 0 ? <h3>Your report list is empty</h3> : <ol>
                {reportList.map(item => {
                    return(
                        <li key={item}>{item.toUpperCase()}</li>
                    );
                })}
             </ol>}
        </section>
    );
}
export default LiveReports;