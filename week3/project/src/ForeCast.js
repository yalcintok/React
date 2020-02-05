import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from "react-router-dom";

export default function ForeCast() {
    const {cityID} = useParams();
    const foreCast = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric&id=${cityID}`;
    const [dailyInfo, setDailyInfo] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        setError(false)
        fetch(foreCast)
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                throw new Error()
            })
            .then(data => {
                setDailyInfo(data);
                console.log(data)
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            })
    }, [cityID])
    return (
        <div>
            <Link to='/'>Go Back!</Link>

            {hasError && <p>Something went wrong</p>}
            {
            isLoading ? <p>...loading</p> : 

                <AreaChart width={730} height={250} data={dailyInfo.list}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey='dt_txt' />
                <YAxis dataKey='main.temp'/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="main.temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            }
            
        </div>
    )
}
