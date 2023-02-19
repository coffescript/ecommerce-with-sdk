import React, { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import useDocumentTitle from '../components/useDocumentTitle';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ASSET from '../assets/img/bg/manual-pay.jpeg';

const ManualPayment = () => {
    const notify = () => toast.success('We have recieved your message');

    useDocumentTitle(' Contact');

    useEffect(() => {
        return () => {
            const el = document.querySelector('.makePayment');
            if (el) {
                el.parentElement.removeChild(el);
            }
        };
    }, []);

    const initFunction = async (nombre, identificacion, iban, currency, amount, detail) => {
        console.log(nombre, identificacion, iban, currency, amount, detail);

        await window.mongepay.init({
            authToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAwQUJCRjQwRkQ4MjA5M0VDRjZFNEJGMUJENzI2OENFQUNFNDg1MURSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IkFLdV9RUDJDQ1Q3UGJrdnh2WEpvenF6a2hSMCJ9.eyJuYmYiOjE2NzY2MjQ4OTUsImV4cCI6MTY3NjYyODQ5NSwiaXNzIjoiaHR0cHM6Ly9yZWcwM3BwZGIwMDEuZ3J1cG9tb25nZS5jb3JwOjQ0MzE2IiwiYXVkIjoiTW9uZ2VQYXlGYWNhZGUiLCJjbGllbnRfaWQiOiJlMjI4MGQ3MS05OTg4LTQ5OWItODNjYS0zMDZkMzQ5OGQwYzMiLCJhcHBpZCI6ImUyMjgwZDcxLTk5ODgtNDk5Yi04M2NhLTMwNmQzNDk4ZDBjMyIsImp0aSI6IkUxMTNDNUY5NkMwMkUwQjcxMEEwQzIyOEY0QUFERTNBIiwiaWF0IjoxNjc2NjI0ODk1LCJzY29wZSI6WyJNb25nZVBheUZhY2FkZSJdfQ.p9SqWkNguqt9S8bdARmD5KO6QYak3whiMG-GyA50Qsuz_uU43ft-_BEQeOHFV0OLzi8oFj_ym_s-3-rG49B3zFa0gu5En1_Sn_HBU7JpecjwWHQ168Fah-42ROnXUXUS0mpNYo4_HqlPQ0JqzysZ8Fph7K-oCXc3VISShXzgXduOIaE8Bl9WQVFIpBKbsGpBBus1g_NjF2b61ztFxUYX1GrFnI1GSoA0jSBIrCXXwHam8rFctzT8G3vliFH2ZnQrUpwiawntUuzmHmfwd-IHaaokUtnQQM5mZNS2o638sh_Sve8X2JK0cMRYVeJY_Svx6yrEc1WGwE0mwnHKpICEBQ",
            cuentaDestino: {
                nombre: nombre,
                apellido: "",
                identificacion: identificacion,
                tipoIdentificacion: "MERID",
                codigoTipoVerificacion: null,
                ibansMongePay: {
                    iban: iban,
                    moneda: currency
                },
                permiteDesembolso: null
            },
            amount: amount,
            currency: currency,
            detail: detail,
            onComplete: () => console.log('hello monge'),
            callBackUrl: "https://amm5q8141i.execute-api.us-east-1.amazonaws.com/dev/mongepay/register",
            callBackAuthHeader: "x-api-key 9nMTxNfJUd9MOWmrRSt3d7jAShvNMgfx7c1MEf7P"
        })

        const mongepay = document.querySelector('.makePayment');
        mongepay.classList.add('new-position')
    }

    return (
        <div>
            <Header />
            <div className="contact">
                <div className="row">
                    <div className="col-md-4 contact__img">
                        <div className="img__wrap">
                            <img src={ASSET} alt="contact" />
                        </div>
                    </div>
                    <div className="col-md-8 contact__content">
                        <div className="container">
                            <div className="content__wrap space-y-20">
                                <div className="space-y-20">
                                    <h1 className="text-left">Pago Manual.</h1>
                                    <p className="contact__desc">
                                        En esta seccion podra introducir los datos necesarios para habilitar el boton de pago.
                                    </p>
                                </div>

                                <Formik
                                    initialValues={{
                                        name: '',
                                        iban: '',
                                        identification: '',
                                        amount: '',
                                        currency: 'CRC',
                                        detail: ''
                                    }}
                                    validationSchema={
                                        Yup.object().shape({
                                            name: Yup.string(),// .required(),
                                            iban: Yup.string(),// .required(),
                                            identification: Yup.string(),
                                            currency: Yup.string(),// .required()
                                            detail: Yup.string()
                                        })
                                    }

                                    onSubmit={(values, actions) => {
                                        console.log('values', values);
                                        initFunction(values.name, values.identification, values.iban, values.currency, values.amount, values.detail);
                                    }}
                                >
                                    {props => (
                                        <div className="box is__big">
                                            <div className="space-y-10 mb-0">
                                                <div className="row sm:space-y-20">
                                                    <div className="col-md-6 space-y-20">
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Nombre</span>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                onChange={props.handleChange('name')}
                                                                onBlur={props.handleBlur('name')}
                                                                value={props.values.name}
                                                                placeholder="MOTOMAS S.A."
                                                            />
                                                        </div>
                                                        <div className="space-y-10">
                                                            <span className="nameInput">IBAN</span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="CR44032906010000000057"
                                                                onChange={props.handleChange('iban')}
                                                                onBlur={props.handleBlur('iban')}
                                                                value={props.values.iban}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 space-y-20">
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Identificacion</span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="117730845"
                                                                onChange={props.handleChange('identification')}
                                                                onBlur={props.handleBlur('identification')}
                                                                value={props.values.identification}
                                                            />
                                                        </div>
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Moneda</span>
                                                            <select
                                                                className="form-select
                                            custom-select"
                                                                aria-label="Default
                                            select example"
                                                                value={props.values.currency}
                                                                onChange={props.handleChange('currency')}
                                                                onBlur={props.handleBlur('currency')}>
                                                                <option value="CRC" label="CRC">CRC</option>
                                                                <option value="USD" label="USD">USD</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row sm:space-y-20">
                                                    <div className="col-md-6 space-y-20">
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Monto:</span>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="1000"
                                                                onChange={props.handleChange('amount')}
                                                                onBlur={props.handleBlur('amount')}
                                                                value={props.values.amount}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 mt-20">
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Detalle</span>
                                                            <textarea
                                                                style={{ minHeight: 110 }}
                                                                className="mb-0"
                                                                defaultValue={
                                                                    '                                        '
                                                                }
                                                                onChange={props.handleChange('detail')}
                                                                onBlur={props.handleBlur('detail')}
                                                                value={props.values.detail}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="btn btn-primary" onClick={() => props.handleSubmit()}>
                                                    Generar Boton de Pago
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManualPayment;
