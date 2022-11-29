import toast from "react-hot-toast";

export const handleUserDelete = (id, refetch) => {
    fetch(`https://swapdeal-server.vercel.app/users/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast('Deleted successfully');
            }
        })
}