import React from 'react';
import '../shared/styles/fonts.scss'
import '../shared/styles/variables.scss'
import '../shared/styles/global.scss'
import './App.scss';
import DeliveryFeeCalculator from "../widgets/DeliveryFeeCalculator";

function App() {
    return (
        <div className="App">
            <DeliveryFeeCalculator/>
        </div>
    );
}

export default App;
