import { useCallback, useEffect } from "react";
import { deleteCountry } from "../../services/deleteCountry";
import type { Country } from "../../types/country";


function DeleteModal({
  open,
}: {
  open: {
    onDelete: boolean;
    setOnDelete: (arg0: boolean) => void;
    countryToDelete: Country;
  };
}) {
  const { onDelete, setOnDelete, countryToDelete } = open;
  console.log(onDelete);

  useEffect(() => {
    if (!onDelete) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [onDelete]);



  return (
    <>
      <div
        onClick={() => setOnDelete(!onDelete)}
        className="fixed flex justify-center items-center  bottom-0 w-full h-screen  bg-[#000000af] backdrop-blur-xs"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[35%] max-w-125 min-w-81.25 h-60 rounded-2xl flex flex-col justify-center gap-10 px-5 text-center"
        >
          <p>
            Are you sure you want to delete "სახელი"? This action cannot be
            undone.
          </p>
          <div className="flex  justify-center gap-5">
            <button
              onClick={async () => {
                await deleteCountry(
                  countryToDelete.id,
                  countryToDelete,
                  setOnDelete,
                );
                window.location.reload()
            
              }}
              className="bg-red-500 rounded cursor-pointer px-2 w-20"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setOnDelete(!onDelete);
              }}
              className="w-20 bg-gray-300 rounded cursor-pointer px-2"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
