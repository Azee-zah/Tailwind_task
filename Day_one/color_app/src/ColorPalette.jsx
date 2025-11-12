
function ColorPalette() {
    return(
        <div>
            <div className="flex shadow-lg h-64 w-96 mx-auto my-10">
                <div className="flex-1 bg-green-700"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-green-700"></div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div>
                    <p className="bg-green-950 w-50 h-50 rounded-lg"></p>
                    <p className="text-green-950">Color name: Green-950</p>
                </div>

                <div>
                    <p className="bg-green-900 w-50 h-50 rounded-lg"></p>
                    <p className="text-green-900">Color name: Green-900</p>
                </div>

                <div>
                    <p className="bg-green-800 w-50 h-50 rounded-lg"></p>
                    <p className="text-green-800">Color name: Green-800</p>
                </div>
            </div>
        </div>
    )
}
export default ColorPalette