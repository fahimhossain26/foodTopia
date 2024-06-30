import React, { useEffect, useState } from 'react';
import SerctionTitle from '../../../component/SerctionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testomonial = () => {

    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className='my-10'>
            <SerctionTitle
                subHeading={'what are client say'}
                heading={'Testomonial'}>

            </SerctionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=' flex flex-col items-center m-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testomonial;