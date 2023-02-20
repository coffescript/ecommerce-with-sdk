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

    const initFunction = async (businessToken, nombre, identificacion, iban, currency, amount, detail) => {
        console.log(businessToken, nombre, identificacion, iban, currency, amount, detail);

        await window.mongepay.init({
            authToken: businessToken,
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
            onComplete: () => console.log('hello monge')
        })

        const mongepay = document.querySelector('.makePayment');
        mongepay.classList.add('new-position')
    }

    const getAuthToken = async () => {
        return await fetch('https://mongepay-uat.grupomonge-ti.com:44316/api/v1.0/Token/ObtenerToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "client_id": "e2280d71-9988-499b-83ca-306d3498d0c3",
                "client_secret": "test",
                "scope": "MongePayFacade"
            })
        }).then(res => res.json())
            .then(resJson => resJson);

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

                                    onSubmit={async (values, actions) => {
                                        console.log('values', values);

                                        const token = await getAuthToken();
                                        console.log('token', token);

                                        let businessToken = token.response.access_token;

                                        initFunction(businessToken, values.name, values.identification, values.iban, values.currency, values.amount, values.detail);
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
