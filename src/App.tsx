import { Asset } from '@cognite/sdk/dist/src';
import React, { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';

function App() {
    const [search, setSearch] = useState<string>('');
    const [assets, setAssets] = useState<Asset[]>({} as Asset[]);

    const {
        handleAuthenticate,
        client
    } = useAuth();

    useEffect(() => {
        handleAuthenticate();
    }, []);

    useEffect(() => {
        async function getAssets() {
            try {
                const assets = await client.assets?.list().autoPagingToArray({ limit: 10 });
                setAssets(assets);
            } catch(err) {
                console.log(err);
            }
        }

        if (client) getAssets();
    }, [client]);

    async function handleSearch() {
        const newSearch = await client.assets.search({
            search: {
                query: search
            }
        });

        setAssets(newSearch);
    }

    function renderAssets() {
        return (
            <table id='assets'>
                <tr key={0}>
                    <th>ID</th>
                    <th>Asset</th>
                    <th>Description</th>
                </tr>
                {
                    assets.map((asset, idx) => {
                        return (
                            <tr key={idx + 1}>
                                <td>{asset.id}</td>
                                <td>{asset.name}</td>
                                <td>{asset.description}</td>
                            </tr>
                        )
                    })
                }

            </table>
        )
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    width: '100%',
                    marginBottom: '2rem',
                    background: '#CCC',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <input
                    type="text"
                    value={search}
                    placeholder='Search by the asset name'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSearch(e.target.value);
                        handleSearch();
                    }}
                    style={{
                        width: '40%'
                    }}
                />
            </div>

            <div>
                {assets && assets.length > 0 && renderAssets()}
            </div>
        </div>
    );
}

export default App;
