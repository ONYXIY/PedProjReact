import React from "react";
import styles from './Users.module.css';
import usersPhoto from '../../assets/imges/image.png';
import { NavLink } from "react-router-dom";



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })};

        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                            className={styles.userPhoto} alt='avatar' />
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.unfollow(true, u.id)
                            }}>unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(true, u.id)
                            }}>follow</button>
                    };
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
        )};
    </div>
};

export default Users;