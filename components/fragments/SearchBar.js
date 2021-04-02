import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

function Searcher() {
    const [state, setstate] = useState('');
    return (

        <SearchBar
            placeholder="chercher un produit"
            onChangeText={setstate}
            value={state}
            inputContainerStyle={
                {
                    backgroundColor: '#eee',
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomRightRadius: 50,
                    height: 30
                }
            }
            containerStyle={
                {
                    backgroundColor: '#fff',
                    borderBottomColor: "#fff",
                    borderTopColor: "#fff",

                }
            }

        />
    )
}

export default Searcher