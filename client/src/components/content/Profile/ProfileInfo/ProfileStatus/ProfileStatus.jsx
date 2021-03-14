import React, { useState } from 'react'

const styles = {
	span: {
		marginLeft: '30px'
	},
	input: {
		marginLeft: '1rem'
	}
}




export const ProfileStatus = props => {
console.log("🚀  _ file: ProfileStatus.jsx _ line 16 _ props", props)


	const [state, setState] = useState(() => ({ editMode: false }))
	const activeEditMode = () => setState({ editMode: true })
	const deactiveEditMode = () => setState({ editMode: false })

	// const inPut = React.createRef()

	// const on = () => {
	// 	const text = inPut.current.value
	// 	props.updateNewStatusText(text)
	// }

	return (
		<div>
			{!state.editMode &&
				<div>
					<span style={styles.span} onDoubleClick={activeEditMode}>
						{props.user.status}
					</span>
				</div>
			}

			{state.editMode &&
				<div>
				<input
					type="text"
					style={styles.input}
					onBlur={deactiveEditMode}
					autoFocus={true}
					defaultValue={props.user.status}
					// value={props.newStatusText}
					// ref={inPut}
					// onChange={on}
				/>
				</div>
			}
		</div>
	)
}