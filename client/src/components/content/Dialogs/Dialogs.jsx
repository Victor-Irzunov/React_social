import React from 'react'
import css from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { MessageItem } from './MessageItem/MessageItem.jsx'


export const Dialogs = (props) => {

	let dialogsElements = props.dialogData.map(obj => (

		<DialogItem obj={obj} key={obj.id} />))

	let messageElements = props.messages.map(obj => (

		<MessageItem message={obj.message} key={obj.id} />))

	let newMessageBody = props.newDialogText

	const onNewDialogClick = () => {
		props.sendMessageBody()                                   //вызову какойто колбэк (недодумался)
	}

	const onNewDialogChange = (event) => {
		let body = event.target.value
		props.upDateNewDialogBody(body)                            //вызову какойто колбэк (недодумался)
	}

	return (
		<div className={css.dialogs}>
			<div className={css.dialogsItem}>

				{dialogsElements}
			</div>
			<div className={css.messages}>
				<div>

					{messageElements}
				</div>
				<div>
					<div>
						<textarea
							onChange={onNewDialogChange}
							placeholder='Enter your message'
							value={newMessageBody}>
						</textarea>
					</div>
					<br />
					<div>
						<button onClick={onNewDialogClick}>Add dialog</button>
					</div>
				</div>
			</div>
		</div>
	)
}
