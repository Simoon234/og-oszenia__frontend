import React, { useEffect, useState} from 'react';
import classes from '../styles/main.module.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {AdSafeReturn} from 'types'

import '../utlis/fix-map';
import 'leaflet/dist/leaflet.css';
import {useSelector} from "react-redux";
import {RootState} from 'src/store/store';
import {SingleAd} from "./SingleAd";
import {api} from "../config/api";

export const Map = () => {
    const text = useSelector((state: RootState) => state.ads.searchValue);
    const [ads, setAds] = useState<AdSafeReturn[]>([]);
    const [counts, setCounts] = useState(0);


    useEffect(() => {
        ( async () => {
            const res = await fetch(`${api}/ad/search/${text}`);
            const data = await res.json();
            setAds(data);
        })();
    }, [text])


    const click = async (id: string) => {
        const res = await fetch(`${api}/ad/${id}`);
        const data = await res.json();
        setCounts(data.visitors);
    };


    return (
        <main className={classes.main}>
            <MapContainer className={classes.leafletContainer} center={[52.2267345,21.0198671]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    {ads && ads.map((ad) =>
                        <Marker key={ad.id} position={[ad.lat, ad.lon]} eventHandlers={{
                            click: async () => {
                                await click(ad.id);
                            }
                        }}>
                            <Popup>
                                <SingleAd id={ad.id} counts={counts}/>
                            </Popup>
                        </Marker>
                    )};

            </MapContainer>

        </main>
    )
}