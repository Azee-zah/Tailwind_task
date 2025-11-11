
function ProfileCard() {
    return(
        <div className="mx-auto p-10 max-w-sm bg-white border-1 border-green-600 rounded-md">
            <header className="bg-gradient-to-r from-green-700 via-white to-green-700 text-center p-2 rounded-sm">Profile-Card</header>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zCU8jx0sFc2c439W4EyBgHeHG0faZRpiTg&s" alt="" className="border-2 h-30 w-30 rounded-full text-green-700 mt-4 mx-auto" />

            <div className="flex justify-around text-center mt-4 font-semibold">
                <p>Name: Azeezat</p>
                <p>Title: AI Developer</p>
                <p>Location: Abeokuta</p>
            </div>

             <div className="flex justify-around mt-4 font-medium">
                <p>Followers: 600</p>
                <p>Posts: 200</p>
                <p>Likes: 800</p>
            </div>

            <div className="mt-4 tracking-wide leading-relaxed p-4 italic">An AI Developer is the oven. Also passionate about research</div>

            <div className="text-center">
                <button className="bg-green-700 hover:bg-green-300 p-2 px-8 rounded-xl text-white font-semibold">Follow</button>
            </div>
        </div>

    )
}

export default ProfileCard