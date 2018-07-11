import React,{Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import {updateNotes} from '../Database'


class NoteEdit extends Component{
    static navigationOptions = {
        title: 'Note'
      };
    constructor(){
        super();
        this.state={
                note:{
                    name:"",
                    content:""
                }
        }
        
    }


    componentDidMount(){
        let note = this.props.navigation.getParam('note')
        this.setState({note:note});
    }

    update(){
        updateNotes(this.state.note)
        // this.props.navigation.goBack()
    }


    render(){
        
        return(

            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState(prevState=>({
                        note:{
                            ...prevState.note,
                            name
                        }
                    }))}
                    value={this.state.note.name}
                    placeholder={this.state.note.name}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    multiline={true}
                    onChangeText={(content) => this.setState(prevState=>({
                        note:{
                            ...prevState.note,
                            content
                        }
                    }))}
                    value={this.state.note.content}
                    placeholder={this.state.note.content}
                />
                <Button onPress={()=>this.update()}
                title="Update Note"
                color="black"
                />
            </View>

        )
    }


}
export default NoteEdit