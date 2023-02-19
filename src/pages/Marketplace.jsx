import React, { useEffect, useRef } from 'react';


import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeroMarketplace from '../components/hero/HeroMarketplace';
import CardMarketplaceGame from '../components/cards/CardMarketplaceGame';

import useDocumentTitle from '../components/useDocumentTitle';
import MenuCategoriesMarket from '../elements/MenuCategoriesMarket';
import { Link, useHistory } from 'react-router-dom';

const CardItems = [
    {
        avatar_img1: '1',
        avatar_img2: '2',
        likes: '1.2',
        img: '1',
        title: 'Dragon 1 modern art',
        amount: '3000',
        stock: '4',
    },
    {
        avatar_img1: '3',
        avatar_img2: '4',
        likes: '13.2',
        img: '2',
        title: 'Dragon 2 modern art',
        amount: '3000',
        stock: '12',
    },
    {
        avatar_img1: '5',
        avatar_img2: '6',
        likes: '1.2',
        img: '3',
        title: 'Dragon 3 modern art',
        amount: '3000',
        stock: '6',
    },
    {
        avatar_img1: '1',
        avatar_img2: '7',
        likes: '4.1',
        img: '4',
        title: 'Dragon 4 modern art',
        amount: '5000',
        stock: '34',
    },
    {
        avatar_img1: '8',
        avatar_img2: '9',
        likes: '6.4',
        img: '5',
        title: 'Dragon 5 modern art',
        amount: '1450',
        stock: '7',
    },
    {
        avatar_img1: '10',
        avatar_img2: '11',
        likes: '13.2',
        img: '6',
        title: 'Dragon 6 modern art',
        amount: '5500',
        stock: '2',
    },
    {
        avatar_img1: '12',
        avatar_img2: '5',
        likes: '1.6',
        img: '7',
        title: 'Dragon 7 modern art',
        amount: '3000',
        stock: '34',
    },
    {
        avatar_img1: '13',
        avatar_img2: '14',
        likes: '11.5',
        img: '8',
        title: 'Dragon 8 modern art',
        amount: '2000',
        stock: '9',
    },
];

const Marketplace = () => {
    useDocumentTitle('Marketplace');

    const history = useHistory();


    useEffect(() => {
        //mounted.current = true;
        // return () => { mounted.current = false; };
        // ummountButtonPayment();
    }, []);

    const goToPay = (item) => {
        console.log('executed', item);
        history.push('/pay', { item: item })
    }

    return (
        <div>
            <Header />
            <HeroMarketplace />
            <div className="d-flex justify-content-center">
                <div className="w-100">
                    <div className="container">
                        <div className="section mt-100">
                            <div className="section__head">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="section__title"> A la venta</h2>

                                </div>
                            </div>
                            <div className="row mb-30_reset">
                                {CardItems.map((val, i) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
                                        <div className="card__item four">
                                            <div className="card_body space-y-10">
                                                {/* =============== */}
                                                <div className="creators space-x-10">
                                                    <div className="avatars space-x-3">
                                                        <div to="profile">
                                                        </div>
                                                        <div to="profile">
                                                            <p className="avatars_name txt_xs"></p>
                                                        </div>
                                                    </div>
                                                    <div className="avatars space-x-3">
                                                        <div to="profile">
                                                        </div>
                                                        <div to="profile">
                                                            <p className="avatars_name txt_xs"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card_head">
                                                    <div to="Item-details">
                                                        <img
                                                            src={`img/items/gaming/${val.img}.png`}
                                                            alt="nftimage"
                                                        />
                                                    </div>

                                                </div>
                                                {/* =============== */}
                                                <h6 className="card_title">{val.title}</h6>
                                                <div className="card_footer d-block space-y-10">
                                                    <div className="card_footer justify-content-between">
                                                        <div className="creators">
                                                        </div>
                                                        <div to="#">
                                                            <p className="txt_sm">
                                                                Precio:
                                                                <span
                                                                    className="color_green
                                                txt_sm">
                                                                    {val.amount} CRC
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hr" />
                                                    <div
                                                        className="d-flex
								align-items-center
								space-x-10
								justify-content-between">
                                                        <div
                                                            className="d-flex align-items-center
									space-x-5">
                                                        </div>

                                                        <button className="btn btn-sm btn-primary" onClick={() => goToPay(val)}>
                                                            Comprar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Marketplace;
