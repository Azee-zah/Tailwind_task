
function NewsCard() {
    return(
        <div className=" max-w-lg mx-auto p-20 border-2 border-white my-10 rounded-md shadow-lg">
            <div className="-mt-10 p-2 border-t-2 border-b-2">
                <h1 className="text-center text-4xl font-medium ">Nigerian News</h1>
                <p className="tracking-wide">The most important news around the world</p>
            </div>

            <div className=" flex mt-2 border-b-1 justify-between -mb-4 text-sm">
                <span>Politics</span>
                <span>Tuesday, 11th November 2025</span>
            </div>

            <div className="m-4 p-2">
                <h3 className="text-center font-medium text-lg mb-2">Good News for Travel Industry</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSw6fhFaHDMWZ2BGaKZEKFLlOo0UH_fubilw&s" alt="" />

               
                <p className="leading-relaxed mt-6" >Staring today, there is no need to apply for national and regional visa. People can now travel around and stay for unlimited period of time... <span className="italic ml-2 font-medium">Read more</span></p>
            </div>

            <div className="flex justify-between items-center">
                <p className="text-red-400 text-xs font-medium">⏱️ 5 mins ago</p>
                <p className="text-end italic">written by Olamide Akinleye</p>
            </div>

        </div>
    )
}

export default NewsCard