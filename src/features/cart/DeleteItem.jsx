import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({id}) => {
    const dispatch = useDispatch();
    
    function handleDelete(){
        dispatch(deleteItem(id));
    }

  return (
    <Button type="small" onClick={handleDelete}>Delete</Button>
  );
};

export default DeleteItem;