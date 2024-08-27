import { MdDeleteForever } from "react-icons/md";
import { useAuthUser } from "../authentication/UserContext";
export default function DeleteItem({ id }) {
  const { DeleteItemFromList } = useAuthUser();
  return (
    <button
      onClick={() => {
        DeleteItemFromList(id);
        console.log(id)
      }}
      type="button"
      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded text-red-500 hover:bg-gray-50 px-3 py-2"
    >
      Remove
      <span className="text-xl">
        <MdDeleteForever />
      </span>
    </button>
  );
}
