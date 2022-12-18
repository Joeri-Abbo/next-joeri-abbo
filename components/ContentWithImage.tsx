import Title from "./Title";
import Box from "./Box";
import {TypeAnimation} from "react-type-animation";
import Button from "./Button";
import Socials from "./Socials";
import Col2 from "./Col2";
import Image from "next/image";
// @ts-ignore
const ContentWithImage = (props: Props) => {
    return (
        <Col2>
            <Box>
                <div className="flex h-full">
                    <div className="mt-auto mb-auto">
                        <div>
                            <Title>
                                <TypeAnimation
                                    // Same String at the start will only be typed once, initially
                                    sequence={[
                                        'Ik ben een Backend developer',
                                        2000,
                                        'Ik ben een Frontend developer',
                                        2000,
                                        'Ik ben een Fullstack developer',
                                        2000,
                                        'Ik ben een Support medewerker',
                                        2000,
                                        'Ik ben een Devops engineer',
                                        2000,
                                        'Ik ben een Cloud architect',
                                        2000,
                                        'Ik ben een Devops architect',
                                        2000,
                                    ]}
                                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                    style={{fontSize: '2em', width: '100%'}}
                                    wrapper="span" // Animation will be rendered as a <span>
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />
                            </Title>
                            <div>
                                {props.children}
                            </div>
                        </div>
                        <Button>
                            Hello
                        </Button>
                        <Socials/>
                    </div>
                </div>
            </Box>
            <Box>
                <div className="flex h-full justify-end">
                    <Image src="/hero.jpeg" className="rounded-full object-cover h-80 w-80 object-left" alt="Me" width="600" height="600"/>
                </div>
            </Box>
        </Col2>
    )
}
export default ContentWithImage;