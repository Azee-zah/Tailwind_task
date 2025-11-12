import { useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav>
            <div>
                <div>
                    {/* for logo */}
                    <div className="flex gap-2">
                        <div>lM</div>
                        <span></span>

                    </div>

                </div>

            </div>

        </nav>
        
    )
}
export default MobileMenu