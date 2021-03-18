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

	const [state, setState] = useState({
			editMode: false,
			status: props.status
		})

	const activeEditMode = () => setState(prev => {
		return {
			...prev,
			editMode: true,
			status: props.status
		}
	})

	const deactiveEditMode = () => {
		setState(prev => {
			props.upDateStatus(prev.status, props.user.id)
			return {
				...prev,
				editMode: false,
				status: props.status 
			}
		})
	}

	const on = e => {
		setState({
			status: e.currentTarget.value,
			editMode: true,
		})
	}


	return (
		<div>
			{!state.editMode &&
				<div>
					<span style={styles.span} onDoubleClick={activeEditMode}>
						{props.status}
					</span>
				</div>
			}

			{state.editMode &&
				<div>
					<input
						type="text"
						style={styles.input}
						onChange={on}
						onBlur={deactiveEditMode}
						autoFocus={true}
						value={state.status}
						// defaultValue={state.status}
					/>
				</div>
			}
		</div>
	)
}