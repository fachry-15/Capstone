import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMarker({ setCoordinates }) {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            setCoordinates(e.latlng);
        },
        locationfound(e) {
            map.setView(e.latlng, 13);
        },
    });

    useEffect(() => {
        map.locate({ setView: true, maxZoom: 13 });
    }, [map]);

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
}

function FormLaporanUser() {
    const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
    const [magnitude, setMagnitude] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const entry = {
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            magnitude: magnitude,
        };
        console.log('Data Terakhir Ditambahkan:', entry);
    };

    return (
        <div className="max-w-screen-xl p-6 bg-white border border-gray-200 rounded-base shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
            <h1>Peta Lokasi</h1>
            <MapContainer center={[0, 0]} zoom={10} style={{ height: '60vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker setCoordinates={setCoordinates} />
            </MapContainer>
            <form id="mapForm" onSubmit={handleSubmit} className="max-w-screen-xl mx-auto mt-7">
                <input type="hidden" id="latitude" name="latitude" value={coordinates.lat} readOnly />
                <input type="hidden" id="longitude" name="longitude" value={coordinates.lng} readOnly />
                <div className="mb-5">
                    <label htmlFor="magnitude" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Kekuatan Gempa Yang Dirasakan:
                    </label>
                    <select
                        id="magnitude"
                        name="magnitude"
                        className="block w-full px-3 py-2 text-base leading-6 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        value={magnitude}
                        onChange={(e) => setMagnitude(e.target.value)}
                    >
                        <option>Pilih tingkat gempa yang kamu rasakan</option>
                        <option value="lemah">Lemah</option>
                        <option value="sedang">Sedang</option>
                        <option value="kuat">Kuat</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="magnitude" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Dampak yang ditimbulkan:
                    </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contoh : Bangunan mengalami retak, tembok retak, tanah ambles" />
                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">*Jika tidak merasakan boleh anda kosingkan saja .</p>
                </div>
                <button
                    type="submit"
                    className="text-white rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Simpan Koordinat
                </button>
            </form>
        </div>
    );
}

export default FormLaporanUser;
