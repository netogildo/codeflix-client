import React from 'react';
import { getAppSettings } from '../lib/settings';
import { getFeaturedMovie } from '../service/dashboard/MovieService';

async function Settings() {

    const featuredMovie = await getFeaturedMovie('101');

    const { theme, language } = await getAppSettings();

    return (
        <div>
            <h1 className='text-2xl font-bold'>Settings Page</h1>

            <div className='border border-dashed border-red-500 p-4'>

                <p>Teste: {featuredMovie.title}</p>

                <p>Theme: {theme}</p>
                <p>Language: {language}</p>
            </div>

        </div>
    )
}

export default Settings;