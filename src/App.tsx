/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from 'reactxp'
import DogAgeCalculator from "./screens/DogAgeCalculator";


interface AppState {}


class App extends RX.Component<null, AppState> {
    constructor() {
        super();
        
        this.state = {

        }


    }

    componentDidMount() {
        
    }



    render(): JSX.Element | null {
        return (
            <DogAgeCalculator />
       );
    }

}

export = App;
