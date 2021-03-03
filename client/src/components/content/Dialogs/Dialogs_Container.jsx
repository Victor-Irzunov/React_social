import React from 'react'
import { upDateNewDialogCreator, sendMessageCreator } from '../../../redux/dialogs_reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'



//>  контейнерная компонента при испл. REACT-REDAX:
//забываем про store

let mapStateToProps = state => {
	return {
		dialogData: state.dialogsPage.dialogData,
		messages: state.dialogsPage.messages,
		newDialogText: state.dialogsPage.newDialogText
	}
}
let mapDispatchToProps = dispatch => {
	return {
		upDateNewDialogBody: body => dispatch(upDateNewDialogCreator(body)),

		sendMessageBody: () => dispatch(sendMessageCreator())
	}
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)          //< вторые скобки вызвали ф-цию которую вернули первые скобки


export default DialogContainer



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