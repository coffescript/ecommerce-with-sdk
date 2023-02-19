import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Countdown from 'react-countdown';
import useDocumentTitle from '../components/useDocumentTitle';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// Random component
const Completionist = () => <span>auction ending soon now!</span>;
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {hours} : {minutes} : {seconds}
            </span>
        );
    }
};
const ItemDetails = () => {
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    const [isShare, setShare] = useState(false);

    useDocumentTitle('Item Details');

    const location = useLocation();

    const name = location.state.item.title;
    const amount = location.state.item.amount;

    useEffect(() => {
        console.log('location', location.state.item);
        // getAuthToken();
        initFunction();

        const mongepay = document.querySelector('.makePayment');
        mongepay.classList.add('new-position')
        // console.log('mongepay',);
    }, []);


    const mounted = useRef(false);

    useEffect(() => {
        return () => {
            const el = document.querySelector('.makePayment');
            if (el) {
                el.parentElement.removeChild(el);
            }
        };
    }, []);


    const toggleShare = () => {
        setShare(!isShare);
    };
    const [isMore, setMore] = useState(false);

    const toggleMore = () => {
        setMore(!isMore);
    };

    const initFunction = async () => {
        await window.mongepay.init({
            authToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAwQUJCRjQwRkQ4MjA5M0VDRjZFNEJGMUJENzI2OENFQUNFNDg1MURSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IkFLdV9RUDJDQ1Q3UGJrdnh2WEpvenF6a2hSMCJ9.eyJuYmYiOjE2NzY2MjQ4OTUsImV4cCI6MTY3NjYyODQ5NSwiaXNzIjoiaHR0cHM6Ly9yZWcwM3BwZGIwMDEuZ3J1cG9tb25nZS5jb3JwOjQ0MzE2IiwiYXVkIjoiTW9uZ2VQYXlGYWNhZGUiLCJjbGllbnRfaWQiOiJlMjI4MGQ3MS05OTg4LTQ5OWItODNjYS0zMDZkMzQ5OGQwYzMiLCJhcHBpZCI6ImUyMjgwZDcxLTk5ODgtNDk5Yi04M2NhLTMwNmQzNDk4ZDBjMyIsImp0aSI6IkUxMTNDNUY5NkMwMkUwQjcxMEEwQzIyOEY0QUFERTNBIiwiaWF0IjoxNjc2NjI0ODk1LCJzY29wZSI6WyJNb25nZVBheUZhY2FkZSJdfQ.p9SqWkNguqt9S8bdARmD5KO6QYak3whiMG-GyA50Qsuz_uU43ft-_BEQeOHFV0OLzi8oFj_ym_s-3-rG49B3zFa0gu5En1_Sn_HBU7JpecjwWHQ168Fah-42ROnXUXUS0mpNYo4_HqlPQ0JqzysZ8Fph7K-oCXc3VISShXzgXduOIaE8Bl9WQVFIpBKbsGpBBus1g_NjF2b61ztFxUYX1GrFnI1GSoA0jSBIrCXXwHam8rFctzT8G3vliFH2ZnQrUpwiawntUuzmHmfwd-IHaaokUtnQQM5mZNS2o638sh_Sve8X2JK0cMRYVeJY_Svx6yrEc1WGwE0mwnHKpICEBQ",
            cuentaDestino: {
                nombre: "MOTOMAS",
                apellido: "S.A",
                identificacion: "506000000000124",
                tipoIdentificacion: "MERID",
                codigoTipoVerificacion: null,
                ibansMongePay: {
                    iban: "CR44032906010000000057",
                    moneda: "CRC"
                },
                permiteDesembolso: null
            },
            amount: amount,
            currency: "CRC",
            detail: "this is just a test",
            onComplete: () => console.log('hello monge'),
            callBackUrl: "https://amm5q8141i.execute-api.us-east-1.amazonaws.com/dev/mongepay/register",
            callBackAuthHeader: "x-api-key 9nMTxNfJUd9MOWmrRSt3d7jAShvNMgfx7c1MEf7P"
        })
    }

    const getAuthToken = async () => {
        const response = await fetch('https://mongepay-uat.grupomonge-ti.com:44316/api/v1.0/Token/ObtenerToken', {
            method: 'POST',
            body: JSON.stringify({
                "client_id": "e2280d71-9988-499b-83ca-306d3498d0c3",
                "client_secret": "test",
                "scope": "MongePayFacade"
            })
        }).then(res => res.json())
            .then(resJson => {
                console.log('resJson', resJson);
            })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/home-1" className="btn btn-white btn-sm my-40">
                    Back to home
                </Link>
                <div className="item_details">
                    <div className="row sm:space-y-20">
                        <div className="col-lg-6">
                            <img
                                className="item_img"
                                src="img/items/item_2.png"
                                alt="ImgPreview"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="space-y-20">
                                <h3>{name}</h3>
                                <div className="d-flex justify-content-between">

                                    <div className="space-x-10 d-flex align-items-center">
                                        <div>
                                            <div className="share">
                                                <div className="icon" onClick={toggleShare}>
                                                    <i className="ri-share-line"></i>
                                                </div>
                                                <div
                                                    className={`dropdown__popup ${isShare ? 'visible' : null
                                                        } `}>
                                                    <ul className="space-y-10">
                                                        <li>
                                                            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                                                <i className="ri-facebook-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.messenger.com/" rel="noreferrer" target="_blank">
                                                                <i className="ri-messenger-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                                                                <i className="ri-whatsapp-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                                                                <i className="ri-youtube-line"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="more">
                                                <div className="icon" onClick={toggleMore}>
                                                    <i className="ri-more-fill"></i>
                                                </div>
                                                <div
                                                    className={`dropdown__popup ${isMore ? 'visible' : null
                                                        } `}>
                                                    <ul className="space-y-10">
                                                        <li>
                                                            <Popup
                                                                className="custom"
                                                                ref={ref}
                                                                trigger={
                                                                    <Link
                                                                        to="#"
                                                                        className="content space-x-10 d-flex">
                                                                        <i className="ri-flag-line" />
                                                                        <span> Report </span>
                                                                    </Link>
                                                                }
                                                                position="bottom center">
                                                                <div>
                                                                    <div
                                                                        className="popup"
                                                                        id="popup_bid"
                                                                        tabIndex={-1}
                                                                        role="dialog"
                                                                        aria-hidden="true">
                                                                        <div>
                                                                            <div className="space-y-20">
                                                                                <h5>
                                                                                    Thank you,
                                                                                    <span className="color_green">
                                                                                        we've received your report
                                                                                    </span>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popup>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="box customBox">
                                    <div className="space-y-20">
                                        <div className="d-flex justify-content-between mb-30_reset">
                                            <div className="d-flex space-x-10 mb-30 nav-tabs">
                                                <div className="nav-item">
                                                    <div
                                                        className="btn btn-white btn-sm"
                                                        data-toggle="tab"
                                                        to="#tabs-1"
                                                        role="tab">
                                                        Detalles
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="hr" />
                                        <div className="tab-content">
                                            <div className="active">
                                                <p>
                                                    ¡Hola, chicos! ¡Nueva exploración sobre el diseño web de NFT Marketplace,
                                                    esta vez me inspiré en uno de mis sitios web favoritos de NFT llamado Rarible (con pago criptográfico)! ¿Qué opinas?
                                                    No hay ofertas activas todavía. ¡Sé el primero en hacer una oferta!
                                                </p>
                                            </div>
                                            <div className='space-y-20'>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="numbers">
                                        <div className="row">
                                            <div className="col-lg-6" style={{ marginTop: 17 }}>
                                                <div className="space-y-5">
                                                    <p className="color_text">Oferta Mínima</p>
                                                    <h4>
                                                        {amount + ' '}
                                                        <span className="txt_sm color_text">
                                                            CRC
                                                        </span>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space-y-5">
                                                    <p className="color_text"></p>
                                                    <div className="txt_lg _bold">
                                                        {/*
                                                        <Countdown
                                                            date={Date.now() + 80000000}
                                                            renderer={renderer}
                                                        />
                                                        */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex space-x-20" style={{ marginTop: 20 }}>
                                        <button className="btn btn-lg btn-grad">
                                            Buy Now
                                        </button>

                                        <div className='space-y-20'></div>

                                        <button className="btn btn-lg btn-grad">Place Bid</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ItemDetails;
