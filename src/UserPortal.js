import { useParams } from "react-router-dom";

function UserPortal({users}){

    const id = useParams();
    
    return(
        <>
            <div>
                <h1>Weclcome UserPortal</h1>
                <table border="1" align="center">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserPortal;