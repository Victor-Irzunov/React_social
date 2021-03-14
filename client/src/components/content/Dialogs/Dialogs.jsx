import React from 'react'
import css from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { MessageItem } from './MessageItem/MessageItem.jsx'
// import { Redirect } from 'react-router'


export const Dialogs = (props) => {

	let dialogsElements = props.all.dialogData.map(obj => (
		<DialogItem obj={obj} key={obj.id} />))

	let messageElements = props.all.messages.map(obj => (
		<MessageItem message={obj.message} key={obj.id} />))

	let newMessageBody = props.all.newDialogText


	return (
		<div className={css.dialogs}>
			<div className={css.dialogsItem}>
				<h1>DialogItem</h1>
				{dialogsElements}
			</div>
			<div className={css.messages}>
				<div>
					<h1>MessageItem</h1>
					{messageElements}
				</div>
				<div>
					<div>
						<textarea
							onChange={(event) => {
								let body = event.target.value
								props.onChange_NewDialog(body)
							}}
							placeholder='Enter your message'
							value={newMessageBody}>
						</textarea>
					</div>
					<br />
					<div>
						<button onClick={() => { props.onClick_addNewDialog() }}>Add dialog</button>
					</div>
				</div>
			</div>
		</div>
	)
}
