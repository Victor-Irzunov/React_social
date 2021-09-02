import React from 'react'
import { render } from 'react-dom'
import Styles from "./Styles"
import { Form, Field } from 'react-final-form'
import cookieLoginAxios from '../../../API__DAL/api'

const LoginForm = props => {

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async values => {
		await sleep(300);
		window.alert(JSON.stringify(values, 0, 2))
	}

	const Fields = ({
		names,
		subscription,
		fieldsState = {},
		children,
		originalRender
	}) => {

		if (!names.length) {
			return (originalRender || children)(fieldsState);
		}
		const [name, ...rest] = names

		return (
			<Field name={name} subscription={subscription}>
				{fieldState => {
					return (
						<Fields
							names={rest}
							subscription={subscription}
							originalRender={originalRender || children}
							fieldsState={{ ...fieldsState, [name]: fieldState }}
						/>
					)
				}}
			</Field>
		)
	}

	return (
		<Styles>
			<h1>🏁 React Final Form</h1>

			<Form
				onSubmit={onSubmit}
				initialValues={{ remember: false }}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label>Email</label>
							<Field
								name="email"
								component="input"
								type="text"
								placeholder="Email"
							/>
						</div>

						<div>
							<label>Password</label>
							<Field
								name="password"
								component="input"
								type="text"
								placeholder="Password"
							/>
						</div>

						<div>
							<label>Remeber me</label>
							<Field
								name="remember"
								component="input"
								type="checkbox" />
						</div>

						<div>
							<label>Notes</label>
							<Field
								name="notes"
								component="textarea"
								placeholder="Notes" />
						</div>

						<div className="buttons">
							<button
								type="submit"
								disabled={submitting || pristine}>
								Submit
							</button>

							<button
								type="button"
								onClick={form.reset}
								disabled={submitting || pristine}>
								Reset
							</button>

						</div>
						<Fields names={["email", "password", "remember", "notes"]}>
							{fieldsState => (<pre>{JSON.stringify(fieldsState, undefined, 2)}</pre>)}
						</Fields>
					</form>
				)}
			/>
		</Styles>
	)
}


export const Login = props => {

	return (
		<div>
			<h1>Login</h1>
			<LoginForm />
		</div>
	)
}
export default LoginForm