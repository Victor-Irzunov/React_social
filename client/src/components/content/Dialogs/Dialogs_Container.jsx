import React from 'react'
import { newDialog, sendMessage } from '../../../redux/dialogs_reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'



//>  контейнерная компонента при испл. REACT-REDAX:
class DialogClassContainer extends React.Component {

	//-onChange
	onNewDialog = body => this.props.newDialog(body)

	//-onClick
	sendMessageBody = () => this.props.sendMessage()


	//! Render:
	render() {
		return (
			<Dialogs
				all={this.props}
				onChange_NewDialog={this.onNewDialog}
				onClick_addNewDialog={this.sendMessageBody}
			/>
		)
	}
}

let mapStateToProps = state => {
	return {
		dialogData: state.dialogsPage.dialogData,
		messages: state.dialogsPage.messages,
		newDialogText: state.dialogsPage.newDialogText,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		newDialog: body => dispatch(newDialog(body)),
		sendMessage: () => dispatch(sendMessage())
	}
}

const DialogContainer_w = connect(mapStateToProps, mapDispatchToProps)(DialogClassContainer)          //< вторые скобки вызвали ф-цию которую вернули первые скобки


export default DialogContainer_w



//* connect -возвр по идогу новую контейнерную компоненту

// mapStateToProps - сопоставить Состояние C Пропсами
// mapDispatchToProps - сопоставить отправку с пропсами








//---------------------------------------------------------------
// export const DialogContainer = (props) => {
// 	return (
// 		<Context.Consumer>
// 			{ store => {
// 					let state = store.getState()

// 					const onNewDialogClick = () => {
// 						store.dispatch(sendMessageCreator())
// 					}
// 					const onNewDialogChange = (body) => {
// 						store.dispatch(upDateNewDialogCreator(body))  //вызываю ф-цию и dispatch то что вернёт ф-ция
// 					}
// 					return <Dialogs
// 						upDateNewDialogBody={onNewDialogChange}
// 						sendMessageBody={onNewDialogClick}
// 						dialogData={state.dialogsPage.dialogData}
// 						messages={state.dialogsPage.messages}
// 						newDialogText={state.dialogsPage.newDialogText}
// 					/>
// 				}
// 			}
// 		</Context.Consumer>
// 	)
// }