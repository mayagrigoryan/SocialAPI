import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk, changePageAC } from '../../store/reducers/userReducers';
import './UsersPage.css'

import UserCard from '../../components/UserCard/UserCard';

function UsersPage() {
    const dispatch = useDispatch()
    const { users, isFetching, totalUserCount, pageUserCount, page } = useSelector((state) => state.usersPage)

    useEffect(() => {
        dispatch(getUsersThunk(page))
    }, [page])

    const pageBtn = Math.ceil(totalUserCount/pageUserCount)

    let pagesArray = []

    for(let i = 1; i <= pageBtn; i++) {
        pagesArray.push(i)
    }

    const changePage = (p) => {
        dispatch(changePageAC(p))
    }

    return (
        <div className='users_page'>
            <div>
                {pagesArray.map((p) => {
                    return <button onClick={() => changePage(p)} key={p}>{p}</button>
                })}
            </div>
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