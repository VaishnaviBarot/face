import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Home = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    let history = useNavigate();
    const { isAuthenticated, logout } = useAuth();


    useEffect(() => {
        if (isAuthenticated) {
            fetchUsers();
        }
        else {
            history('/login');
        }
        // eslint-disable-next-line
    }, []);

const fetchUsers = () => {
    fetch(`https://randomuser.me/api?page=${page}&results=10`)
        .then(response => response.json())
        .then(data => setUsers([...users, ...data.results]));
    setPage(page + 1);
};

const handleSubmit = e => {
    e.preventDefault();
      logout();
      history('/login');
  };

  const showCards = () => {
    return (
      <>
           <div className='container'>
        <div className='container p-3 d-flex flex-row-reverse'>
            <form onSubmit={handleSubmit}> <button className ='btn btn-primary' type="submit" >Log Out</button></form>
       
        </div>
        <InfiniteScroll
            dataLength={users.length}
            next={fetchUsers}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {users.map(user => (
                <div className="container d-flex p-3" key={user.id.value}>
                    <h4 className='p-3 container'>{user.name.first} {user.name.last}</h4>
                    <img className="rounded-circle p-3" src={user.picture.medium} alt={user.name.first} />
                </div>
            ))}
        </InfiniteScroll>
    </div>
      </>
    )
  }
  const showSkeleton = () => {
    return (
      <>
        {Array(20)
          .fill()
          .map((users, index) => {
            return (
              <div key={index} className="p-3">
                <div className="bg-light card w-100 h-150 p-3">
                  <Skeleton height={100} />
                </div>
              </div>
            )
          })}
      </>
    )
  }

return (
    // <div className='container'>
    //     <div className='container p-3 d-flex flex-row-reverse'>
    //         <form onSubmit={handleSubmit}> <button className ='btn btn-primary' type="submit" >Log Out</button></form>
       
    //     </div>
    //     <InfiniteScroll
    //         dataLength={users.length}
    //         next={fetchUsers}
    //         hasMore={true}
    //         loader={<h4>Loading...</h4>}
    //     >
    //         {users.map(user => (
    //             <div className="container d-flex p-3" key={user.id.value}>
    //                 <h4 className='p-3 container'>{user.name.first} {user.name.last}</h4>
    //                 <img className="rounded-circle p-3" src={user.picture.medium} alt={user.name.first} />
    //             </div>
    //         ))}
    //     </InfiniteScroll>
    // </div>


    <div>
      <div className="container">
        {users.length > 0 ? showCards() : showSkeleton()}
      </div>
    </div>




);
};
export default Home;
