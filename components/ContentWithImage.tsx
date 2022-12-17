// @ts-ignore
import {LightningBoltIcon} from "@heroicons/react/solid";
import Link from "next/link";
import Title from "./Title";
import Box from "./Box";
// @ts-ignore
const ContentWithImage = ({children}) => {
    return (
        <div className="grid grid-cols-2 gap-4 flex-col-reverse mt-4">
            <Box>
                <div className="flex h-full">
                    <div className="mt-auto mb-auto">

                        <Title>
                            {children}
                        </Title>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </Box>
            <Box>
                <div className="flex h-full justify-end">
                    <img src="/hero.jpeg" className="rounded-full object-cover h-80 w-80 object-left"/>
                </div>
            </Box>
        </div>
    )
}
export default ContentWithImage;