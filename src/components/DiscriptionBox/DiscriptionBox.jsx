import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = (props) => {
    const { product } = props
    return (
        <div className='discriptionbox'>
            <div className='discriptionbox-navigator'>
                <div className='discriptionbox-nav-box'>Discription</div>
                <div className='discriptionbox-nav-box fade'>Reviews ({product.reviews})</div>
            </div>
            <div className='discriptionbox-description'>
                <p>
                    Welcome to SHOPPER, your ultimate destination for fashion-forward
                    apparel and accessories! We offer a curated selection of high-quality
                    clothing for women, men, and kids, designed to elevate your style for
                    any occasion. From trendy blouses and chic jackets to vibrant hoodies
                    and comfortable sweatshirts, our collection is crafted with care to
                    ensure both comfort and style. Discover exclusive deals and seasonal
                    discounts that make shopping a breeze. Join our community of fashion
                    lovers and express your unique style with SHOPPER today!
                </p>
                <p>
                    At SHOPPER, we believe that fashion should be accessible to
                    everyone. Our diverse range features the latest trends, timeless
                    classics, and exclusive pieces that cater to every taste and
                    preference. Enjoy seamless shopping with user-friendly navigation,
                    secure payment options, and fast shipping directly to your door.
                </p>
            </div>
        </div>
    )
}
export default DiscriptionBox
