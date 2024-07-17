import { Link } from "react-router-dom";

export default function AddTripSchedule() {
  return (
    <form>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add New Trip Schedule
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          {/* Destination in Arabic */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Destination in Arabic
            </label>
            <input
              type="text"
              placeholder="Arabic destination"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Destination in English */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Destination in English
            </label>
            <input
              type="text"
              placeholder="English destination"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Fly Date */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Fly Date
            </label>
            <input
              type="date"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Fly Time */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Fly Time
            </label>
            <input
              type="time"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Price */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Price
            </label>
            <input
              type="text"
              placeholder="Price"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>
          
          {/* First Day */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              First Day Description
            </label>
            <textarea
              placeholder="First day description"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <label className="mb-3 block text-black dark:text-white mt-3">
              First Day Photo
            </label>
            <input
              type="file"
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Second Day */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Second Day Description
            </label>
            <textarea
              placeholder="Second day description"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <label className="mb-3 block text-black dark:text-white mt-3">
              Second Day Photo
            </label>
            <input
              type="file"
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
          </div>
          
          {/* Third Day */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Third Day Description
            </label>
            <textarea
              placeholder="Third day description"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <label className="mb-3 block text-black dark:text-white mt-3">
              Third Day Photo
            </label>
            <input
              type="file"
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
          </div>
          
        </div>
        <Link
          to="#"
          className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add
        </Link>
      </div>
    </form>
  );
}
