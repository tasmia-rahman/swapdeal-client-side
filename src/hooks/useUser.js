import { useEffect, useState } from "react"

const useUser = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);

    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsSeller(data.isSeller);
                    setIsBuyer(data.isBuyer);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isSeller, isBuyer, isUserLoading];
}

export default useUser;