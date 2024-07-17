import { Link } from "react-router-dom"
import MultiSelect from "../../components/Forms/MultiSelect"
import SelectGroupOne from "../../components/Forms/SelectGroup/SelectGroupOne"

export default function AddOptionalJourney() {
    return (
        <form>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Add New optional journey
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        destination in arabic
                        </label>
                        <input
                            type="text"
                            placeholder="arabic destination "
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        destination in english
                        </label>
                        <input
                            type="text"
                            placeholder="english destination "
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        expiry Date
                        </label>
                        <input
                            type="date"
                            placeholder="expiry Date "
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        fly date
                        </label>
                        <input
                            type="date"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        fly time
                        </label>
                        <input
                            type="text"
                            placeholder="add time "
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        Number of flight hours
                        </label>
                        <input
                            type="text"
                            placeholder="add number"
                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        price
                        </label>
                        <input
                            type="text"
                            placeholder="price"
                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                        available_seats
                        </label>
                        <input
                            type="text"
                            placeholder="available seats"
                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                        />
                    </div>
                    
                    <SelectGroupOne name="continents" options={['test1','test2','test3']} />
                    <SelectGroupOne name="season" options={['test1','test2','test3']} />
                    <SelectGroupOne name="section" options={['test1','test2','test3']} />
                    <SelectGroupOne name="type ticket" options={['test1','test2','test3']} />

                    <div>
                <label className="mb-3 block text-black dark:text-white">
                  select photos
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
              add
            </Link>
            </div>

        </form>
    )
}
