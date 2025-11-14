
function Blog() {
    return(
        <div className="mx-auto max-w-xl p-4 bg-gray-200 my-10">
            <div className="bg-white shadow-lg p-4">
                <div className="flex justify-between">
                    <p className="text-xs">⏱️ 20 min read</p>

                    <p className="text-xs">November 14</p>
                </div>

                <h2 className="my-4 font-bold text-3xl p-2 ">Blogging for the Heart: Your Cardiovascular System is all that!</h2>

                <img src="https://ourworld.wales/media/qaijkox1/istock-530199842-1.jpg?width=1263&height=650&mode=crop" alt="diagram of cvs"/>

                <div className="flex flex-col md:grid grid-cols-3 gap-6 my-4 bg-gray-200 p-2 rounded-md  ">
                    <div className="md:col-span-2 p-2 text-lg">
                        <p>The Heart is the sole organ responsible for pumping blood throughout the body, to deliver oxygen and essential nutrients to every cell. </p>
                        <p>It helps remove waste products from metabolism, such as carbon dioxide, ensuring other organs in the body function properly.</p>
                        <p>
                            If the heart stops functioning, the body begins to shut down- the heart is all that!
                        </p>
                    </div>

                    <div className="md:bg-white p-2 rounded-md flex flex-col h-50 items-center">
                        <h2 className="font-bold text-2xl">Coming Soon!</h2>

                        <div className="p-2 rounded-lg font-medium">The Kidney in its full glory!</div>
                    </div>
                </div>

                <p className="italic flex justify-end">Written by Olamide Akinleye</p>



            </div>

        </div>
    )
}

export default Blog