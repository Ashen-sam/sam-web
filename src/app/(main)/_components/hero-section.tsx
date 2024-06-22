import Image from "next/image"
import heroImage from '../../../../public/images/people-and-technology.png'

const HeroSection = () => {
    return (
        <>
            <div className="bg-headercolor ">
                <div className=" lg:grid lg:grid-cols-2 items-center pt-20 sm:pt-24 gap-4 container text-white">
                    <div className="flex flex-col gap-4 items-start "  >
                        <div className="text-4xl sm:text-8xl font-bold ">WE DESIGN
                            & DEVELOP
                            THE BEST</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur quibusdam rerum ipsum a nemo incidunt itaque, nihil, perferendis aliquid aperiam aliquam facilis culpa vel. 
                        <button className="bg-white p-2 text-sm rounded border-none font-semibold  text-headercolor cursor-pointer hover:bg-slate-200">Hello There</button>
                    </div>
                    <Image alt="image" width={800} src={heroImage} />
                </div>
            </div>
        </>
    )
}

export default HeroSection
