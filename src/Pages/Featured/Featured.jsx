import SerctionTitle from "../../component/SerctionTitle";
import feturedimg from '../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed mb-10 text-white   pt-8 my-20 ">
            <SerctionTitle
            heading={'Featured Item'} 
            subHeading={'Check It Out'}>

            </SerctionTitle>
            <div className="md:flex gap-5 justify-center bg-slate-500 bg-opacity-20 items-center py-12 pb-20 px-20">
            <div>
                <img src={feturedimg} alt="" />
            </div>
            <div>
                <p>Aug,2029</p>
                <p className="uppercase ">Where can i get some</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptas quidem sunt repellat beatae, vero consequuntur quibusdam laudantium dolor nulla quia? Assumenda iste doloribus vel natus temporibus, culpa sapiente hic. Fugit iusto magnam consectetur adipisci accusantium optio omnis quidem in minima! Reprehenderit perspiciatis dolores sed error fuga, tenetur iure quasi.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-5">Buy now</button>
            </div>
            
            </div>
        </div>
    );
};

export default Featured;