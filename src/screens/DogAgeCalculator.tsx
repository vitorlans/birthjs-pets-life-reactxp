import * as RX from 'reactxp'
const { View, Component, Text, TextInput, ScrollView, Picker, Alert } = RX;

import Button from '../components/Button';


const _styles = {
    headerText:RX.Styles.createTextStyle({
        fontSize:48
    }),
    content: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        marginLeft: RX.Platform.getType() == "web" ? 24 : 16,
        marginRight: RX.Platform.getType() == "web" ? 24 : 16,
    }),
    modal: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'blue',
        alignItems: 'center'
    }),
    headerInfo: RX.Styles.createTextStyle({
        fontSize:24,
        textAlign:'center'
    }),
    label: RX.Styles.createTextStyle({
        marginTop: 16,
        marginBottom: 1,
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',      
    }), 
    textInput: RX.Styles.createTextInputStyle({
        // paddingLeft: 26,
        // paddingRight: 19,
        // margin: 8,
        // borderRadius: 3,
        // overflow: 'hidden',
        // backgroundColor: 'grey',
         fontSize: 18,
        // color: 'black',
         height: 40
    }),
    textInputContainer: RX.Styles.createViewStyle({
        borderColor: 'grey',
        borderStyle: 'solid',
        borderBottomWidth: 1
    }),
    picker: RX.Styles.createPickerStyle({
        borderColor: 'grey',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        height:40
    })


}

interface DogAgeState {
    size?: string,
    age?: string,
    name?:string 
}


export default class DogAgeCalculator extends Component<null, DogAgeState> {

    constructor() {
        super();

        this.state = {
            size: "1",
            age: "",
            name: ""
        }
    }


    render(): JSX.Element | null {

    
      return (
        <ScrollView>
            <View>
                <Text style={_styles.headerText}>HEADER</Text>
                <Text style={_styles.headerInfo}>Calculate your pet age in human years</Text>
            </View>
            <View style={_styles.content}>
                
                <Text style={_styles.label}>Name</Text>
                <View style={_styles.textInputContainer}>
                    <TextInput value={this.state.name} style={_styles.textInput}/>
                </View>

                {/*<Text style={_styles.label}>Breed</Text>
                <View style={_styles.buttonContainer}>
                    <TextInput style={_styles.textInput} />
                </View>*/}

                <Text style={_styles.label}>Age</Text>
                <View style={_styles.textInputContainer}>
                    <TextInput keyboardType={"numeric"} value={this.state.age} maxLength={2} style={_styles.textInput} onChangeText={this._ageTextInputChange} />
                </View>
                {/*<RX.Button>
                    <Text>TX</Text>
                </RX.Button>
                <RX.Button>
                    <Text>TA</Text>
                </RX.Button>*/}
                
                <Text style={_styles.label}>Size</Text>
                <Picker style={_styles.picker} items={
                    [{
                        label: "Small dog",
                        value: "1"
                    },
                    {
                        label: "Average dog",
                        value: "2"
                    },
                    {
                        label: "Big dog",
                        value: "3"
                    }]
                } selectedValue={this.state.size} onValueChange={this._pickerChange}/>
                


                <Button text="Check" onPress={this._buttonPress} backgroundColor="#000"></Button>

                <Text style={_styles.label}></Text>
            </View>
        </ScrollView>
      );
    }
    
    private _ageTextInputChange = (newString: string) => {
        let newText = newString.replace(/[^0-9]+/g, '');


        this.setState({age : newText})  
    }

    private _buttonPress = () => {
        Alert.show("TESTE", "TESTE", [{text: "OK"}, {text:"Cancelar"}])
    }

    private _pickerChange = (itemValue: string, itemPosition: number) => {
        this.setState({
            size: itemValue
        })
    }
    
   
}  