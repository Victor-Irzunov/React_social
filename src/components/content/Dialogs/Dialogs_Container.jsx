import React from 'react'
import { upDateNewDialogCreator, sendMessageCreator } from '../../../redux/dialogs_reducer'
import { Dialogs } from './Dialogs'

export const DialogContainer = (props) => {
	let state = props.store.getState()

	// let dialogsElements = state.dialogData.map(obj => (
	// 	<DialogItem obj={obj} key={obj.id} />))

	// let messageElements = state.messages.map(obj => (
	// 	<MessageItem message={obj.message} key={obj.id} />))

	// let newMessageBody = state.newDialogText

	const onNewDialogClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	const onNewDialogChange = (event) => {
		props.store.dispatch(upDateNewDialogCreator(event))
	}


	return (
		<Dialogs
			onNewDialogChange={onNewDialogChange}
			onNewDialogClick={onNewDialogClick}
			dialogData={state.dialogsPage.dialogData}
			messages={state.dialogsPage.messages}
			newDialogText={state.dialogsPage.newDialogText}
		/>
	)
}
