/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from 'reactxp'
import {
    Component
} from 'reactxp'
import { NavigatorSceneConfigType, NavigatorRoute } from "reactxp/dist/common/Types";

const propsNavigator = {
    renderScene: (route: NavigatorRoute) => {
                 return  <RX.View>
                  <RX.Text>
                     VITOR
                 </RX.Text>
                 </RX.View>
             } 
}


interface AppState {}


class App extends RX.Component<null, AppState> {
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

    constructor() {
        super();

        this._translationValue = new RX.Animated.Value(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
        
        this.state = {

        }


    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
              toValue: 0,
              easing: RX.Animated.Easing.OutBack(),
              duration: 500
            }
        );

        animation.start();
    }



    render(): JSX.Element | null {
        const XNav = new RX.Navigator(propsNavigator)
        XNav.push({
            routeId: 1,
            sceneConfigType: NavigatorSceneConfigType.Fade
        })
        return (
            XNav.render()
       );
    }

}

export = App;
