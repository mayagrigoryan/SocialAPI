import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocialAPI } from '../../api/api';
import { getUsersAC } from '../../store/reducers/userReducers';
import './UsersPage.css'

function UsersPage() {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.usersPage)

    useEffect(() => {
        SocialAPI.getUsers()
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
            })
    }, [])

    console.log(users);

    return (
        <div className='users_page'>
            {
                users.map((user) => {
                    return <li key={user.id}>
                        <h2>{user.name}</h2>
                    </li>
                })
            }
        </div>
    )
}

export default UsersPage