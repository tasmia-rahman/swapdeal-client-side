import toast from "react-hot-toast";

export const handleUserDelete = (id, refetch) => {
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast('Deleted successfully');
            }
        })
}