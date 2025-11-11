
function ColorPalette() {
    return(
        <div>
            <div className="flex shadow-lg h-64 w-96 mx-auto my-10">
                <div className="flex-1 bg-green-700"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-green-700"></div>
            </div>

            <div className="grid">
                <p className="bg-green-950 w-50 h-50 b rounded-full"></p>

                <p className="bg-green-900 w-50 h-50 b rounded-full"></p>

                <p className="bg-green-850 w-50 h-50 b rounded-full"></p>
                
                <p className="bg-green-800 w-50 h-50 b rounded-full"></p>

            </div>
        </div>
    )
}
export default ColorPalette