import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import animation from './animData/data.json';
import animation2 from './animData/1.json';

const App = () => {
    const [btn, setBtn] = useState(false);
    const teksti = 'testiä vaan';
    animation.layers[0].t.d.k[0].s.t = teksti;
    console.log(animation.layers[0].t.d.k[0].s.t);

    return (
        <>
            <div onClick={() => btn && setBtn(false)}>
                <Lottie
                    style={{ height: window.innerHeight, position: 'absolute', width: '40%' }}
                    options={{
                        animationData: btn ? animation : animation2,
                    }}
                />
            </div>
            <div onClick={() => (btn ? setBtn(false) : setBtn(true))}>
                <Lottie
                    style={{
                        height: window.innerHeight,
                        position: 'absolute',
                        width: '40%',
                        left: '60%',
                    }}
                    options={{
                        animationData: btn ? animation : animation2,
                    }}
                />
            </div>
            <div onClick={() => (btn ? setBtn(false) : setBtn(true))}>
                <Lottie
                    style={{ height: window.innerHeight }}
                    options={{
                        animationData: animation,
                    }}
                />
            </div>
        </>
    );
};

export default App;
