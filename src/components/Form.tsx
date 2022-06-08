import classes from '../styles/form.module.css';
import {Btn} from "./common/Btn";
import {SyntheticEvent, useState} from "react";
import {Link} from "react-router-dom";
import {Map} from "./Map";
import {getLocation} from "../utlis/location";
import {Success} from "./Success";
import emailjs from '@emailjs/browser';
import {LocationError} from "./LocationError";


interface AdForm {
    name: string;
    description: string;
    price: number;
    link: string;
    address: string;
    city: '',
}

export const Form = () => {
    const [formAd, setFormAd] = useState<AdForm>({
        name: '',
        address: "",
        link: '',
        description: '',
        price: 0,
        city: '',
    })
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState<string | null>(null);


    const createNewAd = async (e: SyntheticEvent) => {

        e.preventDefault();

        setLoading(true);

        const location = await getLocation({
            city: formAd.city,
            address: formAd.address
        })

        try {
            if(location === null) {
                setError('Zły adres.')
            } else {
                const {lat, lon} = location;
                const res = await fetch('http://localhost:3001/ad', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formAd,
                        lat,
                        lon
                    })
                })
                const data = await res.json();
                setId(data.adID);
            }

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setFormAd(form => ({
            ...form,
            [key]: value,
        }));
        setError(null);
    };

    if (id) {
        const params = {
            link: `http://localhost:3001/ad/admin/accepted/${id}`
        };
        emailjs.send((process.env.REACT_APP_SERVICE_ID as string), (process.env.REACT_APP_TEMPLATE_ID as string), params, process.env.REACT_APP_PUBLIC).then(r => r.status);

        return <Success id={id}/>
    } else if(error !== null) {
        return <LocationError/>
    }

    if (loading) {
        return <h2>Trwa dodawanie twojego ogłoszenia...</h2>
    }

    return (
        <>
            <Map/>
            <div className={classes.form__container}>
                <div className={classes.form__box}>
                    <form onSubmit={createNewAd}>
                        <h1>Dodawanie ogłoszenia</h1>
                        <Link to='/'>
                            <p className={classes.close__btn}>❌</p>
                        </Link>
                        <label>
                            Nazwa: <br/>
                            <input
                                type="text"
                                name="name"
                                required
                                maxLength={99}
                                value={formAd.name}
                                onChange={(e) => updateForm('name', e.target.value)}
                            />
                        </label>
                        <label>
                            Opis: <br/>
                            <textarea
                                name="description"
                                maxLength={999}
                                rows={Number('10')}
                                onChange={(e) => updateForm('description', e.target.value)}
                            />
                        </label>
                        <label>
                            Cena: <br/>
                            <input
                                type='text'
                                name="price"
                                maxLength={6}
                                onChange={(e) => updateForm('price', e.target.value)}
                            /> <br/>
                            <small>Pozostaw zero w polu, aby nie wyświetlać ceny.</small>
                        </label>
                        <label>
                            Adres URL: <br/>
                            <input
                                type="url"
                                name="url"
                                maxLength={99}
                                onChange={(e) => updateForm('link', e.target.value)}
                            />
                        </label>
                        <label>
                            Ulica: <br/>
                            <input
                                type="text"
                                name="address"
                                required
                                onChange={(e) => updateForm('address', e.target.value)}
                            />
                        </label>
                        <label>
                            Miasto: <br/>
                            <input
                                type="text"
                                name="city"
                                required
                                onChange={(e) => updateForm('city', e.target.value)}
                            />
                        </label>
                        <Btn style={classes.btn} text="Dodaj ogłoszenie"/>
                    </form>
                </div>
            </div>
        </>
    )
}