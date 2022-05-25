import { useEffect, useState } from 'react'

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(user)
    useEffect(() => {
        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        const currentEmail = { email: email, displayName: displayName };
        console.log(email);
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentEmail)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('from usetoken', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user])
    return [token]
}

export default useToken