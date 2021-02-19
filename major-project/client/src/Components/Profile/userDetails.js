import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import HeroUnit from './Hero';
const USER_DB_URL = 'http://localhost:8000/dashboard/users/2';
// export default class UserFetch extends React.Component {
//     state={
//         users:[]
//     }
//     componentDidMount(){
//         axios.get(USER_DB_URL)
//             .then((res)=>{
//                 const users = res.data;
//                 console.log(res.data);
//                 this.setState( users );
                
//             });
//     };
//     render(){
//         return (<HeroUnit users={this.state.users}/>);
//     }
// }

export default function UserFetch(){
    const [data, setData] = useState({
        users:[],
        isFetching:false
    });
    
        
    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                setData(data=>({users: data.users, isFetching:true}));
                const response = await axios.get(USER_DB_URL);
                console.log(data)
                setData({users:response.users, isFetching:false});
                
                
            } catch (e) {
                console.log(e);
                setData(data=>({users: data.users, isFetching:false}));
            }
        };
        
        fetchUsers();
    }, []);

    return (
        <HeroUnit users={data.users}/>
    )
}