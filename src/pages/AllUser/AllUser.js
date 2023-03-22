import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AllUser = () => {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)
    const [search, setSearch] = useState('');
    const totalPage = parseInt(Math.ceil(count / size));
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/allUsers?page=${page}&size=${size}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setCount(data?.count);
                setUsers(data?.users)
            })
    }, [page, size, search, refresh])
    const searchRef = useRef();
    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    const handleBlock = (id) => {
        const apiUrl = `http://localhost:5000/users/${id}`;

        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ block: true })
        })
            .then(response => response.json())
            .then(data => {
                toast.success('User Blocked Success')
                setRefresh(!refresh)
            })
            .catch(error => toast.error(error.message));
    };

    return (
        <div>
            <div className="input-group pl-6 mt-5">
                <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered w-96" />
                <button onClick={handleSearch} className="btn btn-square btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Block/Unblock</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map(user =>
                                <tr key={user?._id}>
                                    <td><img src={user?.images[1]} alt='' className="w-16 h-16 rounded-full mb-4" /></td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.age}</td>
                                    <td>{user?.block ? <p className='text-red-700 font-semibold'>❌Blocked</p> : <input onClick={() => handleBlock(user?._id)} type="checkbox" className="checkbox checkbox-secondary" />}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='mb-4'>
                <p className='text-2xl mb-3'>Current page is {page + 1}</p>
                {
                    [...Array(totalPage).keys()].map(number => <button onClick={() => setPage(number)} key={number} className={`btn btn-sm mx-2 ${page === number ? 'btn-primary' : 'btn-secondary'}`}>{number + 1}</button>)
                }
            </div>
        </div>
    );
};

export default AllUser;