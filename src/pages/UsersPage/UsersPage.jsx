import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from '../../store/reducers/userReducers';
import './UsersPage.css'

import UserCard from '../../components/UserCard/UserCard';

function UsersPage() {
    const dispatch = useDispatch()
    const { users, isFetching } = useSelector((state) => state.usersPage)

    useEffect(() => {
        dispatch(getUsersThunk())
    }, [])

    return (
        <div className='users_page'>
            <div className='users-cards'>
                {
                    isFetching
                    ? <h1>Loading...</h1> 
                    :
                    users.map((user) => {
                        return <UserCard user={user} key={user.id} />
                    })
                }
            </div>
        </div>
    )
}

export default UsersPage