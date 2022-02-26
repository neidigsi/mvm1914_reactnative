import React, { useState, useEffect } from 'react';
import { API } from "@env";
import GalleryList from '../../components/lists/tabLists/GalleryList';
import TabLayout from '../../components/tabs/TabLayout';
import { http } from '../../networking/HttpRequest';

interface IGallery {
    year: string;
    galleries: [
        {
            id: string,
            title: string,
            thumbnailLink: string
        }
    ];
}

const GalleriesScreen = ({ navigation }: any) => {
    const [galleries, setGalleries] = useState<IGallery[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: "0", title: new Date().getFullYear().toString() },
        ]
    });

    useEffect(() => {
        const getGalleries = async () => {
            const galleriesFromServer = await fetchGalleries();
            setGalleries(galleriesFromServer);
            let years: { key: string; title: string; }[] = [];
            galleriesFromServer.forEach((year: IGallery) => years.push({ key: years.length.toString(), title: year.year }));
            setState({
                index: 0,
                routes: years
            })
            setLoading(false);
        }
        getGalleries();
    }, []);

    // Fetch galleries from rest-api
    const fetchGalleries = async () => {
        const data = await http(`${API}/gallery`, "GET", {})
        return data;
    }

    const renderScene = ({ route, jumpTo }: any) => {
        if (galleries !== undefined && galleries.length > 0) {
            let filteredYears = galleries.filter(gallery => gallery.year === route.title);
            if (filteredYears !== undefined && filteredYears.length >= 1) {
                return <GalleryList index={route.key} navigation={navigation} year={route.title} galleries={filteredYears[0].galleries} loading={loading} />;
            }
        }
        return <GalleryList index={route.key} navigation={navigation} year={route.title} galleries={[]} loading={loading} />;

    };

    return (
        <TabLayout
            title="Galerie"
            scene={renderScene}
            state={state}
            setState={setState}
        />
    );
}

export default GalleriesScreen;