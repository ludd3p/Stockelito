import TopPartItem from "./TopPartItem";
const TopPart = () => {
    return (
        <div className="w-full items-center">
            <div className="grid text-center lg:w-full  lg:grid-cols-5 place-items-center">
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
            </div>
            <div className="grid text-center lg:w-full  lg:grid-cols-4 place-items-center px-20">
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
            </div>
            <div className="grid text-center lg:w-full lg:grid-cols-5 place-items-center">
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
                <TopPartItem />
            </div>
        </div>
    )

}
export default TopPart;